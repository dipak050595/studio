import { getDynamicIncentiveHeadline } from '@/ai/flows/dynamic-incentive-headline';
import AboutSection from '@/components/sections/about';
import ClassesSection from '@/components/sections/classes';
import ContactSection from '@/components/sections/contact';
import HeroSection from '@/components/sections/hero';
import TrainersSection from '@/components/sections/trainers';
import VirtualTourSection from '@/components/sections/virtual-tour';

export default async function Home() {
  const { headline } = await getDynamicIncentiveHeadline();

  return (
    <>
      <HeroSection headline={headline} />
      <AboutSection />
      <ClassesSection />
      <TrainersSection />
      <VirtualTourSection />
      <ContactSection />
    </>
  );
}
