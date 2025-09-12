import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Dumbbell, HeartPulse, Users, Zap } from 'lucide-react';

const services = [
  {
    icon: <Dumbbell className="h-10 w-10 text-primary" />,
    title: 'Strength Training',
    description:
      'Build muscle and strength with our wide range of free weights and resistance machines.',
  },
  {
    icon: <HeartPulse className="h-10 w-10 text-primary" />,
    title: 'Cardio Fitness',
    description:
      'Improve your endurance and heart health with our state-of-the-art cardio equipment.',
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Group Classes',
    description:
      'Join our energetic group classes, including yoga, HIIT, and spinning, led by expert instructors.',
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: 'Personal Training',
    description:
      'Get one-on-one guidance and a customized workout plan from our certified personal trainers.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding">
      <div className="container fade-in-up">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
            We offer a variety of services to help you achieve your fitness goals.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
