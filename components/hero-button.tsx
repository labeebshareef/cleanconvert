'use client';

import { Button } from '@/components/ui/button';

export function HeroButton() {
  const scrollToConverter = () => {
    const converterSection = document.getElementById('image-converter');
    if (converterSection) {
      converterSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <Button size="lg" className="text-lg px-8 py-6" onClick={scrollToConverter}>
      Start Converting Now
    </Button>
  );
}
