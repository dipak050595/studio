import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const aboutImages = [
  PlaceHolderImages.find((img) => img.id === 'about-1'),
  PlaceHolderImages.find((img) => img.id === 'about-2'),
  PlaceHolderImages.find((img) => img.id === 'about-3'),
].filter(Boolean) as (typeof PlaceHolderImages)[0][];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-6 fade-in-up">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                More Than Just a Gym
              </h2>
              <p className="max-w-xl text-muted-foreground md:text-lg">
                At Triumph Fitness, we believe that a gym is more than just a
                place to work out. It's a community, a source of motivation, and
                a catalyst for transformation. Our mission is to provide a
                welcoming, state-of-the-art environment where you can challenge
                yourself, achieve your goals, and become the best version of
                yourself.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tight">
                Our Core Values
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                <li>
                  <strong>Community:</strong> Fostering a supportive and
                  inclusive atmosphere for all members.
                </li>
                <li>
                  <strong>Excellence:</strong> Providing top-tier facilities,
                  equipment, and expert trainers.
                </li>
                <li>
                  <strong>Transformation:</strong> Empowering you to achieve
                  your physical and mental fitness goals.
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 fade-in-up">
            {aboutImages[0] && (
              <Image
                src={aboutImages[0].imageUrl}
                alt={aboutImages[0].description}
                data-ai-hint={aboutImages[0].imageHint}
                width={600}
                height={400}
                className="col-span-2 row-span-1 w-full h-full object-cover rounded-lg"
              />
            )}
            {aboutImages[1] && (
              <Image
                src={aboutImages[1].imageUrl}
                alt={aboutImages[1].description}
                data-ai-hint={aboutImages[1].imageHint}
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            )}
            {aboutImages[2] && (
              <Image
                src={aboutImages[2].imageUrl}
                alt={aboutImages[2].description}
                data-ai-hint={aboutImages[2].imageHint}
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
