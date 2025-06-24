'use client';

import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from '@/components/ui/button';
import { Upload, Clipboard, FolderOpen } from 'lucide-react';
import { toast } from 'sonner';

interface FileUploadProps {
  onFilesSelected: (files: File[]) => void;
  accept?: Record<string, string[]>;
  multiple?: boolean;
}

export function FileUpload({ 
  onFilesSelected, 
  accept = {
    'image/*': ['.jpg', '.jpeg', '.png', '.webp', '.avif', '.bmp', '.tiff', '.ico', '.svg']
  },
  multiple = true 
}: FileUploadProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onFilesSelected(acceptedFiles);
  }, [onFilesSelected]);

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    accept,
    multiple,
    noClick: true,
  });

  const handlePaste = async () => {
    try {
      const items = await navigator.clipboard.read();
      const files: File[] = [];
      
      for (const item of items) {
        for (const type of item.types) {
          if (type.startsWith('image/')) {
            const blob = await item.getType(type);
            const file = new File([blob], `pasted-image.${type.split('/')[1]}`, { type });
            files.push(file);
          }
        }
      }

      if (files.length > 0) {
        onFilesSelected(files);
        toast.success(`Pasted ${files.length} image(s) from clipboard`);
      } else {
        toast.error('No images found in clipboard');
      }
    } catch (error) {
      toast.error('Failed to paste from clipboard');
    }
  };

  return (
    <div className="space-y-4">
      <div 
        {...getRootProps()} 
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer
          ${isDragActive ? 'border-primary bg-primary/5' : 'border-muted-foreground/25 hover:border-primary/50'}
        `}
      >
        <input {...getInputProps()} />
        <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
        {isDragActive ? (
          <p className="text-lg">Drop files here...</p>
        ) : (
          <div>
            <p className="text-lg mb-2">Drag & drop images here</p>
            <p className="text-sm text-muted-foreground">
              or use the buttons below
            </p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Button 
          variant="outline" 
          onClick={open}
          className="flex items-center gap-2"
        >
          <FolderOpen className="h-4 w-4" />
          Browse Files
        </Button>
        
        <Button 
          variant="outline" 
          onClick={handlePaste}
          className="flex items-center gap-2"
        >
          <Clipboard className="h-4 w-4" />
          Paste from Clipboard
        </Button>
      </div>
    </div>
  );
}