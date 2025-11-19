import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Query to get all tracks
export const getAll = query({
  args: {},
  handler: async (ctx) => {
    const tracks = await ctx.db.query("tracks").collect();
    return tracks.sort((a, b) => {
      if (!a.releaseDate) return 1;
      if (!b.releaseDate) return -1;
      return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
    });
  },
});

// Query to get featured tracks
export const getFeatured = query({
  args: {},
  handler: async (ctx) => {
    const tracks = await ctx.db
      .query("tracks")
      .filter((q) => q.eq(q.field("featured"), true))
      .collect();

    return tracks.sort((a, b) => {
      if (!a.releaseDate) return 1;
      if (!b.releaseDate) return -1;
      return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
    });
  },
});

// Mutation to create a new track
export const create = mutation({
  args: {
    title: v.string(),
    artist: v.optional(v.string()),
    releaseDate: v.optional(v.string()),
    coverUrl: v.optional(v.string()),
    spotifyUrl: v.optional(v.string()),
    soundcloudUrl: v.optional(v.string()),
    appleMusicUrl: v.optional(v.string()),
    genre: v.optional(v.string()),
    featured: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const trackId = await ctx.db.insert("tracks", args);
    return trackId;
  },
});

// Mutation to update a track
export const update = mutation({
  args: {
    id: v.id("tracks"),
    title: v.optional(v.string()),
    artist: v.optional(v.string()),
    releaseDate: v.optional(v.string()),
    coverUrl: v.optional(v.string()),
    spotifyUrl: v.optional(v.string()),
    soundcloudUrl: v.optional(v.string()),
    appleMusicUrl: v.optional(v.string()),
    genre: v.optional(v.string()),
    featured: v.optional(v.boolean()),
  },
  handler: async (ctx, { id, ...updates }) => {
    await ctx.db.patch(id, updates);
    return id;
  },
});

// Mutation to delete a track
export const deleteTrack = mutation({
  args: { id: v.id("tracks") },
  handler: async (ctx, { id }) => {
    await ctx.db.delete(id);
    return id;
  },
});
