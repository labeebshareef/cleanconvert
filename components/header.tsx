'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, Zap, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { useFeatureTracking } from '@/hooks/use-analytics';

const navigation = [
  { name: 'Convert', href: '/convert' },
  { name: 'Resize', href: '/resize' },
  { name: 'Optimize', href: '/optimize' },
  { name: 'Batch', href: '/batch' },
];

const popularConversions = [
  { name: 'JPG to PNG', href: '/convert/jpg-to-png' },
  { name: 'PNG to WEBP', href: '/convert/png-to-webp' },
  { name: 'WEBP to JPG', href: '/convert/webp-to-jpg' },
  { name: 'JPG to AVIF', href: '/convert/jpg-to-avif' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { trackFeatureClick, trackToolSwitch } = useFeatureTracking();

  const handleNavigation = (itemName: string, href: string) => {
    trackFeatureClick(`nav_${itemName.toLowerCase()}`, 'conversion', 'header_navigation');
    trackToolSwitch(window.location.pathname, href, 'navigation');
  };

  const handleConversionClick = (conversionName: string, href: string) => {
    trackFeatureClick(`quick_convert_${conversionName.toLowerCase().replace(/\s+/g, '_')}`, 'conversion', 'header_dropdown');
    trackToolSwitch(window.location.pathname, href, 'suggestion');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center space-x-2"
            onClick={() => trackFeatureClick('logo_click', 'help', 'header')}
          >
            <Zap className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">CleanConvert</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => handleNavigation(item.name, item.href)}
              >
                {item.name}
              </Link>
            ))}

            {/* Popular Conversions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="flex items-center space-x-1 text-sm font-medium"
                  onClick={() => trackFeatureClick('popular_conversions_dropdown', 'conversion', 'header')}
                >
                  <span>Popular</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {popularConversions.map((conversion) => (
                  <DropdownMenuItem key={conversion.name} asChild>
                    <Link 
                      href={conversion.href}
                      onClick={() => handleConversionClick(conversion.name, conversion.href)}
                    >
                      {conversion.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link 
                    href="/convert"
                    onClick={() => handleNavigation('All Conversions', '/convert')}
                  >
                    View All Conversions
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/help"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => trackFeatureClick('help_nav', 'help', 'header')}
            >
              Help
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => trackFeatureClick('mobile_menu_open', 'help', 'header')}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium transition-colors hover:text-primary"
                    onClick={() => {
                      handleNavigation(item.name, item.href);
                      setIsOpen(false);
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <div className="pt-4 border-t">
                  <p className="text-sm font-medium text-muted-foreground mb-2">Popular Conversions</p>
                  {popularConversions.map((conversion) => (
                    <Link
                      key={conversion.name}
                      href={conversion.href}
                      className="block py-2 text-sm transition-colors hover:text-primary"
                      onClick={() => {
                        handleConversionClick(conversion.name, conversion.href);
                        setIsOpen(false);
                      }}
                    >
                      {conversion.name}
                    </Link>
                  ))}
                </div>
                
                <Link
                  href="/help"
                  className="text-lg font-medium transition-colors hover:text-primary pt-4 border-t"
                  onClick={() => {
                    trackFeatureClick('help_nav_mobile', 'help', 'mobile_menu');
                    setIsOpen(false);
                  }}
                >
                  Help
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}