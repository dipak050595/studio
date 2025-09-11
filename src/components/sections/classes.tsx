'use client';

import { Bike, Dumbbell, HeartPulse, PersonStanding, Wind } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type ClassInfo = {
  time: string;
  name: string;
  instructor: string;
  icon: LucideIcon;
};

const schedule: Record<string, ClassInfo[]> = {
  monday: [
    {
      time: '06:00 AM',
      name: 'Sunrise Yoga',
      instructor: 'Elena',
      icon: PersonStanding,
    },
    { time: '09:00 AM', name: 'Spin Fusion', instructor: 'Mark', icon: Bike },
    { time: '05:00 PM', name: 'Power Lift', instructor: 'David', icon: Dumbbell },
    {
      time: '07:00 PM',
      name: 'Cardio Blast',
      instructor: 'Sarah',
      icon: HeartPulse,
    },
  ],
  tuesday: [
    { time: '07:00 AM', name: 'HIIT', instructor: 'Chris', icon: HeartPulse },
    { time: '12:00 PM', name: 'Lunch Crunch', instructor: 'Anna', icon: Dumbbell },
    { time: '06:00 PM', name: 'Zen Flow', instructor: 'Mia', icon: Wind },
  ],
  wednesday: [
    { time: '06:00 AM', name: 'Core & More', instructor: 'James', icon: Dumbbell },
    { time: '09:00 AM', name: 'Cycle Power', instructor: 'Mark', icon: Bike },
    {
      time: '05:00 PM',
      name: 'Strength Circuit',
      instructor: 'David',
      icon: Dumbbell,
    },
    { time: '07:00 PM', name: 'Yoga Flow', instructor: 'Elena', icon: PersonStanding },
  ],
  thursday: [
    {
      time: '07:00 AM',
      name: 'Cardio Kick',
      instructor: 'Sarah',
      icon: HeartPulse,
    },
    { time: '12:00 PM', name: 'Power Hour', instructor: 'Chris', icon: Dumbbell },
    { time: '06:00 PM', name: 'Mindful Moves', instructor: 'Mia', icon: Wind },
  ],
  friday: [
    { time: '06:00 AM', name: 'Full Body Burn', instructor: 'Anna', icon: Dumbbell },
    {
      time: '09:00 AM',
      name: 'Endurance Ride',
      instructor: 'Mark',
      icon: Bike,
    },
    { time: '05:00 PM', name: 'Flex & Flow', instructor: 'Elena', icon: PersonStanding },
    {
      time: '06:30 PM',
      name: 'Weekend Warrior',
      instructor: 'David',
      icon: HeartPulse,
    },
  ],
};

const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

export default function ClassesSection() {
  return (
    <section id="classes" className="section-padding">
      <div className="container fade-in-up">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Class Schedule
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
            Find the perfect class to fit your goals and schedule. We offer a
            variety of classes for all fitness levels.
          </p>
        </div>

        <Tabs defaultValue="monday" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
            {days.map((day) => (
              <TabsTrigger key={day} value={day} className="capitalize">
                {day}
              </TabsTrigger>
            ))}
          </TabsList>

          {days.map((day) => (
            <TabsContent key={day} value={day}>
              <div className="grid gap-6 pt-6 sm:grid-cols-2 lg:grid-cols-4">
                {schedule[day].map((classInfo) => (
                  <Card key={`${day}-${classInfo.name}`} className="h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">
                          {classInfo.name}
                        </CardTitle>
                        <classInfo.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardDescription>{classInfo.time}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Instructor: {classInfo.instructor}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
