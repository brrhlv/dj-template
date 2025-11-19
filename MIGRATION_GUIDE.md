# Migration from Convex to Vercel Postgres + Server Actions

This project has been successfully migrated from Convex to Vercel Postgres with Drizzle ORM and Next.js Server Actions.

## What Changed

### Database Layer
- **Before**: Convex real-time database
- **After**: Vercel Postgres with Drizzle ORM

### Data Fetching
- **Before**: `useQuery` and `useMutation` hooks from Convex
- **After**: Server Components with Server Actions

### Architecture
- **Before**: Client-side data fetching with real-time updates
- **After**: Server-side rendering with Server Components (default) and Client Components only where needed

## Project Structure

```
dj-template/
├── lib/
│   └── db/
│       ├── schema.ts         # Drizzle schema definitions
│       ├── index.ts          # Database connection
│       └── migrate.ts        # Migration runner
├── app/
│   ├── actions/              # Server Actions for all data operations
│   │   ├── events.ts
│   │   ├── tracks.ts
│   │   ├── media.ts
│   │   ├── bookings.ts
│   │   └── newsletter.ts
│   └── [...pages]            # Page components (Server Components by default)
├── scripts/
│   └── seed.ts               # Database seeding script
└── drizzle.config.ts         # Drizzle configuration
```

## Deployment to Vercel

### Step 1: Create Postgres Database

1. Go to your Vercel project dashboard
2. Navigate to the **Storage** tab
3. Click **Create Database**
4. Select **Postgres**
5. Choose your database name and region
6. Click **Create**

### Step 2: Set Environment Variables

Vercel will automatically set the following environment variables in your project:

```env
POSTGRES_URL=
POSTGRES_PRISMA_URL=
POSTGRES_URL_NON_POOLING=
POSTGRES_USER=
POSTGRES_HOST=
POSTGRES_PASSWORD=
POSTGRES_DATABASE=
```

These are automatically available in your deployment.

For local development, copy `.env.local.example` to `.env.local` and fill in the values from Vercel:

```bash
cp .env.local.example .env.local
```

Then copy the database credentials from Vercel Storage dashboard.

### Step 3: Generate and Run Migrations

After setting up environment variables:

```bash
# Generate migration files
npm run db:generate

# Run migrations (this will create tables)
npm run db:migrate
```

### Step 4: Seed the Database (Optional)

Populate the database with sample data:

```bash
npm run db:seed
```

### Step 5: Deploy to Vercel

```bash
# Deploy to Vercel
vercel --prod
```

Or push to your connected Git repository and Vercel will automatically deploy.

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.local.example .env.local
# Add your database credentials
```

3. Generate migrations:
```bash
npm run db:generate
```

4. Run migrations:
```bash
npm run db:migrate
```

5. Seed database (optional):
```bash
npm run db:seed
```

6. Start development server:
```bash
npm run dev
```

## Key Technical Changes

### Server Components (Default)
Most components are now Server Components that fetch data directly:

```tsx
// app/page.tsx
export default async function HomePage() {
  const media = await getAllMedia();
  
  return (
    <main>
      <MediaGallery media={media} />
    </main>
  );
}
```

### Client Components (When Needed)
Components that need interactivity use `"use client"`:

```tsx
// components/sections/BookingForm.tsx
"use client";

export function BookingForm() {
  const [status, setStatus] = useState("idle");
  // ... form logic with Server Actions
}
```

### Server Actions
All database operations are handled by Server Actions:

```tsx
// app/actions/events.ts
'use server';

export async function getUpcomingEvents(): Promise<Event[]> {
  const result = await db
    .select()
    .from(events)
    .where(eq(events.status, 'upcoming'));
  return result;
}
```

## Database Schema

The database uses the following tables:

- **events** - Event listings with dates, venues, and ticket links
- **tracks** - Music tracks with streaming links
- **media** - Photos and videos from performances
- **bookings** - Booking requests from clients
- **newsletter** - Newsletter subscribers

## Benefits of This Migration

1. **Better Performance**: Server Components reduce client bundle size
2. **SEO Friendly**: Content is server-rendered by default
3. **Type Safety**: Drizzle ORM provides full TypeScript support
4. **Scalability**: Postgres is battle-tested for production apps
5. **Standard Stack**: Uses standard Next.js patterns with App Router
6. **Cost Effective**: Pay only for what you use with Vercel Postgres

## Troubleshooting

### Migration Errors

If migrations fail, check that:
- Environment variables are set correctly
- Database is accessible from your network
- You have the latest version of drizzle-kit

### Seed Script Issues

If seeding fails:
- Ensure migrations have been run first
- Check database connection
- Verify no conflicting data exists

### Build Errors

If you get build errors about missing dependencies:
```bash
rm -rf node_modules package-lock.json
npm install
```

## Additional Resources

- [Drizzle ORM Documentation](https://orm.drizzle.team/)
- [Vercel Postgres Documentation](https://vercel.com/docs/storage/vercel-postgres)
- [Next.js Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)
