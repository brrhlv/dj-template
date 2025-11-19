import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Query to check if email is already subscribed
export const checkSubscription = query({
  args: { email: v.string() },
  handler: async (ctx, { email }) => {
    const existing = await ctx.db
      .query("newsletter")
      .filter((q) => q.eq(q.field("email"), email))
      .first();

    return existing !== null;
  },
});

// Mutation to subscribe to newsletter
export const subscribe = mutation({
  args: { email: v.string() },
  handler: async (ctx, { email }) => {
    // Check if email already exists
    const existing = await ctx.db
      .query("newsletter")
      .filter((q) => q.eq(q.field("email"), email))
      .first();

    if (existing) {
      throw new Error("Email already subscribed");
    }

    const subscriptionId = await ctx.db.insert("newsletter", {
      email,
      subscribedAt: new Date().toISOString(),
    });

    return subscriptionId;
  },
});

// Query to get all subscribers
export const getAll = query({
  args: {},
  handler: async (ctx) => {
    const subscribers = await ctx.db.query("newsletter").collect();
    return subscribers.sort((a, b) =>
      new Date(b.subscribedAt).getTime() - new Date(a.subscribedAt).getTime()
    );
  },
});
