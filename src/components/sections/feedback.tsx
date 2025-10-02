
'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const testimonials = [
  {
    name: 'Kunal joshi (IFS)',
    avatar: 'KJ',
    title: 'Life-Changing Experience!',
    quote:
      "Joining FITNMOVE was the best decision I've ever made for my health. The trainers are incredibly supportive and the community is so welcoming. I've seen amazing results!",
    image: 'https://picsum.photos/seed/person1/100/100',
    imageHint: 'man smiling',
  },
  {
    name: 'Deepak shinde (IAS)',
    avatar: 'DS',
    title: 'Top-Notch Facilities',
    quote:
      'The equipment is state-of-the-art and always clean. I love the variety of classes offered. It never gets boring and I always feel challenged.',
    image: 'https://picsum.photos/seed/person2/100/100',
    imageHint: 'man gym',
  },
  {
    name: 'Sanjay Mittal',
    avatar: 'SM',
    title: 'More Than a Gym',
    quote:
      "It's not just a place to work out; it's a community. I've made so many friends here. Everyone is so motivating and it feels like a second home.",
    image: 'https://picsum.photos/seed/person3/100/100',
    imageHint: 'man portrait',
  },
  {
    name: 'Rama aahuja',
    avatar: 'RA',
    title: 'Incredible Support',
    quote:
      'The personal trainers here are top-notch. They helped me create a plan that was perfect for my goals and abilities. I feel stronger and more confident.',
    image: 'https://picsum.photos/seed/person4/100/100',
    imageHint: 'woman smiling',
  },
  {
    name: 'Abhijeet',
    avatar: 'A',
    title: 'A Welcoming Atmosphere',
    quote:
      'As a beginner, I was nervous, but everyone was so friendly. The environment is positive and encouraging, which makes all the difference.',
    image: 'https://picsum.photos/seed/person5/100/100',
    imageHint: 'man workout',
  },
  {
    name: 'Khushi',
    avatar: 'K',
    title: 'Great for Rehabilitation',
    quote:
      'I came here for injury rehabilitation and the results have been fantastic. The trainers are knowledgeable and helped me recover safely.',
    image: 'https://picsum.photos/seed/person6/100/100',
    imageHint: 'woman stretching',
  },
  {
    name: 'Amanda G.',
    avatar: 'AG',
    title: 'Clean and Modern',
    quote:
      'The gym is always spotless and the modern equipment makes workouts enjoyable. I highly recommend FITNMOVE to anyone serious about their fitness.',
    image: 'https://picsum.photos/seed/person7/100/100',
    imageHint: 'woman fitness',
  },
];

export default function FeedbackSection() {
  return (
    <section id="feedback" className="section-padding bg-card">
      <div className="container fade-in-up">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What Our Members Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
            Real stories from real members. Your success is our motivation.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="flex h-full flex-col">
                    <CardHeader className="pb-4">
                      <h3 className="font-bold text-lg">{testimonial.title}</h3>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <blockquote className="italic text-muted-foreground">
                        "{testimonial.quote}"
                      </blockquote>
                    </CardContent>
                    <CardFooter className="pt-4">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage
                            src={testimonial.image}
                            alt={testimonial.name}
                            data-ai-hint={testimonial.imageHint}
                          />
                          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <p className="font-semibold">{testimonial.name}</p>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
