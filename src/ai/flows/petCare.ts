import { ai } from '@/ai/genkit';
import { defineFlow } from 'genkit';
import { z } from 'zod';

export const petCareFlow = defineFlow(
  {
    name: 'petCareFlow',
    inputSchema: z.object({ species: z.string() }),
    outputSchema: z.string(),
    description: 'Generates pet care advice for a given species.',
  },
  async ({ species }) => {
    const prompt = `Provide a few concise, friendly, and useful pet care tips for a ${species}. The tips should be easy for a new pet owner to understand. Focus on three main areas: Diet, Exercise, and Environment. Use markdown for formatting, with each section having a heading.`;
    
    const llmResponse = await ai.generateText({
      prompt,
    });
    
    return llmResponse.text();
  }
);
