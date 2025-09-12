import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    name: 'Jessica M.',
    avatar: 'JM',
    title: 'Life-Changing Experience!',
    quote:
      "Joining FITNMOVE was the best decision I've ever made for my health. The trainers are incredibly supportive and the community is so welcoming. I've seen amazing results!",
    image: 'https://picsum.photos/seed/person1/100/100',
    imageHint: 'woman smiling',
  },
  {
    name: 'Mike P.',
    avatar: 'MP',
    title: 'Top-Notch Facilities',
    quote:
      'The equipment is state-of-the-art and always clean. I love the variety of classes offered. It never gets boring and I always feel challenged.',
    image: 'https://picsum.photos/seed/person2/100/100',
    imageHint: 'man gym',
  },
  {
    name: 'Sarah K.',
    avatar: 'SK',
    title: 'More Than a Gym',
    quote:
      "It's not just a place to work out; it's a community. I've made so many friends here. Everyone is so motivating and it feels like a second home.",
    image: 'https://picsum.photos/seed/person3/100/100',
    imageHint: 'woman portrait',
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
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col">
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
          ))}
        </div>
      </div>
    </section>
  );
}
