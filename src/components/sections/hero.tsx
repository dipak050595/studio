import Link from 'next/link';

import { Button } from '@/components/ui/button';

type HeroSectionProps = {
  headline: string;
  subHeadline: string;
  videoUrl?: string;
};

export default function HeroSection({
  headline,
  subHeadline,
  videoUrl,
}: HeroSectionProps) {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
      {videoUrl ? (
        <video
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2"
        />
      ) : (
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
          <p className="text-white">Loading video...</p>
        </div>
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
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="#contact-form">Book a Free Trial</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
