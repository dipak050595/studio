'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { FitnmoveLogo } from './icons/fitnmove-logo';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#trainers', label: 'Trainers' },
  { href: '#feedback', label: 'Feedback' },
  { href: '#contact-details', label: 'Contact' },
];

export default function PageHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-background/80 shadow-md backdrop-blur-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="https://i.postimg.cc/1t1nC2dG/Whats-App-Image-2025-09-27-at-8-08-07-PM.jpg" alt="FITNMOVE Logo" width={80} height={80} className="h-20 w-20 object-contain" />
          <span className="text-xl font-bold bg-gradient-to-r from-[#8A2BE2] via-[#FF69B4] to-[#FFA500] text-transparent bg-clip-text">
            FITNMOVE
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="hidden md:inline-flex bg-red-500 text-white hover:bg-red-600 active:bg-green-500"
          >
            <Link href="#contact-form">Book Free Trial</Link>
          </Button>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-6 pt-8">
                <Link href="/" className="mb-4 flex items-center gap-2">
                  <Image src="https://i.postimg.cc/1t1nC2dG/Whats-App-Image-2025-09-27-at-8-08-07-PM.jpg" alt="FITNMOVE Logo" width={56} height={56} className="h-14 w-14 object-contain" />
                  <span className="text-xl font-bold bg-gradient-to-r from-[#8A2BE2] via-[#FF69B4] to-[#FFA500] text-transparent bg-clip-text">
                    FITNMOVE
                  </span>
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  asChild
                  className="mt-4 bg-red-500 text-white hover:bg-red-600 active:bg-green-500"
                  size="lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link href="#contact-form">Book Free Trial</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
