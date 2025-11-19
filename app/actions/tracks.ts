'use server';

import { db } from '@/lib/db';
import { tracks, type Track, type InsertTrack } from '@/lib/db/schema';
import { eq, desc } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export async function getAllTracks(): Promise<Track[]> {
  try {
    const result = await db
      .select()
      .from(tracks)
      .orderBy(desc(tracks.releaseDate));

    return result;
  } catch (error) {
    console.error('Failed to fetch all tracks:', error);
    throw new Error('Failed to fetch all tracks');
  }
}

export async function getFeaturedTracks(): Promise<Track[]> {
  try {
    const result = await db
      .select()
      .from(tracks)
      .where(eq(tracks.featured, true))
      .orderBy(desc(tracks.releaseDate));

    return result;
  } catch (error) {
    console.error('Failed to fetch featured tracks:', error);
    throw new Error('Failed to fetch featured tracks');
  }
}

export async function createTrack(data: InsertTrack): Promise<Track> {
  try {
    const [track] = await db.insert(tracks).values(data).returning();
    revalidatePath('/music');
    revalidatePath('/');
    return track;
  } catch (error) {
    console.error('Failed to create track:', error);
    throw new Error('Failed to create track');
  }
}

export async function updateTrack(id: number, data: Partial<InsertTrack>): Promise<Track> {
  try {
    const [track] = await db
      .update(tracks)
      .set(data)
      .where(eq(tracks.id, id))
      .returning();

    revalidatePath('/music');
    revalidatePath('/');
    return track;
  } catch (error) {
    console.error('Failed to update track:', error);
    throw new Error('Failed to update track');
  }
}

export async function deleteTrack(id: number): Promise<void> {
  try {
    await db.delete(tracks).where(eq(tracks.id, id));
    revalidatePath('/music');
    revalidatePath('/');
  } catch (error) {
    console.error('Failed to delete track:', error);
    throw new Error('Failed to delete track');
  }
}
