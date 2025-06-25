'use client';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const formats = [
  { value: 'webp', label: 'WebP', description: 'Modern, high compression', recommended: true },
  { value: 'avif', label: 'AVIF', description: 'Next-gen, best compression', recommended: true },
  { value: 'jpg', label: 'JPG', description: 'Universal compatibility' },
  { value: 'png', label: 'PNG', description: 'Lossless, transparency' },
  { value: 'bmp', label: 'BMP', description: 'Uncompressed bitmap' },
  { value: 'tiff', label: 'TIFF', description: 'High quality, print' },
  { value: 'ico', label: 'ICO', description: 'Icon format' },
];

interface FormatSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export function FormatSelector({ value, onChange }: FormatSelectorProps) {
  return (
    <div className="space-y-4">
      <ToggleGroup 
        type="single" 
        value={value} 
        onValueChange={onChange}
        className="grid grid-cols-2 gap-3"
      >
        {formats.map((format) => (
          <ToggleGroupItem 
            key={format.value} 
            value={format.value}
            className="flex flex-col items-start p-4 h-auto text-left relative border-2 data-[state=on]:border-primary data-[state=on]:bg-primary/5"
          >
            {format.recommended && (
              <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                Recommended
              </div>
            )}
            <span className="font-semibold text-base">{format.label}</span>
            <span className="text-xs text-muted-foreground mt-1">
              {format.description}
            </span>
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      
      <div className="text-xs text-muted-foreground bg-muted/50 p-3 rounded-lg">
        <strong>Tip:</strong> WebP and AVIF offer the best compression while maintaining quality. 
        Use PNG for images requiring transparency, JPG for maximum compatibility.
      </div>
    </div>
  );
}