export class URLManager {
  private static urls = new Set<string>();

  static create(blob: Blob): string {
    const url = URL.createObjectURL(blob);
    this.urls.add(url);
    return url;
  }

  static revoke(url: string): void {
    if (this.urls.has(url)) {
      URL.revokeObjectURL(url);
      this.urls.delete(url);
    }
  }

  static revokeAll(): void {
    this.urls.forEach(url => URL.revokeObjectURL(url));
    this.urls.clear();
  }

  static cleanup(): void {
    // Clean up all URLs (in a real implementation, you'd track creation times)
    this.urls.forEach(url => {
      this.revoke(url);
    });
  }
}

// Cleanup on page unload
if (typeof window !== 'undefined') {
  window.addEventListener('beforeunload', () => {
    URLManager.revokeAll();
  });

  // Periodic cleanup
  setInterval(() => {
    URLManager.cleanup();
  }, 5 * 60 * 1000); // Every 5 minutes
}
