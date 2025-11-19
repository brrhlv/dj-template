'use server';

import { db } from '@/lib/db';
import { events, type Event, type InsertEvent } from '@/lib/db/schema';
import { eq, desc, asc } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export async function getUpcomingEvents(): Promise<Event[]> {
  try {
    const result = await db
      .select()
      .from(events)
      .where(eq(events.status, 'upcoming'))
      .orderBy(asc(events.date));

    return result;
  } catch (error) {
    console.error('Failed to fetch upcoming events:', error);
    throw new Error('Failed to fetch upcoming events');
  }
}

export async function getPastEvents(): Promise<Event[]> {
  try {
    const result = await db
      .select()
      .from(events)
      .where(eq(events.status, 'past'))
      .orderBy(desc(events.date));

    return result;
  } catch (error) {
    console.error('Failed to fetch past events:', error);
    throw new Error('Failed to fetch past events');
  }
}

export async function getAllEvents(): Promise<Event[]> {
  try {
    const result = await db
      .select()
      .from(events)
      .orderBy(desc(events.date));

    return result;
  } catch (error) {
    console.error('Failed to fetch all events:', error);
    throw new Error('Failed to fetch all events');
  }
}

export async function createEvent(data: InsertEvent): Promise<Event> {
  try {
    const [event] = await db.insert(events).values(data).returning();
    revalidatePath('/events');
    revalidatePath('/');
    return event;
  } catch (error) {
    console.error('Failed to create event:', error);
    throw new Error('Failed to create event');
  }
}

export async function updateEvent(id: number, data: Partial<InsertEvent>): Promise<Event> {
  try {
    const [event] = await db
      .update(events)
      .set(data)
      .where(eq(events.id, id))
      .returning();

    revalidatePath('/events');
    revalidatePath('/');
    return event;
  } catch (error) {
    console.error('Failed to update event:', error);
    throw new Error('Failed to update event');
  }
}

export async function deleteEvent(id: number): Promise<void> {
  try {
    await db.delete(events).where(eq(events.id, id));
    revalidatePath('/events');
    revalidatePath('/');
  } catch (error) {
    console.error('Failed to delete event:', error);
    throw new Error('Failed to delete event');
  }
}
