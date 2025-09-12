'use server';

import { z } from 'zod';

// Define the schema for the form data
const bookFreeTrialSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(1, { message: 'Phone number is required.' }),
  medicalHistory: z.string().min(1, { message: 'Please provide your medical history.' }),
});

export async function bookFreeTrialAction(
  prevState: any,
  formData: FormData
) {
  const validatedFields = bookFreeTrialSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    medicalHistory: formData.get('medicalHistory'),
  });

  // If form validation fails, return errors
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Invalid form data.',
      success: false,
    };
  }

  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Here you would typically process the data, e.g.,
  // - Save to a database
  // - Send a confirmation email
  // - Notify sales/support team
  console.log('New free trial booking:', validatedFields.data);

  // Return a success message
  return {
    message: "Thanks for booking! We'll be in touch shortly.",
    success: true,
  };
}
