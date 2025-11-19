import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Query to get all bookings
export const getAll = query({
  args: {},
  handler: async (ctx) => {
    const bookings = await ctx.db.query("bookings").collect();
    return bookings.sort((a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  },
});

// Query to get bookings by status
export const getByStatus = query({
  args: {
    status: v.union(
      v.literal("pending"),
      v.literal("confirmed"),
      v.literal("rejected")
    ),
  },
  handler: async (ctx, { status }) => {
    const bookings = await ctx.db
      .query("bookings")
      .filter((q) => q.eq(q.field("status"), status))
      .collect();

    return bookings.sort((a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  },
});

// Mutation to create a booking
export const create = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    eventType: v.string(),
    date: v.string(),
    venue: v.optional(v.string()),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const bookingId = await ctx.db.insert("bookings", {
      ...args,
      status: "pending",
      createdAt: new Date().toISOString(),
    });
    return bookingId;
  },
});

// Mutation to update booking status
export const updateStatus = mutation({
  args: {
    id: v.id("bookings"),
    status: v.union(
      v.literal("pending"),
      v.literal("confirmed"),
      v.literal("rejected")
    ),
  },
  handler: async (ctx, { id, status }) => {
    await ctx.db.patch(id, { status });
    return id;
  },
});
