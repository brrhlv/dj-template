import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import * as schema from '../lib/db/schema';

const db = drizzle(sql, { schema });

async function seed() {
  console.log('🌱 Seeding database...');

  try {
    // Clear existing data
    console.log('🗑️  Clearing existing data...');
    await db.delete(schema.newsletter);
    await db.delete(schema.bookings);
    await db.delete(schema.media);
    await db.delete(schema.tracks);
    await db.delete(schema.events);

    // Seed Events
    console.log('📅 Seeding events...');
    await db.insert(schema.events).values([
      {
        title: 'Summer Festival 2025',
        venue: 'Electric Beach',
        city: 'Miami',
        country: 'USA',
        date: '2025-07-15',
        time: '8:00 PM',
        ticketLink: 'https://example.com/tickets/1',
        status: 'upcoming',
        imageUrl: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800',
      },
      {
        title: 'Warehouse Sessions',
        venue: 'Brooklyn Steel',
        city: 'New York',
        country: 'USA',
        date: '2025-08-20',
        time: '10:00 PM',
        ticketLink: 'https://example.com/tickets/2',
        status: 'upcoming',
        imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800',
      },
      {
        title: 'Desert Rave',
        venue: 'Mojave Oasis',
        city: 'Las Vegas',
        country: 'USA',
        date: '2025-09-10',
        time: '6:00 PM',
        ticketLink: 'https://example.com/tickets/3',
        status: 'upcoming',
        imageUrl: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800',
      },
      {
        title: 'New Year Countdown',
        venue: 'Skyline Club',
        city: 'Los Angeles',
        country: 'USA',
        date: '2024-12-31',
        time: '9:00 PM',
        status: 'past',
        imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800',
      },
      {
        title: 'Halloween Special',
        venue: 'The Underground',
        city: 'Chicago',
        country: 'USA',
        date: '2024-10-31',
        time: '11:00 PM',
        status: 'past',
        imageUrl: 'https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?w=800',
      },
    ]);

    // Seed Tracks
    console.log('🎵 Seeding tracks...');
    await db.insert(schema.tracks).values([
      {
        title: 'Midnight Drive',
        artist: 'DJ Shadow',
        releaseDate: '2024-11-15',
        coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400',
        spotifyUrl: 'https://open.spotify.com/track/example1',
        soundcloudUrl: 'https://soundcloud.com/example1',
        appleMusicUrl: 'https://music.apple.com/example1',
        genre: 'House',
        featured: true,
      },
      {
        title: 'Electric Dreams',
        artist: 'DJ Shadow',
        releaseDate: '2024-10-01',
        coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400',
        spotifyUrl: 'https://open.spotify.com/track/example2',
        soundcloudUrl: 'https://soundcloud.com/example2',
        genre: 'Techno',
        featured: true,
      },
      {
        title: 'Neon Lights',
        artist: 'DJ Shadow',
        releaseDate: '2024-09-15',
        coverUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400',
        spotifyUrl: 'https://open.spotify.com/track/example3',
        appleMusicUrl: 'https://music.apple.com/example3',
        genre: 'Progressive House',
        featured: true,
      },
      {
        title: 'Summer Vibes',
        artist: 'DJ Shadow',
        releaseDate: '2024-08-01',
        coverUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400',
        spotifyUrl: 'https://open.spotify.com/track/example4',
        soundcloudUrl: 'https://soundcloud.com/example4',
        genre: 'Deep House',
        featured: true,
      },
      {
        title: 'Underground Anthem',
        artist: 'DJ Shadow',
        releaseDate: '2024-07-10',
        coverUrl: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400',
        spotifyUrl: 'https://open.spotify.com/track/example5',
        genre: 'Techno',
        featured: false,
      },
      {
        title: 'Cosmic Journey',
        artist: 'DJ Shadow',
        releaseDate: '2024-06-05',
        coverUrl: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400',
        soundcloudUrl: 'https://soundcloud.com/example6',
        appleMusicUrl: 'https://music.apple.com/example6',
        genre: 'Trance',
        featured: false,
      },
    ]);

    // Seed Media
    console.log('📸 Seeding media...');
    await db.insert(schema.media).values([
      {
        type: 'photo',
        url: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800',
        caption: 'Live performance at Summer Festival',
        uploadDate: '2024-11-01',
      },
      {
        type: 'photo',
        url: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800',
        caption: 'Crowd energy at Brooklyn Steel',
        uploadDate: '2024-11-02',
      },
      {
        type: 'photo',
        url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800',
        caption: 'Behind the decks',
        uploadDate: '2024-11-03',
      },
      {
        type: 'video',
        url: 'https://www.youtube.com/watch?v=example1',
        thumbnailUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800',
        caption: 'Full set from Electric Beach',
        uploadDate: '2024-11-04',
      },
      {
        type: 'photo',
        url: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800',
        caption: 'Sunset at Desert Rave',
        uploadDate: '2024-11-05',
      },
      {
        type: 'video',
        url: 'https://www.youtube.com/watch?v=example2',
        thumbnailUrl: 'https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?w=800',
        caption: 'Studio session preview',
        uploadDate: '2024-11-06',
      },
    ]);

    // Seed Bookings
    console.log('📧 Seeding bookings...');
    await db.insert(schema.bookings).values([
      {
        name: 'John Smith',
        email: 'john@example.com',
        phone: '+1-555-0101',
        eventType: 'Wedding',
        date: '2025-06-15',
        venue: 'Grand Hotel Ballroom',
        message: 'Looking for a DJ for our wedding reception. 200 guests expected.',
        status: 'pending',
      },
      {
        name: 'Sarah Johnson',
        email: 'sarah@example.com',
        phone: '+1-555-0102',
        eventType: 'Club Night',
        date: '2025-05-20',
        venue: 'Downtown Club',
        message: 'Need a DJ for our Saturday night event. Techno/House preferred.',
        status: 'confirmed',
      },
      {
        name: 'Mike Davis',
        email: 'mike@example.com',
        eventType: 'Corporate Event',
        date: '2025-07-01',
        venue: 'Convention Center',
        message: 'Corporate party for 300+ employees. Need professional DJ.',
        status: 'pending',
      },
    ]);

    // Seed Newsletter
    console.log('📬 Seeding newsletter subscribers...');
    await db.insert(schema.newsletter).values([
      { email: 'fan1@example.com' },
      { email: 'fan2@example.com' },
      { email: 'fan3@example.com' },
    ]);

    console.log('✅ Seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
}

seed();
