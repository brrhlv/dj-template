'use server';

import { db } from '@/lib/db';
import { newsletter, type Newsletter, type InsertNewsletter } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export async function subscribe(
  email: string
): Promise<{ success: boolean; message: string; subscriber?: Newsletter }> {
  try {
    // Check if email already exists
    const existing = await db
      .select()
      .from(newsletter)
      .where(eq(newsletter.email, email))
      .limit(1);

    if (existing.length > 0) {
      return {
        success: false,
        message: 'This email is already subscribed to our newsletter.',
      };
    }

    // Create new subscriber
    const [subscriber] = await db
      .insert(newsletter)
      .values({ email })
      .returning();

    revalidatePath('/');
    return {
      success: true,
      message: 'Successfully subscribed to the newsletter!',
      subscriber,
    };
  } catch (error) {
    console.error('Failed to subscribe to newsletter:', error);
    return {
      success: false,
      message: 'Failed to subscribe. Please try again later.',
    };
  }
}

export async function getAllSubscribers(): Promise<Newsletter[]> {
  try {
    const result = await db.select().from(newsletter);
    return result;
  } catch (error) {
    console.error('Failed to fetch subscribers:', error);
    throw new Error('Failed to fetch subscribers');
  }
}

export async function unsubscribe(email: string): Promise<{ success: boolean; message: string }> {
  try {
    await db.delete(newsletter).where(eq(newsletter.email, email));
    revalidatePath('/');
    return {
      success: true,
      message: 'Successfully unsubscribed from the newsletter.',
    };
  } catch (error) {
    console.error('Failed to unsubscribe:', error);
    return {
      success: false,
      message: 'Failed to unsubscribe. Please try again later.',
    };
  }
}
