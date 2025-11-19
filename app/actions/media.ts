'use server';

import { db } from '@/lib/db';
import { media, type Media, type InsertMedia } from '@/lib/db/schema';
import { eq, desc } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export async function getPhotos(): Promise<Media[]> {
  try {
    const result = await db
      .select()
      .from(media)
      .where(eq(media.type, 'photo'))
      .orderBy(desc(media.uploadDate));

    return result;
  } catch (error) {
    console.error('Failed to fetch photos:', error);
    throw new Error('Failed to fetch photos');
  }
}

export async function getVideos(): Promise<Media[]> {
  try {
    const result = await db
      .select()
      .from(media)
      .where(eq(media.type, 'video'))
      .orderBy(desc(media.uploadDate));

    return result;
  } catch (error) {
    console.error('Failed to fetch videos:', error);
    throw new Error('Failed to fetch videos');
  }
}

export async function getAllMedia(): Promise<Media[]> {
  try {
    const result = await db
      .select()
      .from(media)
      .orderBy(desc(media.uploadDate));

    return result;
  } catch (error) {
    console.error('Failed to fetch all media:', error);
    throw new Error('Failed to fetch all media');
  }
}

export async function createMedia(data: InsertMedia): Promise<Media> {
  try {
    const [mediaItem] = await db.insert(media).values(data).returning();
    revalidatePath('/media');
    revalidatePath('/');
    return mediaItem;
  } catch (error) {
    console.error('Failed to create media:', error);
    throw new Error('Failed to create media');
  }
}

export async function deleteMedia(id: number): Promise<void> {
  try {
    await db.delete(media).where(eq(media.id, id));
    revalidatePath('/media');
    revalidatePath('/');
  } catch (error) {
    console.error('Failed to delete media:', error);
    throw new Error('Failed to delete media');
  }
}
