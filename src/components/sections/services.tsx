import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Dumbbell, HeartPulse, Users, Zap, વૃદ્ધ, Accessibility, PersonStanding } from 'lucide-react';

const services = [
  {
    icon: <Dumbbell className="h-10 w-10 text-primary" />,
    title: 'Strength Training',
    description:
      'Build muscle and strength with our wide range of free weights and resistance machines.',
  },
  {
    icon: <Accessibility className="h-10 w-10 text-primary" />,
    title: 'Senior Citizens Rehabilitation',
    description:
      'Specialized programs to improve mobility, balance, and strength for seniors.',
  },
  {
    icon: <PersonStanding className="h-10 w-10 text-primary" />,
    title: 'Female Fitness',
    description:
      'Tailored fitness plans focusing on women\'s health and wellness goals.',
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: 'Power Yoga',
    description:
      'Dynamic yoga sessions to build strength, flexibility, and mental focus.',
  },
  {
    icon: <HeartPulse className="h-10 w-10 text-primary" />,
    title: 'Injury Rehabilitation',
    description:
      'Customized rehabilitation programs to help you recover from injuries and regain strength.',
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
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
