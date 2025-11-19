# Quick Start Guide

Get your DJ website running in 5 minutes!

## Step 1: Set Up Convex

```bash
npx convex dev
```

This command will:
- Create a Convex account (if you don't have one)
- Set up a new Convex project
- Create `.env.local` with your Convex URL
- Start the Convex development server

**Keep this terminal running!**

## Step 2: Seed Sample Data

Open a **new terminal** and run:

```bash
npx convex run seed:seedDatabase
```

This populates your database with sample tracks, events, and media.

## Step 3: Start Next.js

In the **new terminal**, run:

```bash
npm run dev
```

## Step 4: View Your Site

Open your browser to:
**http://localhost:3000**

You should see:
- ✅ Hero section with DJ NAME
- ✅ Featured tracks (4 tracks)
- ✅ Upcoming events (4 events)
- ✅ Media gallery (8 items)
- ✅ Newsletter signup
- ✅ Navigation and footer

## Next Steps

### 1. Customize Your Site

Edit these files to personalize:
- `components/sections/Navigation.tsx` - Change "DJ NAME"
- `components/sections/Hero.tsx` - Update tagline and stats
- `app/about/page.tsx` - Add your biography
- `components/sections/Footer.tsx` - Update social links

### 2. Add Real Content

**Via Convex Dashboard**:
1. Go to https://dashboard.convex.dev
2. Open your project
3. Click "Data" tab
4. Add/edit tracks, events, media

**Via Code**:
See examples in `convex/seed.ts`

### 3. Deploy to Production

**Convex**:
```bash
npx convex deploy
```

**Vercel** (recommended):
```bash
# Push to GitHub first
git init
git add .
git commit -m "Initial commit"
git push

# Then deploy on vercel.com
# Import your GitHub repo
# Add NEXT_PUBLIC_CONVEX_URL environment variable
```

## Troubleshooting

**Issue**: "Convex connection error"
- ✅ Make sure `npx convex dev` is running
- ✅ Check `.env.local` exists with `NEXT_PUBLIC_CONVEX_URL`
- ✅ Restart Next.js dev server

**Issue**: "No data showing"
- ✅ Run the seed command: `npx convex run seed:seedDatabase`
- ✅ Check Convex dashboard to verify data exists

**Issue**: "Port 3000 already in use"
- ✅ Stop other Next.js processes
- ✅ Or use different port: `npm run dev -- -p 3001`

## Development Workflow

1. **Make changes** to components/pages
2. **Save** - Next.js auto-reloads
3. **Test** in browser
4. **Commit** changes regularly

## Useful Commands

```bash
# Development
npm run dev              # Start Next.js dev server
npx convex dev          # Start Convex dev server

# Build
npm run build           # Build for production
npm start               # Run production build

# Convex
npx convex deploy       # Deploy Convex to production
npx convex dashboard    # Open Convex dashboard
npx convex run seed:seedDatabase  # Seed database

# Code quality
npm run lint            # Run ESLint
```

## File Structure Quick Reference

```
app/
├── page.tsx           → Homepage
├── music/page.tsx     → Music catalog
├── events/page.tsx    → Events list
├── media/page.tsx     → Media gallery
├── about/page.tsx     → About/bio
└── booking/page.tsx   → Booking form

components/sections/
├── Hero.tsx           → Hero section
├── Navigation.tsx     → Sticky nav
├── FeaturedTracks.tsx → Featured music
├── UpcomingEvents.tsx → Event cards
├── MediaGallery.tsx   → Photo/video grid
├── BookingForm.tsx    → Contact form
├── NewsletterSignup.tsx → Email signup
└── Footer.tsx         → Footer

convex/
├── events.ts          → Event queries/mutations
├── tracks.ts          → Track queries/mutations
├── media.ts           → Media queries/mutations
├── bookings.ts        → Booking queries/mutations
├── newsletter.ts      → Newsletter mutations
└── seed.ts            → Sample data
```

## Need Help?

- 📖 Full README: `README.md`
- 🌐 Next.js docs: https://nextjs.org/docs
- 🗄️ Convex docs: https://docs.convex.dev
- 🎨 shadcn/ui: https://ui.shadcn.com

---

Happy building! 🎵🎧
