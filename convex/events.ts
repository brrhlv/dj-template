import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Query to get upcoming events
export const getUpcoming = query({
  args: {},
  handler: async (ctx) => {
    const events = await ctx.db
      .query("events")
      .filter((q) => q.eq(q.field("status"), "upcoming"))
      .collect();

    return events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  },
});

// Query to get past events
export const getPast = query({
  args: {},
  handler: async (ctx) => {
    const events = await ctx.db
      .query("events")
      .filter((q) => q.eq(q.field("status"), "past"))
      .collect();

    return events.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  },
});

// Query to get all events
export const getAll = query({
  args: {},
  handler: async (ctx) => {
    const events = await ctx.db.query("events").collect();
    return events.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  },
});

// Mutation to create a new event
export const create = mutation({
  args: {
    title: v.string(),
    venue: v.string(),
    city: v.string(),
    country: v.string(),
    date: v.string(),
    time: v.optional(v.string()),
    ticketLink: v.optional(v.string()),
    status: v.union(v.literal("upcoming"), v.literal("past")),
    imageUrl: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const eventId = await ctx.db.insert("events", args);
    return eventId;
  },
});

// Mutation to update an event
export const update = mutation({
  args: {
    id: v.id("events"),
    title: v.optional(v.string()),
    venue: v.optional(v.string()),
    city: v.optional(v.string()),
    country: v.optional(v.string()),
    date: v.optional(v.string()),
    time: v.optional(v.string()),
    ticketLink: v.optional(v.string()),
    status: v.optional(v.union(v.literal("upcoming"), v.literal("past"))),
    imageUrl: v.optional(v.string()),
  },
  handler: async (ctx, { id, ...updates }) => {
    await ctx.db.patch(id, updates);
    return id;
  },
});

// Mutation to delete an event
export const deleteEvent = mutation({
  args: { id: v.id("events") },
  handler: async (ctx, { id }) => {
    await ctx.db.delete(id);
    return id;
  },
});
