'use server';
/**
 * @fileOverview A dynamic incentive headline generator.
 *
 * - getDynamicIncentiveHeadline - A function that returns a motivational headline.
 * - DynamicIncentiveHeadlineOutput - The return type for the getDynamicIncentiveHeadline function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DynamicIncentiveHeadlineOutputSchema = z.object({
  headline: z.string().describe('A motivational headline to encourage users.'),
});
export type DynamicIncentiveHeadlineOutput = z.infer<typeof DynamicIncentiveHeadlineOutputSchema>;

const DEFAULT_HEADLINE = "Unlock Your Potential: Start Your Free Trial Today!";

export async function getDynamicIncentiveHeadline(): Promise<DynamicIncentiveHeadlineOutput> {
  return dynamicIncentiveHeadlineFlow();
}

const prompt = ai.definePrompt({
  name: 'dynamicIncentiveHeadlinePrompt',
  output: {schema: DynamicIncentiveHeadlineOutputSchema},
  prompt: `You are a marketing expert specializing in creating motivational headlines for a fitness gym.

  Generate a single, compelling and motivational headline to encourage users to explore the gym's offerings and sign up for a free trial. The headline should be concise and professional.

  Example headlines:
  - "Unlock Your Potential: Start Your Free Trial Today!"
  - "Transform Your Body and Mind: Free Trial Awaits!"
  - "Reach Your Fitness Goals: Claim Your Free Trial Now!"
  `,
});

const dynamicIncentiveHeadlineFlow = ai.defineFlow(
  {
    name: 'dynamicIncentiveHeadlineFlow',
    outputSchema: DynamicIncentiveHeadlineOutputSchema,
  },
  async () => {
    try {
      const {output} = await prompt({});
      return output!;
    } catch (error) {
      console.error('AI service unavailable for dynamic headline, returning default:', error);
      return { headline: DEFAULT_HEADLINE };
    }
  }
);
