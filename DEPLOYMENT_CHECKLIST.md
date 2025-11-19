# Deployment Checklist

Use this checklist to ensure a smooth deployment of your DJ website.

## 📋 Pre-Deployment

### Content Preparation

- [ ] **DJ Name/Branding**
  - [ ] Update "DJ NAME" in Navigation (`components/sections/Navigation.tsx`)
  - [ ] Update "DJ NAME" in Hero (`components/sections/Hero.tsx`)
  - [ ] Update "DJ NAME" in Footer (`components/sections/Footer.tsx`)
  - [ ] Update page titles in `app/layout.tsx`

- [ ] **Biography & About**
  - [ ] Write custom biography in `app/about/page.tsx`
  - [ ] Update achievements section
  - [ ] Modify genres/skills list
  - [ ] Update hero tagline and description

- [ ] **Social Media Links**
  - [ ] Instagram URL in Footer
  - [ ] Twitter URL in Footer
  - [ ] Facebook URL in Footer
  - [ ] YouTube URL in Footer
  - [ ] SoundCloud URL in Footer
  - [ ] Contact email address

- [ ] **Real Content**
  - [ ] Add real track data (or use seed data)
  - [ ] Add upcoming events
  - [ ] Upload photos to media gallery
  - [ ] Upload videos to media gallery

- [ ] **Images**
  - [ ] Replace hero background image
  - [ ] Add DJ headshot for About page
  - [ ] Upload event venue photos
  - [ ] Add track cover art
  - [ ] Upload media gallery photos

### Technical Preparation

- [ ] **Environment Variables**
  - [ ] Create `.env.local` with `NEXT_PUBLIC_CONVEX_URL`
  - [ ] Verify Convex deployment URL is correct
  - [ ] Test environment variables work locally

- [ ] **Dependencies**
  - [ ] Run `npm install` to ensure all packages installed
  - [ ] Check for security vulnerabilities: `npm audit`
  - [ ] Update dependencies if needed: `npm update`

- [ ] **Code Quality**
  - [ ] Run linter: `npm run lint`
  - [ ] Fix any TypeScript errors
  - [ ] Test all pages locally
  - [ ] Test mobile responsiveness

- [ ] **Testing**
  - [ ] Test homepage loads correctly
  - [ ] Test music page with filters
  - [ ] Test events page (upcoming/past toggle)
  - [ ] Test media gallery and lightbox
  - [ ] Test booking form submission
  - [ ] Test newsletter signup
  - [ ] Test all navigation links

## 🗄️ Convex Setup

- [ ] **Development**
  - [ ] Run `npx convex dev` successfully
  - [ ] Verify `.env.local` created
  - [ ] Test queries work in local dev

- [ ] **Production Deployment**
  - [ ] Run `npx convex deploy`
  - [ ] Note production Convex URL
  - [ ] Verify schema deployed
  - [ ] Run seed data (optional): `npx convex run seed:seedDatabase`

- [ ] **Database Content**
  - [ ] Add real tracks via Convex dashboard
  - [ ] Add real events
  - [ ] Upload media items
  - [ ] Test data displays on site

## 🚀 Vercel Deployment

- [ ] **Repository Setup**
  - [ ] Initialize git: `git init`
  - [ ] Create `.gitignore` (already exists)
  - [ ] Commit all files: `git add . && git commit -m "Initial commit"`
  - [ ] Push to GitHub

- [ ] **Vercel Configuration**
  - [ ] Create account at vercel.com
  - [ ] Import GitHub repository
  - [ ] Verify framework detected as Next.js
  - [ ] Add environment variable: `NEXT_PUBLIC_CONVEX_URL=<production-url>`
  - [ ] Configure domain (optional)

- [ ] **Deploy**
  - [ ] Click "Deploy" button
  - [ ] Wait for build to complete
  - [ ] Verify deployment successful
  - [ ] Test production URL

## ✅ Post-Deployment

### Verification

- [ ] **Pages Load**
  - [ ] Homepage displays correctly
  - [ ] Music page shows tracks
  - [ ] Events page shows upcoming events
  - [ ] Media gallery displays
  - [ ] About page loads
  - [ ] Booking page works

