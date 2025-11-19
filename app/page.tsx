import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { FeaturedTracks } from "@/components/sections/FeaturedTracks";
import { UpcomingEvents } from "@/components/sections/UpcomingEvents";
import { MediaGallery } from "@/components/sections/MediaGallery";
import { NewsletterSignup } from "@/components/sections/NewsletterSignup";
import { Footer } from "@/components/sections/Footer";
import { getAllMedia } from "@/app/actions/media";

export default async function HomePage() {
  const media = await getAllMedia();

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedTracks />
      <UpcomingEvents />
      <MediaGallery media={media} />
      <NewsletterSignup />
      <Footer />
    </main>
  );
}
