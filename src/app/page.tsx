import { getDynamicIncentiveHeadline } from '@/ai/flows/dynamic-incentive-headline';
import { getHeroSubHeadline } from '@/ai/flows/hero-sub-headline';
import { getHeroVideo } from '@/ai/flows/generate-hero-video';
import AboutSection from '@/components/sections/about';
import ContactSection from '@/components/sections/contact';
import FeedbackSection from '@/components/sections/feedback';
import HeroSection from '@/components/sections/hero';
import ServicesSection from '@/components/sections/services';
import TrainersSection from '@/components/sections/trainers';
import { Suspense } from 'react';

async function HeroContent() {
  const [{ headline }, { subHeadline }, { videoUrl }] = await Promise.all([
    getDynamicIncentiveHeadline(),
    getHeroSubHeadline(),
    getHeroVideo(),
  ]);

  return (
    <HeroSection
      headline={headline}
      subHeadline={subHeadline}
      videoUrl={videoUrl}
    />
  );
}

function HeroSkeleton() {
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
      <Suspense fallback={<HeroSkeleton />}>
        <HeroContent />
      </Suspense>
      <AboutSection />
      <ServicesSection />
      <TrainersSection />
      <FeedbackSection />
      <ContactSection />
    </>
  );
}
