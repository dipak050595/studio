import { getDynamicIncentiveHeadline } from '@/ai/flows/dynamic-incentive-headline';
import { getHeroSubHeadline } from '@/ai/flows/hero-sub-headline';
import AboutSection from '@/components/sections/about';
import ContactSection from '@/components/sections/contact';
import HeroSection from '@/components/sections/hero';
import ServicesSection from '@/components/sections/services';
import TrainersSection from '@/components/sections/trainers';
import { Suspense } from 'react';

async function Headlines() {
  const [{ headline }, { subHeadline }] = await Promise.all([
    getDynamicIncentiveHeadline(),
    getHeroSubHeadline(),
  ]);

  return <HeroSection headline={headline} subHeadline={subHeadline} />;
}

function HeadlineSkeleton() {
  return (
    <HeroSection
      headline="Unlock Your Potential"
      subHeadline="State-of-the-art facilities, expert trainers, and a supportive community to help you triumph."
    />
  );
}

export default function Home() {
  return (
    <>
      <Suspense fallback={<HeadlineSkeleton />}>
        <Headlines />
      </Suspense>
      <ServicesSection />
      <AboutSection />
      <TrainersSection />
      <ContactSection />
    </>
  );
}
