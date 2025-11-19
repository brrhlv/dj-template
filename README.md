# DJ Portfolio Website Template

A modern, professional DJ portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Convex. Features a dark theme with vibrant purple, cyan, and pink gradients.

## Features

- **Homepage**: Hero section, featured tracks, upcoming events, media gallery, newsletter signup
- **Music Page**: Complete track catalog with genre filtering
- **Events Page**: Upcoming and past events with ticket links
- **Media Gallery**: Photos and videos with lightbox view
- **About Page**: DJ biography, achievements, genres/skills
- **Booking Page**: Professional booking form with validation
- **Real-time Database**: Powered by Convex for instant updates
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **Modern UI**: Built with shadcn/ui components
- **Form Validation**: Using react-hook-form and zod

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Convex
- **UI Components**: shadcn/ui
- **Form Handling**: react-hook-form + zod
- **Icons**: lucide-react
- **Date Formatting**: date-fns

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Convex account (free at https://convex.dev)

### Installation

1. **Clone or navigate to the project**:
   ```bash
   cd ~/dj-template
   ```

2. **Install dependencies** (already done):
   ```bash
   npm install
   ```

3. **Set up Convex**:
   ```bash
   # Login to Convex (creates account if needed)
   npx convex dev

   # This will:
   # - Create a new Convex project
   # - Generate your NEXT_PUBLIC_CONVEX_URL
   # - Create .env.local with your Convex URL
   # - Start the Convex dev server
   ```

4. **Seed the database** (optional but recommended):

   In a new terminal, run:
   ```bash
   npx convex run seed:seedDatabase
   ```

   This will populate your database with:
   - 6 sample tracks (4 featured)
   - 4 upcoming events
   - 2 past events
   - 8 media items (photos and videos)

5. **Start the development server**:
   ```bash
   npm run dev
   ```

6. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
dj-template/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── booking/             # Booking page
│   ├── events/              # Events page
│   ├── media/               # Media gallery page
│   ├── music/               # Music catalog page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── components/
│   ├── sections/            # Main page sections
│   │   ├── BookingForm.tsx
│   │   ├── FeaturedTracks.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── MediaGallery.tsx
│   │   ├── Navigation.tsx
│   │   ├── NewsletterSignup.tsx
│   │   └── UpcomingEvents.tsx
│   ├── ui/                  # shadcn/ui components
│   └── ConvexClientProvider.tsx
├── convex/                  # Convex backend
│   ├── bookings.ts          # Booking mutations/queries
│   ├── events.ts            # Events mutations/queries
│   ├── media.ts             # Media mutations/queries
│   ├── newsletter.ts        # Newsletter mutations/queries
│   ├── tracks.ts            # Tracks mutations/queries
│   ├── schema.ts            # Database schema
│   └── seed.ts              # Sample data seeder
└── lib/
    └── utils.ts             # Utility functions
```

## Customization

### 1. Update DJ Name and Branding

**Navigation & Footer** (`components/sections/Navigation.tsx`, `Footer.tsx`):
- Replace "DJ NAME" with your actual DJ name

**Hero Section** (`components/sections/Hero.tsx`):
- Update DJ name and tagline
- Modify stats (monthly listeners, shows, countries)

**About Page** (`app/about/page.tsx`):
- Write your biography
- Update achievements
- Modify genres/skills

### 2. Update Colors

The theme uses CSS variables in `app/globals.css`:
- `--primary`: Purple (280 85% 65%)
- `--secondary`: Cyan (180 80% 55%)
- `--accent`: Pink (330 85% 65%)

Gradient utilities:
- `.gradient-purple-cyan`
- `.gradient-purple-pink`
- `.gradient-text`

### 3. Add Real Content

**Tracks**:
```typescript
// Use Convex dashboard or create via mutation
await createTrack({
  title: "Your Track Name",
  artist: "Your Name",
  releaseDate: "2024-01-15",
  genre: "House",
  featured: true,
  spotifyUrl: "https://open.spotify.com/track/...",
  soundcloudUrl: "https://soundcloud.com/...",
  coverUrl: "https://your-image-url.com/cover.jpg"
});
```

**Events**:
```typescript
await createEvent({
  title: "Event Name",
  venue: "Venue Name",
  city: "City",
  country: "Country",
  date: "2025-03-20",
  time: "21:00",
  status: "upcoming",
  ticketLink: "https://tickets.com",
  imageUrl: "https://event-image.com/image.jpg"
});
```

**Media**:
```typescript
await createMedia({
  type: "photo", // or "video"
  url: "https://your-media-url.com/photo.jpg",
  caption: "Photo caption",
  uploadDate: new Date().toISOString()
});
```

### 4. Update Social Links

In `components/sections/Footer.tsx`:
- Update Instagram, Twitter, Facebook, YouTube links
- Update email address

### 5. Add Real Images

Replace placeholder images in:
- Hero section background
- About page DJ photo
- Event images
- Track covers
- Media gallery

### 6. Configure Email/Contact

For the booking form to actually send emails, you'll need to:
1. Add an email service (SendGrid, Resend, etc.)
2. Create a Convex action to send emails
3. Update the booking mutation to trigger email notifications

## Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Add environment variable: `NEXT_PUBLIC_CONVEX_URL`
   - Deploy!

3. **Set up Convex production**:
   ```bash
   npx convex deploy
   ```

### Deploy to Netlify

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Build and deploy:
   ```bash
   npm run build
   netlify deploy --prod
   ```

## Database Management

### View/Edit Data

1. Open Convex Dashboard: https://dashboard.convex.dev
2. Navigate to your project
3. Use the "Data" tab to view/edit records
4. Use the "Functions" tab to run queries/mutations

### Clear All Data

```bash
# In Convex dashboard console or via CLI
npx convex run seed:seedDatabase
```

### Backup Data

Convex automatically backs up your data. You can export from the dashboard.

## Common Tasks

### Add a New Track

```typescript
// In Convex dashboard console
await ctx.runMutation(api.tracks.create, {
  title: "New Track",
  artist: "Artist Name",
  releaseDate: "2024-03-15",
  genre: "Techno",
  featured: true,
  spotifyUrl: "https://...",
  coverUrl: "https://..."
});
```

### Add a New Event

```typescript
await ctx.runMutation(api.events.create, {
  title: "Festival Name",
  venue: "Venue",
  city: "City",
  country: "Country",
  date: "2025-06-15",
  time: "20:00",
  status: "upcoming",
  ticketLink: "https://...",
  imageUrl: "https://..."
});
```

### Update Event Status (Mark as Past)

```typescript
await ctx.runMutation(api.events.update, {
  id: "event-id-here",
  status: "past"
});
```

## Performance Optimization

- Images are lazy-loaded
- Convex queries are cached automatically
- Tailwind CSS is purged in production
- Next.js automatically optimizes the bundle

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This is a template - feel free to use and modify for your own projects.

## Support

For issues with:
- **Next.js**: https://nextjs.org/docs
- **Convex**: https://docs.convex.dev
- **shadcn/ui**: https://ui.shadcn.com

## Credits

Built with:
- Next.js
- Convex
- Tailwind CSS
- shadcn/ui
- lucide-react icons

---

Made with ♥ for DJs worldwide
