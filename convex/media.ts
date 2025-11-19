import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Query to get all photos
export const getPhotos = query({
  args: {},
  handler: async (ctx) => {
    const photos = await ctx.db
      .query("media")
      .filter((q) => q.eq(q.field("type"), "photo"))
      .collect();

    return photos.sort((a, b) =>
      new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime()
    );
  },
});

// Query to get all videos
export const getVideos = query({
  args: {},
  handler: async (ctx) => {
    const videos = await ctx.db
      .query("media")
      .filter((q) => q.eq(q.field("type"), "video"))
      .collect();

    return videos.sort((a, b) =>
      new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime()
    );
  },
});

// Query to get all media
export const getAll = query({
  args: {},
  handler: async (ctx) => {
    const media = await ctx.db.query("media").collect();
    return media.sort((a, b) =>
      new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime()
    );
  },
});

// Mutation to create new media
export const create = mutation({
  args: {
    type: v.union(v.literal("photo"), v.literal("video")),
    url: v.string(),
    thumbnailUrl: v.optional(v.string()),
    caption: v.optional(v.string()),
    eventId: v.optional(v.id("events")),
    uploadDate: v.string(),
  },
  handler: async (ctx, args) => {
    const mediaId = await ctx.db.insert("media", args);
    return mediaId;
  },
});

// Mutation to delete media
export const deleteMedia = mutation({
  args: { id: v.id("media") },
  handler: async (ctx, { id }) => {
    await ctx.db.delete(id);
    return id;
  },
});
