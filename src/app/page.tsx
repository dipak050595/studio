import { getDynamicIncentiveHeadline } from '@/ai/flows/dynamic-incentive-headline';
import { getHeroSubHeadline } from '@/ai/flows/hero-sub-headline';
import AboutSection from '@/components/sections/about';
import ContactSection from '@/components/sections/contact';
import HeroSection from '@/components/sections/hero';
import TrainersSection from '@/components/sections/trainers';

export default async function Home() {
  const [{ headline }, { subHeadline }] = await Promise.all([
    getDynamicIncentiveHeadline(),
    getHeroSubHeadline(),
  ]);

  return (
    <>
      <HeroSection headline={headline} subHeadline={subHeadline} />
      <AboutSection />
      <TrainersSection />
      <ContactSection />
    </>
  );
}
