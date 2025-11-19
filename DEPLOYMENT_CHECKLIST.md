# Deployment Checklist

## Prerequisites
- [ ] Vercel account created
- [ ] Project connected to Vercel
- [ ] Git repository set up

## Vercel Setup

### 1. Create Postgres Database
- [ ] Navigate to Vercel Dashboard
- [ ] Go to Storage tab
- [ ] Create new Postgres database
- [ ] Note down database credentials

### 2. Environment Variables
Vercel automatically sets these when you create a Postgres database:
- [ ] POSTGRES_URL
- [ ] POSTGRES_PRISMA_URL
- [ ] POSTGRES_URL_NON_POOLING
- [ ] POSTGRES_USER
- [ ] POSTGRES_HOST
- [ ] POSTGRES_PASSWORD
- [ ] POSTGRES_DATABASE

### 3. Local Development Setup
```bash
# Copy environment variables
cp .env.local.example .env.local

# Install dependencies
npm install

# Generate migrations
npm run db:generate

# Run migrations
npm run db:migrate

# Seed database (optional)
npm run db:seed

# Start dev server
npm run dev
```

### 4. Deploy to Vercel

#### Option A: Git Push (Recommended)
```bash
git add .
git commit -m "Migrate to Vercel Postgres"
git push
```
Vercel will automatically deploy.

#### Option B: Manual Deploy
```bash
vercel --prod
```

### 5. Post-Deployment

After deployment, you need to run migrations on production:

1. Go to Vercel Dashboard → Settings → Environment Variables
2. Ensure all POSTGRES_* variables are set
3. Run migrations using Vercel CLI or add to build command:

```bash
# Add to package.json build script
"build": "npm run db:migrate && next build"
```

Or run manually after deployment:
```bash
vercel env pull .env.production.local
npm run db:migrate
```

### 6. Seed Production Database (Optional)
```bash
npm run db:seed
```

## Verification

After deployment, verify:
- [ ] Homepage loads
- [ ] Events page displays
- [ ] Music page works
- [ ] Media gallery functions
- [ ] Booking form submits
- [ ] Newsletter signup works

## Migration Complete!

Your DJ template is now running on:
- ✅ Vercel Postgres (database)
- ✅ Drizzle ORM (type-safe queries)
- ✅ Next.js Server Components (SSR)
- ✅ Server Actions (data mutations)

## Quick Commands Reference

```bash
# Development
npm run dev              # Start dev server

# Database
npm run db:generate      # Generate migrations
npm run db:migrate       # Run migrations
npm run db:seed         # Seed database

# Deployment
npm run build           # Build for production
npm start              # Start production server
```

## Support

If you encounter issues:
1. Check MIGRATION_GUIDE.md
2. Verify environment variables
3. Review Vercel deployment logs
4. Check database connection

## Next Steps

Consider adding:
- Image upload functionality (Vercel Blob)
- Email notifications (Resend/SendGrid)
- Analytics (Vercel Analytics)
- CMS integration (Sanity/Contentful)
