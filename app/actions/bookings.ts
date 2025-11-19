'use server';

import { db } from '@/lib/db';
import { bookings, type Booking, type InsertBooking } from '@/lib/db/schema';
import { eq, desc } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export async function getAllBookings(): Promise<Booking[]> {
  try {
    const result = await db
      .select()
      .from(bookings)
      .orderBy(desc(bookings.createdAt));

    return result;
  } catch (error) {
    console.error('Failed to fetch bookings:', error);
    throw new Error('Failed to fetch bookings');
  }
}

export async function getBookingsByStatus(
  status: 'pending' | 'confirmed' | 'rejected'
): Promise<Booking[]> {
  try {
    const result = await db
      .select()
      .from(bookings)
      .where(eq(bookings.status, status))
      .orderBy(desc(bookings.createdAt));

    return result;
  } catch (error) {
    console.error('Failed to fetch bookings by status:', error);
    throw new Error('Failed to fetch bookings by status');
  }
}

export async function createBooking(
  data: Omit<InsertBooking, 'status' | 'createdAt'>
): Promise<{ success: boolean; booking?: Booking; error?: string }> {
  try {
    const [booking] = await db
      .insert(bookings)
      .values({
        ...data,
        status: 'pending',
      })
      .returning();

    revalidatePath('/bookings');
    return { success: true, booking };
  } catch (error) {
    console.error('Failed to create booking:', error);
    return { success: false, error: 'Failed to create booking. Please try again.' };
  }
}

export async function updateBookingStatus(
  id: number,
  status: 'pending' | 'confirmed' | 'rejected'
): Promise<Booking> {
  try {
    const [booking] = await db
      .update(bookings)
      .set({ status })
      .where(eq(bookings.id, id))
      .returning();

    revalidatePath('/bookings');
    return booking;
  } catch (error) {
    console.error('Failed to update booking status:', error);
    throw new Error('Failed to update booking status');
  }
}
