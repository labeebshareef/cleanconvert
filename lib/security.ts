export class SecurityUtils {
  private static readonly ALLOWED_MIME_TYPES = [
    'image/jpeg',
    'image/png',
    'image/webp',
    'image/avif',
    'image/bmp',
    'image/tiff',
    'image/svg+xml',
    'image/gif',
    'image/x-icon',
    'image/vnd.microsoft.icon',
  ];

  private static readonly MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
  private static readonly MAX_FILENAME_LENGTH = 255;

  static validateFile(file: File): { valid: boolean; error?: string } {
    // Check file type
    if (!this.ALLOWED_MIME_TYPES.includes(file.type)) {
      return {
        valid: false,
        error: `File type ${file.type} is not allowed. Please use a valid image format.`
      };
    }

    // Check file size
    if (file.size > this.MAX_FILE_SIZE) {
      return {
        valid: false,
        error: `File size ${Math.round(file.size / 1024 / 1024)}MB exceeds maximum allowed size of ${this.MAX_FILE_SIZE / 1024 / 1024}MB.`
      };
    }

    // Check filename length
    if (file.name.length > this.MAX_FILENAME_LENGTH) {
      return {
        valid: false,
        error: `Filename is too long. Maximum length is ${this.MAX_FILENAME_LENGTH} characters.`
      };
    }

    // Check for suspicious extensions
    const suspiciousExtensions = ['.exe', '.bat', '.cmd', '.scr', '.pif', '.com', '.js', '.vbs', '.jar'];
    const filename = file.name.toLowerCase();
    if (suspiciousExtensions.some(ext => filename.includes(ext))) {
      return {
        valid: false,
        error: 'File contains suspicious content.'
      };
    }

    return { valid: true };
  }

  static sanitizeFilename(filename: string): string {
    // Remove or replace dangerous characters
    return filename
      .replace(/[<>:"/\\|?*\x00-\x1f]/g, '_')
      .replace(/^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i, 'file$1')
      .replace(/^\.*$/, 'file')
      .substring(0, this.MAX_FILENAME_LENGTH);
  }

  static async validateImageIntegrity(file: File): Promise<{ valid: boolean; error?: string }> {
    try {
      // Create a temporary image element to validate the file
      const img = new Image();
      const url = URL.createObjectURL(file);
      
      const result = await new Promise<{ valid: boolean; error?: string }>((resolve) => {
        img.onload = () => {
          URL.revokeObjectURL(url);
          
          // Additional checks
          if (img.width > 10000 || img.height > 10000) {
            resolve({
              valid: false,
              error: 'Image dimensions are too large (max 10000x10000 pixels).'
            });
          } else if (img.width < 1 || img.height < 1) {
            resolve({
              valid: false,
              error: 'Invalid image dimensions.'
            });
          } else {
            resolve({ valid: true });
          }
        };
        
        img.onerror = () => {
          URL.revokeObjectURL(url);
          resolve({
            valid: false,
            error: 'File is corrupted or not a valid image.'
          });
        };
        
        img.src = url;
      });

      return result;
    } catch (error) {
      return {
        valid: false,
        error: 'Failed to validate image integrity.'
      };
    }
  }

  static preventXSS(input: string): string {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
  }

  static generateSecureId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
  }
}