- [ ] **Functionality**
  - [ ] Navigation works on all pages
  - [ ] Mobile menu opens/closes
  - [ ] Genre filtering works (music page)
  - [ ] Event toggle works (upcoming/past)
  - [ ] Media type filtering works
  - [ ] Lightbox opens for media
  - [ ] Booking form validation works
  - [ ] Newsletter signup works
  - [ ] External links open correctly

- [ ] **Performance**
  - [ ] Run Lighthouse audit (aim for 90+ score)
  - [ ] Check page load times
  - [ ] Test on slow 3G connection
  - [ ] Verify images load properly

- [ ] **Mobile Testing**
  - [ ] Test on iPhone
  - [ ] Test on Android
  - [ ] Test on tablet
  - [ ] Verify responsive design
  - [ ] Check touch interactions

- [ ] **Browser Testing**
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Edge

### SEO & Analytics

- [ ] **SEO**
  - [ ] Update meta descriptions
  - [ ] Add Open Graph tags
  - [ ] Add Twitter Card tags
  - [ ] Create sitemap.xml
  - [ ] Submit to Google Search Console
  - [ ] Verify robots.txt

- [ ] **Analytics**
  - [ ] Add Google Analytics (optional)
  - [ ] Add Facebook Pixel (optional)
  - [ ] Set up conversion tracking
  - [ ] Test analytics firing

### Marketing Setup

- [ ] **Social Media**
  - [ ] Update all bio links to new site
  - [ ] Post announcement
  - [ ] Share on Instagram Stories
  - [ ] Pin to Twitter

- [ ] **Email**
  - [ ] Set up email forwarding for booking@
  - [ ] Test email delivery
  - [ ] Create welcome email template (optional)

- [ ] **Booking Integration**
  - [ ] Set up email notifications for bookings (requires custom integration)
  - [ ] Test booking request flow
  - [ ] Configure auto-reply (optional)

## 🔧 Optional Enhancements

### Email Integration

- [ ] Create SendGrid/Resend account
- [ ] Add API keys to Vercel environment variables
- [ ] Create Convex action for sending emails
- [ ] Update booking mutation to send notifications
- [ ] Test email delivery

### Payment Integration

- [ ] Set up Stripe account
- [ ] Add payment for booking deposits
- [ ] Create payment confirmation emails
- [ ] Test payment flow

### Advanced Features

- [ ] Add Spotify embed players
- [ ] Add SoundCloud embed players
- [ ] Add event calendar integration
- [ ] Add ticket purchase tracking
- [ ] Add merch store
- [ ] Add press kit download
- [ ] Add contact management system

## 📊 Monitoring

### Daily

- [ ] Check booking requests in Convex dashboard
- [ ] Review newsletter signups
- [ ] Monitor site uptime

### Weekly

- [ ] Review analytics
- [ ] Check for errors in Vercel logs
- [ ] Update upcoming events
- [ ] Add new tracks if released

### Monthly

- [ ] Review performance metrics
- [ ] Update past events to "past" status
- [ ] Backup data from Convex
- [ ] Security updates: `npm audit fix`

## 🆘 Troubleshooting

### Common Issues

**Build fails on Vercel**
- [ ] Verify `NEXT_PUBLIC_CONVEX_URL` is set
- [ ] Check Convex is deployed
- [ ] Review build logs for errors

**No data showing**
- [ ] Verify Convex production URL is correct
- [ ] Check data exists in Convex dashboard
- [ ] Test queries in Convex dashboard

**Booking form not working**
- [ ] Check Convex mutation works
- [ ] Review browser console for errors
- [ ] Verify form validation

**Images not loading**
- [ ] Check image URLs are valid
- [ ] Verify images are publicly accessible
- [ ] Check for CORS issues

## 📞 Support Resources

- **Next.js Issues**: https://github.com/vercel/next.js/issues
- **Convex Support**: https://discord.gg/convex
- **Vercel Support**: https://vercel.com/support
- **Template Issues**: Review documentation files

## ✨ Final Steps

- [ ] Announce launch on social media
- [ ] Share with fans and followers
- [ ] Get feedback from users
- [ ] Plan regular content updates
- [ ] Enjoy your new professional website!

---

**Congratulations on deploying your DJ website!** 🎉

Remember to keep content fresh and engage with your audience regularly.
