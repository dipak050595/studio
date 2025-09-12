import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type HeroSectionProps = {
  headline: string;
  subHeadline: string;
};

export default function HeroSection({
  headline,
  subHeadline,
}: HeroSectionProps) {
  const heroImage = PlaceHolderImages.find(
    (img) => img.id === 'hero-background'
  );

  return (
    <section className="relative h-[80vh] min-h-[600px] w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div className="container space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {headline}
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-200 md:text-xl">
            {subHeadline}
          </p>
          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="bg-red-500 text-white hover:bg-green-500"
            >
              <Link href="#contact-form">Book a Free Trial</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
