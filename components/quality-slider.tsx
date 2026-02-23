'use client';

import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

interface QualitySliderProps {
  value: number;
  onChange: (value: number) => void;
}

export function QualitySlider({ value, onChange }: QualitySliderProps) {
  const getQualityLabel = (quality: number) => {
    if (quality >= 90) return { label: 'Maximum', color: 'bg-green-500' };
    if (quality >= 75) return { label: 'High', color: 'bg-blue-500' };
    if (quality >= 60) return { label: 'Medium', color: 'bg-yellow-500' };
    if (quality >= 40) return { label: 'Low', color: 'bg-orange-500' };
    return { label: 'Minimum', color: 'bg-red-500' };
  };

  const qualityInfo = getQualityLabel(value);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label className="text-base font-medium">Quality</Label>
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${qualityInfo.color}`}></div>
          <span className="text-sm font-medium">{value}%</span>
          <Badge variant="outline" className="text-xs">
            {qualityInfo.label}
          </Badge>
        </div>
      </div>
      
      <Slider
        value={[value]}
        onValueChange={(values) => onChange(values[0])}
        max={100}
        min={10}
        step={5}
        className="w-full"
        aria-label={`Image quality: ${value}%`}
      />
      
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Smaller file size</span>
        <span>Higher quality</span>
      </div>

      <div className="text-xs text-muted-foreground bg-muted/50 p-3 rounded-lg">
        <div className="space-y-1">
          <div><strong>85-100%:</strong> Best for photos, minimal compression</div>
          <div><strong>70-85%:</strong> Good balance of quality and size</div>
          <div><strong>50-70%:</strong> Smaller files, slight quality loss</div>
          <div><strong>Below 50%:</strong> Very small files, noticeable quality loss</div>
        </div>
      </div>
    </div>
  );
}