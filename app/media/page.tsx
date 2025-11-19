import { getAllMedia, getPhotos, getVideos } from "@/app/actions/media";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { MediaClient } from "./MediaClient";

export default async function MediaPage() {
  const allMedia = await getAllMedia();
  const photos = await getPhotos();
  const videos = await getVideos();

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-purple-900/20 to-black">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Media Gallery</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Photos and videos from performances, studio sessions, and behind the scenes
          </p>
        </div>
      </section>

      <MediaClient allMedia={allMedia} photos={photos} videos={videos} />

      <Footer />
    </main>
  );
}
