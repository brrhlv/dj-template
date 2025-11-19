import { mutation } from "./_generated/server";

export const seedDatabase = mutation({
  args: {},
  handler: async (ctx) => {
    // Clear existing data (optional - comment out if you want to keep existing data)
    const existingTracks = await ctx.db.query("tracks").collect();
    const existingEvents = await ctx.db.query("events").collect();
    const existingMedia = await ctx.db.query("media").collect();

    for (const track of existingTracks) {
      await ctx.db.delete(track._id);
    }
    for (const event of existingEvents) {
      await ctx.db.delete(event._id);
    }
    for (const media of existingMedia) {
      await ctx.db.delete(media._id);
    }

    // Seed Tracks
    const tracks = [
      {
        title: "Midnight Dreams",
        artist: "DJ NAME",
        releaseDate: "2024-01-15",
        genre: "Progressive House",
        featured: true,
        spotifyUrl: "https://open.spotify.com/track/example",
        soundcloudUrl: "https://soundcloud.com/example",
        coverUrl: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=500&h=500&fit=crop",
      },
      {
        title: "Electric Pulse",
        artist: "DJ NAME",
        releaseDate: "2024-02-20",
        genre: "Techno",
        featured: true,
        spotifyUrl: "https://open.spotify.com/track/example",
        soundcloudUrl: "https://soundcloud.com/example",
        coverUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500&h=500&fit=crop",
      },
      {
        title: "Sunset Vibes",
        artist: "DJ NAME ft. Artist X",
        releaseDate: "2023-11-10",
        genre: "Deep House",
        featured: true,
        spotifyUrl: "https://open.spotify.com/track/example",
        appleMusicUrl: "https://music.apple.com/example",
        coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop",
      },
      {
        title: "Neon Lights",
        artist: "DJ NAME",
        releaseDate: "2024-03-05",
        genre: "Tech House",
        featured: true,
        spotifyUrl: "https://open.spotify.com/track/example",
        soundcloudUrl: "https://soundcloud.com/example",
        coverUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&h=500&fit=crop",
      },
      {
        title: "Cosmic Journey",
        artist: "DJ NAME",
        releaseDate: "2023-09-18",
        genre: "Melodic Techno",
        featured: false,
        spotifyUrl: "https://open.spotify.com/track/example",
        coverUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&h=500&fit=crop",
      },
      {
        title: "Rising Sun",
        artist: "DJ NAME",
        releaseDate: "2023-07-22",
        genre: "Progressive House",
        featured: false,
        soundcloudUrl: "https://soundcloud.com/example",
        coverUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop",
      },
    ];

    for (const track of tracks) {
      await ctx.db.insert("tracks", track);
    }

    // Seed Upcoming Events
    const upcomingEvents = [
      {
        title: "Ultra Music Festival",
        venue: "Bayfront Park",
        city: "Miami",
        country: "USA",
        date: "2025-03-28",
        time: "21:00",
        status: "upcoming" as const,
        ticketLink: "https://ultramusicfestival.com",
        imageUrl: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=400&fit=crop",
      },
      {
        title: "Tomorrowland",
        venue: "De Schorre",
        city: "Boom",
        country: "Belgium",
        date: "2025-07-18",
        time: "19:30",
        status: "upcoming" as const,
        ticketLink: "https://www.tomorrowland.com",
        imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=400&fit=crop",
      },
      {
        title: "Warehouse Sessions",
        venue: "The Warehouse",
        city: "London",
        country: "UK",
        date: "2025-02-14",
        time: "22:00",
        status: "upcoming" as const,
        ticketLink: "https://residentadvisor.net",
        imageUrl: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=400&fit=crop",
      },
      {
        title: "Ibiza Opening Party",
        venue: "Pacha Ibiza",
        city: "Ibiza",
        country: "Spain",
        date: "2025-05-20",
        time: "23:00",
        status: "upcoming" as const,
        ticketLink: "https://www.pacha.com",
        imageUrl: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&h=400&fit=crop",
      },
    ];

    for (const event of upcomingEvents) {
      await ctx.db.insert("events", event);
    }

    // Seed Past Events
    const pastEvents = [
      {
        title: "New Year's Eve Spectacular",
        venue: "City Arena",
        city: "New York",
        country: "USA",
        date: "2023-12-31",
        time: "22:00",
        status: "past" as const,
        imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=400&fit=crop",
      },
      {
        title: "Summer Festival",
        venue: "Park Grounds",
        city: "Berlin",
        country: "Germany",
        date: "2023-08-15",
        time: "18:00",
        status: "past" as const,
        imageUrl: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=400&fit=crop",
      },
    ];

    for (const event of pastEvents) {
      await ctx.db.insert("events", event);
    }

    // Seed Media (Photos and Videos)
    const mediaItems = [
      {
        type: "photo" as const,
        url: "https://images.unsplash.com/photo-1574434438948-cbb7cbf7c69f?w=1200&h=800&fit=crop",
        caption: "Live performance at Ultra Music Festival",
        uploadDate: new Date().toISOString(),
      },
      {
        type: "photo" as const,
        url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&h=800&fit=crop",
        caption: "Crowd energy during peak hour",
        uploadDate: new Date().toISOString(),
      },
      {
        type: "photo" as const,
        url: "https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?w=1200&h=800&fit=crop",
        caption: "Sunset set in Ibiza",
        uploadDate: new Date().toISOString(),
      },
      {
        type: "photo" as const,
        url: "https://images.unsplash.com/photo-1571266028243-d220c92a2a42?w=1200&h=800&fit=crop",
        caption: "Studio session - new track production",
        uploadDate: new Date().toISOString(),
      },
      {
        type: "video" as const,
        url: "https://example.com/video1.mp4",
        thumbnailUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&h=800&fit=crop",
        caption: "Behind the scenes - Festival prep",
        uploadDate: new Date().toISOString(),
      },
      {
        type: "photo" as const,
        url: "https://images.unsplash.com/photo-1571263485852-7e67ec39a1d3?w=1200&h=800&fit=crop",
        caption: "Warehouse session in London",
        uploadDate: new Date().toISOString(),
      },
      {
        type: "photo" as const,
        url: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1200&h=800&fit=crop",
        caption: "Main stage at Tomorrowland",
        uploadDate: new Date().toISOString(),
      },
      {
        type: "video" as const,
        url: "https://example.com/video2.mp4",
        thumbnailUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&h=800&fit=crop",
        caption: "Full set from Miami",
        uploadDate: new Date().toISOString(),
      },
    ];

    for (const media of mediaItems) {
      await ctx.db.insert("media", media);
    }

    return {
      message: "Database seeded successfully!",
      counts: {
        tracks: tracks.length,
        upcomingEvents: upcomingEvents.length,
        pastEvents: pastEvents.length,
        media: mediaItems.length,
      },
    };
  },
});
