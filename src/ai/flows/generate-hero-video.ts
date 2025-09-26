'use server';
/**
 * @fileOverview A hero video generator.
 *
 * - getHeroVideo - A function that returns a gym-related video.
 * - HeroVideoOutput - The return type for the getHeroVideo function.
 */

import {ai} from '@/ai/genkit';
import {googleAI} from '@genkit-ai/googleai';
import {z} from 'genkit';
import type {MediaPart} from 'genkit';

const HeroVideoOutputSchema = z.object({
  videoUrl: z.string().describe('The URL of the generated video.'),
});
export type HeroVideoOutput = z.infer<typeof HeroVideoOutputSchema>;

async function downloadVideoAsDataUrl(video: MediaPart): Promise<string> {
  const fetch = (await import('node-fetch')).default;
  const videoDownloadResponse = await fetch(
    `${video.media!.url}&key=${process.env.GEMINI_API_KEY}`
  );
  if (
    !videoDownloadResponse ||
    videoDownloadResponse.status !== 200 ||
    !videoDownloadResponse.body
  ) {
    throw new Error('Failed to fetch video');
  }

  const buffer = await videoDownloadResponse.arrayBuffer();
  const base64 = Buffer.from(buffer).toString('base64');
  return `data:video/mp4;base64,${base64}`;
}

const generateHeroVideoFlow = ai.defineFlow(
  {
    name: 'generateHeroVideoFlow',
    outputSchema: HeroVideoOutputSchema,
  },
  async () => {
    try {
      let {operation} = await ai.generate({
        model: googleAI.model('veo-2.0-generate-001'),
        prompt: 'A cinematic shot of a bustling gym with people working out.',
        config: {
          durationSeconds: 7,
          aspectRatio: '16:9',
        },
      });

      if (!operation) {
        throw new Error('Expected the model to return an operation');
      }

      while (!operation.done) {
        operation = await ai.checkOperation(operation);
        await new Promise(resolve => setTimeout(resolve, 5000));
      }

      if (operation.error) {
        throw new Error('failed to generate video: ' + operation.error.message);
      }

      const video = operation.output?.message?.content.find(p => !!p.media);
      if (!video) {
        throw new Error('Failed to find the generated video');
      }
      const videoUrl = await downloadVideoAsDataUrl(video);
      return {videoUrl};
    } catch (err) {
      console.error(err);
      return { videoUrl: '' };
    }
  }
);

export async function getHeroVideo(): Promise<HeroVideoOutput> {
  return generateHeroVideoFlow();
}
