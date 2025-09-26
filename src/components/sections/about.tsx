'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const aboutImages = [
  'about-main',
  'about-2',
  'trainer-1',
  'trainer-2',
  'trainer-3',
  'trainer-4',
];

export default function AboutSection() {
  const images = PlaceHolderImages.filter((img) =>
    aboutImages.includes(img.id)
  );
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-6 fade-in-up">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
                About FITNMOVE
              </h2>
              <div className="mx-auto max-w-3xl">
                <p className="text-muted-foreground md:text-lg">
                  At FITNMOVE, we believe fitness is not just about looking
                  good—it’s about living stronger, healthier, and pain-free at
                  every stage of life. Founded by Vivek Prakash, a certified
                  fitness trainer with years of experience, FITNMOVE specializes
                  in senior citizen fitness, women’s health, and special
                  population training.
                </p>
                <p className="mt-4 text-muted-foreground md:text-lg">
                  Our mission is to make fitness accessible, safe, and
                  enjoyable for everyone, whether you’re recovering from an
                  injury, managing health conditions, or looking to build
                  strength and confidence.
                </p>
                <p className="mt-4 text-muted-foreground md:text-lg">
                  With personalized training plans, expert guidance, and a
                  supportive community, FITNMOVE helps you achieve your health
                  goals—right from the comfort of your home or at our training
                  center.
                </p>
                <p className="mt-4 text-muted-foreground md:text-lg font-semibold">
                  Let’s move towards a healthier tomorrow, together!
                </p>
              </div>
            </div>
          </div>
          <div className="fade-in-up space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <div key={index} className="relative group">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    data-ai-hint={image.imageHint}
                    width={600}
                    height={400}
                    className="object-cover rounded-lg w-full aspect-[3/2]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
