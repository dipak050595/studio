'use server';
/**
 * @fileOverview A dynamic hero sub-headline generator.
 *
 * - getHeroSubHeadline - A function that returns a motivational sub-headline.
 * - HeroSubHeadlineOutput - The return type for the getHeroSubHeadline function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const HeroSubHeadlineOutputSchema = z.object({
  subHeadline: z.string().describe('A motivational sub-headline to encourage users.'),
});
export type HeroSubHeadlineOutput = z.infer<typeof HeroSubHeadlineOutputSchema>;

const DEFAULT_SUBHEADLINE = "State-of-the-art facilities, expert trainers, and a supportive community to help you triumph.";

export async function getHeroSubHeadline(): Promise<HeroSubHeadlineOutput> {
  return heroSubHeadlineFlow();
}

const prompt = ai.definePrompt({
  name: 'heroSubHeadlinePrompt',
  output: {schema: HeroSubHeadlineOutputSchema},
  prompt: `You are a marketing expert specializing in creating motivational copy for a fitness gym.

  Generate a single, compelling and motivational sub-headline to follow the main headline on the hero section. The sub-headline should be concise, professional, and inspiring. It should complement the main headline and encourage users to learn more.

  Current sub-headline: "State-of-the-art facilities, expert trainers, and a supportive community to help you triumph."

  Generate something more interesting and motivational.

  Example sub-headlines:
  - "Unleash your potential, transform your life. Your journey to greatness begins now."
  - "Where dedication meets innovation. Discover a fitness experience designed for results."
  - "More than a gym, we're your partners in transformation. Achieve your goals with our expert guidance and vibrant community."
  `,
});

const heroSubHeadlineFlow = ai.defineFlow(
  {
    name: 'heroSubHeadlineFlow',
    outputSchema: HeroSubHeadlineOutputSchema,
  },
  async () => {
    try {
      const {output} = await prompt({});
      return output!;
    } catch (error) {
      console.error('AI service unavailable for hero sub-headline, returning default:', error);
      return { subHeadline: DEFAULT_SUBHEADLINE };
    }
  }
);
