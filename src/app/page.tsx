import { getDynamicIncentiveHeadline } from '@/ai/flows/dynamic-incentive-headline';
import { getHeroSubHeadline } from '@/ai/flows/hero-sub-headline';
import AboutSection from '@/components/sections/about';
import ContactSection from '@/components/sections/contact';
import ExtraImageSection from '@/components/sections/extra-image';
import FeedbackSection from '@/components/sections/feedback';
import HeroSection from '@/components/sections/hero';
import ServicesSection from '@/components/sections/services';
import TrainersSection from '@/components/sections/trainers';
import { Suspense } from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const DEFAULT_HEADLINE = "Unlock Your Potential";
const DEFAULT_SUBHEADLINE = "State-of-the-art facilities, expert trainers, and a supportive community to help you triumph.";

async function HeroContent() {
  let headline = DEFAULT_HEADLINE;
  let subHeadline = DEFAULT_SUBHEADLINE;

  try {
    const [headlineResult, subHeadlineResult] = await Promise.allSettled([
      getDynamicIncentiveHeadline(),
      getHeroSubHeadline(),
    ]);

    if (headlineResult.status === 'fulfilled') {
      headline = headlineResult.value.headline;
    } else {
      console.error('Failed to get headline:', headlineResult.reason);
    }

    if (subHeadlineResult.status === 'fulfilled') {
      subHeadline = subHeadlineResult.value.subHeadline;
    } else {
      console.error('Failed to get sub-headline:', subHeadlineResult.reason);
    }
  } catch (error) {
    console.error('Error fetching hero content:', error);
  }

  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <HeroSection
      headline={headline}
      subHeadline={subHeadline}
      imageUrl={heroImage?.imageUrl}
    />
  );
}

function HeroSkeleton() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
  return (
    <HeroSection
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
      <ExtraImageSection />
      <ServicesSection />
      <TrainersSection />
      <FeedbackSection />
      <ContactSection />
    </>
  );
}
