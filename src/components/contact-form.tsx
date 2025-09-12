'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useActionState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { bookFreeTrialAction } from '@/app/actions';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phone: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const initialState = {
  message: '',
  errors: {},
  success: false,
};

export function ContactForm() {
  const { toast } = useToast();
  const [state, formAction] = useActionState(bookFreeTrialAction, initialState);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
    // Set server errors on the form
    errors: state?.errors
      ? Object.keys(state.errors).reduce((acc, key) => {
          const field = key as keyof FormValues;
          acc[field] = {
            type: 'manual',
            message: state.errors[field]?.[0],
          };
          return acc;
        }, {} as Record<keyof FormValues, any>)
      : {},
  });

  useEffect(() => {
    if (state.success) {
      toast({
        title: 'Success!',
        description: state.message,
      });
      form.reset();
    } else if (state.message && !state.success) {
      toast({
        variant: 'destructive',
        title: 'Oops!',
        description: state.message,
      });
    }
  }, [state, toast, form]);

  return (
    <Form {...form}>
      <form
        action={formAction}
        onSubmit={form.handleSubmit(() =>
          formAction(new FormData(form.control._formValues))
        )}
        className="space-y-6"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="(123) 456-7890" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full bg-red-500 text-white hover:bg-green-500"
          size="lg"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting && (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          )}
          Book My Free Trial
        </Button>
      </form>
    </Form>
  );
}
