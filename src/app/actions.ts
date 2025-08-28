'use server';

import { run } from '@genkit-ai/next/server';
import { petCareFlow } from '@/ai/flows/petCare';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function submitContactForm(data: unknown) {
  const parsed = contactSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, errors: parsed.error.flatten().fieldErrors };
  }
  
  // In a real app, you would send an email, save to a database, etc.
  console.log('New contact form submission:', parsed.data);
  
  return { success: true };
}


export async function getPetCareTips(species: string) {
  try {
    const tips = await run(petCareFlow, { species });
    return { success: true, tips };
  } catch (error) {
    console.error("Error fetching pet care tips:", error);
    return { success: false, error: "Could not fetch pet care tips at this time." };
  }
}
