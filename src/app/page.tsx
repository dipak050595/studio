import { getDynamicIncentiveHeadline } from '@/ai/flows/dynamic-incentive-headline';
import { getHeroSubHeadline } from '@/ai/flows/hero-sub-headline';
import AboutSection from '@/components/sections/about';
import ContactSection from '@/components/sections/contact';
import { EditableHeroSection } from '@/components/sections/editable-hero-section';
import FeedbackSection from '@/components/sections/feedback';
import ServicesSection from '@/components/sections/services';
import TrainersSection from '@/components/sections/trainers';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Suspense } from 'react';

const DEFAULT_HEADLINE = "Unlock Your Potential";
const DEFAULT_SUBHEADLINE = "State-of-the-art facilities, expert trainers, and a supportive community to help you triumph.";

async function HeroContent() {
  const [headlineResult, subHeadlineResult] = await Promise.all([
    getDynamicIncentiveHeadline(),
    getHeroSubHeadline(),
  ]);

  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <EditableHeroSection
      headline={headlineResult.headline}
      subHeadline={subHeadlineResult.subHeadline}
      imageUrl={heroImage?.imageUrl}
    />
  );
}

function HeroSkeleton() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
  return (
    <EditableHeroSection
      headline={DEFAULT_HEADLINE}
      subHeadline={DEFAULT_SUBHEADLINE}
      imageUrl={heroImage?.imageUrl}
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
