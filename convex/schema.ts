import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  events: defineTable({
    title: v.string(),
    venue: v.string(),
    city: v.string(),
    country: v.string(),
    date: v.string(),
    time: v.optional(v.string()),
    ticketLink: v.optional(v.string()),
    status: v.union(v.literal("upcoming"), v.literal("past")),
    imageUrl: v.optional(v.string()),
  }).index("by_date", ["date"]),

  tracks: defineTable({
    title: v.string(),
    artist: v.optional(v.string()),
    releaseDate: v.optional(v.string()),
    coverUrl: v.optional(v.string()),
    spotifyUrl: v.optional(v.string()),
    soundcloudUrl: v.optional(v.string()),
    appleMusicUrl: v.optional(v.string()),
    genre: v.optional(v.string()),
    featured: v.optional(v.boolean()),
  }),

  media: defineTable({
    type: v.union(v.literal("photo"), v.literal("video")),
    url: v.string(),
    thumbnailUrl: v.optional(v.string()),
    caption: v.optional(v.string()),
    eventId: v.optional(v.id("events")),
    uploadDate: v.string(),
  }).index("by_type", ["type"]),

  bookings: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    eventType: v.string(),
    date: v.string(),
    venue: v.optional(v.string()),
    message: v.string(),
    status: v.union(
      v.literal("pending"),
      v.literal("confirmed"),
      v.literal("rejected")
    ),
    createdAt: v.string(),
  }).index("by_status", ["status"]),

  newsletter: defineTable({
    email: v.string(),
    subscribedAt: v.string(),
  }).index("by_email", ["email"]),
});
