import { getAllTracks } from "@/app/actions/tracks";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { MusicClient } from "./MusicClient";

export default async function MusicPage() {
  const tracks = await getAllTracks();

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-purple-900/20 to-black">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Music</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Explore my complete catalog of releases, remixes, and exclusive tracks
          </p>
        </div>
      </section>

      <MusicClient tracks={tracks} />

      <Footer />
    </main>
  );
}
