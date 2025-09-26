import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const aboutImages = [
  PlaceHolderImages.find((img) => img.id === 'about-1'),
  PlaceHolderImages.find((img) => img.id === 'about-2'),
].filter(Boolean) as (typeof PlaceHolderImages)[0][];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-6 fade-in-up">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About FITNMOVE
              </h2>
              <p className="max-w-xl text-muted-foreground md:text-lg">
                At FITNMOVE, we believe fitness is not just about looking
                good—it’s about living stronger, healthier, and pain-free at
                every stage of life. Founded by Vivek Prakash, a certified
                fitness trainer with years of experience, FITNMOVE specializes
                in senior citizen fitness, women’s health, and special
                population training.
              </p>
              <p className="max-w-xl text-muted-foreground md:text-lg">
                Our mission is simple: to make fitness accessible, safe, and
                enjoyable for everyone, whether you’re recovering from an
                injury, managing health conditions, or looking to build
                strength and confidence.
              </p>
              <p className="max-w-xl text-muted-foreground md:text-lg">
                With personalized training plans, expert guidance, and a
                supportive community, FITNMOVE helps you achieve your health
                goals—right from the comfort of your home or at our training
                center.
              </p>
              <p className="max-w-xl text-muted-foreground md:text-lg font-semibold">
                Let’s move towards a healthier tomorrow, together!
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-2 gap-4 fade-in-up">
            {aboutImages.map((image, index) => (
              <Image
                key={index}
                src={image.imageUrl}
                alt={image.description}
                data-ai-hint={image.imageHint}
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
