import Image from 'next/image';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const trainers = [
  {
    id: 'trainer-1',
    name: 'Vivek Prakash',
    specialization: 'Fitness & Rehabilitation',
    bio: "Vivek Prakash, a Gold's Gym certified fitness trainer, specializes in strength training, female fitness, and rehabilitation for seniors and injuries. He empowers clients with tailored programs that build resilience, restore function, and boost confidence. His philosophy centers on making effective, sustainable fitness accessible to every body.",
  },
  {
    id: 'trainer-2',
    name: 'Aarushi Kumari',
    specialization: 'Yoga, Flexibility & Gymnastics',
    bio: "Aarushi Kumar, a state-level medalist, expertly blends yoga, flexibility, and gymnastics in her training. She designs dynamic routines that enhance mobility, build functional strength, and achieve impressive feats of flexibility. Her guidance empowers clients to unlock their body's full potential with grace and control.",
  },
  {
    id: 'trainer-3',
    name: 'Utkarsh Shrivastav',
    specialization: '',
    bio: '',
  },
  {
    id: 'trainer-4',
    name: 'Sarah Lee',
    specialization: 'Nutrition & Wellness',
    bio: 'Sarah is a registered dietitian who helps members create sustainable and healthy eating habits.',
  },
];

export default function TrainersSection() {
  return (
    <section id="trainers" className="section-padding">
      <div className="container fade-in-up">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Meet Our Expert Trainers
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
            Our certified professionals are dedicated to helping you achieve your
            fitness goals with personalized guidance and support.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((trainer) => {
            const image = PlaceHolderImages.find(
              (img) => img.id === trainer.id
            );
            return (
              <Card key={trainer.name} className="overflow-hidden text-center">
                <CardHeader className="p-0">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      data-ai-hint={image.imageHint}
                      width={400}
                      height={400}
                      className="aspect-square w-full object-cover"
                    />
                  )}
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl">{trainer.name}</CardTitle>
                  {trainer.specialization && (
                    <CardDescription className="mt-1">
                      <Badge variant="secondary">{trainer.specialization}</Badge>
                    </CardDescription>
                  )}
                  {trainer.bio && (
                    <p className="mt-4 text-sm text-muted-foreground">
                      {trainer.bio}
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
