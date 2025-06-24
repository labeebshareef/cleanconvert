import JSZip from 'jszip';

export async function extractImagesFromZip(zipFile: File): Promise<File[]> {
  const zip = new JSZip();
  const zipContent = await zip.loadAsync(zipFile);
  const imageFiles: File[] = [];

  const imageExtensions = ['jpg', 'jpeg', 'png', 'webp', 'avif', 'bmp', 'tiff', 'ico', 'svg'];
  
  for (const [filename, file] of Object.entries(zipContent.files)) {
    if (!file.dir) {
      const extension = filename.split('.').pop()?.toLowerCase();
      if (extension && imageExtensions.includes(extension)) {
        const blob = await file.async('blob');
        const imageFile = new File([blob], filename, { type: `image/${extension}` });
        imageFiles.push(imageFile);
      }
    }
  }

  return imageFiles;
}

export async function createZipFromImages(images: { name: string; blob: Blob }[]): Promise<Blob> {
  const zip = new JSZip();
  
  images.forEach(({ name, blob }) => {
    zip.file(name, blob);
  });
  
  return zip.generateAsync({ type: 'blob' });
}