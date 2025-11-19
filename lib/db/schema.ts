import { pgTable, text, serial, boolean, timestamp, varchar } from 'drizzle-orm/pg-core';

export const events = pgTable('events', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  venue: text('venue').notNull(),
  city: text('city').notNull(),
  country: text('country').notNull(),
  date: text('date').notNull(),
  time: text('time'),
  ticketLink: text('ticket_link'),
  status: varchar('status', { length: 20 }).notNull().$type<'upcoming' | 'past'>(),
  imageUrl: text('image_url'),
});

export const tracks = pgTable('tracks', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  artist: text('artist'),
  releaseDate: text('release_date'),
  coverUrl: text('cover_url'),
  spotifyUrl: text('spotify_url'),
  soundcloudUrl: text('soundcloud_url'),
  appleMusicUrl: text('apple_music_url'),
  genre: text('genre'),
  featured: boolean('featured').default(false),
});

export const media = pgTable('media', {
  id: serial('id').primaryKey(),
  type: varchar('type', { length: 20 }).notNull().$type<'photo' | 'video'>(),
  url: text('url').notNull(),
  thumbnailUrl: text('thumbnail_url'),
  caption: text('caption'),
  eventId: serial('event_id').references(() => events.id),
  uploadDate: text('upload_date').notNull(),
});

export const bookings = pgTable('bookings', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  phone: text('phone'),
  eventType: text('event_type').notNull(),
  date: text('date').notNull(),
  venue: text('venue'),
  message: text('message').notNull(),
  status: varchar('status', { length: 20 }).notNull().default('pending').$type<'pending' | 'confirmed' | 'rejected'>(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const newsletter = pgTable('newsletter', {
  id: serial('id').primaryKey(),
  email: text('email').notNull().unique(),
  subscribedAt: timestamp('subscribed_at').notNull().defaultNow(),
});

// Type exports for use in application
export type Event = typeof events.$inferSelect;
export type InsertEvent = typeof events.$inferInsert;

export type Track = typeof tracks.$inferSelect;
export type InsertTrack = typeof tracks.$inferInsert;

export type Media = typeof media.$inferSelect;
export type InsertMedia = typeof media.$inferInsert;

export type Booking = typeof bookings.$inferSelect;
export type InsertBooking = typeof bookings.$inferInsert;

export type Newsletter = typeof newsletter.$inferSelect;
export type InsertNewsletter = typeof newsletter.$inferInsert;
