import { getDynamicIncentiveHeadline } from '@/ai/flows/dynamic-incentive-headline';
import { getHeroSubHeadline } from '@/ai/flows/hero-sub-headline';
import AboutSection from '@/components/sections/about';
import ContactSection from '@/components/sections/contact';
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
    const [headlineResult, subHeadlineResult] = await Promise.all([
      getDynamicIncentiveHeadline().catch(e => {
        console.error('Failed to get headline:', e);
        return { headline: DEFAULT_HEADLINE };
      }),
      getHeroSubHeadline().catch(e => {
        console.error('Failed to get sub-headline:', e);
        return { subHeadline: DEFAULT_SUBHEADLINE };
      }),
    ]);
    
    headline = headlineResult.headline;
    subHeadline = subHeadlineResult.subHeadline;
    
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
      <ServicesSection />
      <TrainersSection />
      <FeedbackSection />
      <ContactSection />
    </>
  );
}
