import { getUpcomingEvents, getPastEvents } from "@/app/actions/events";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { EventsClient } from "./EventsClient";

export default async function EventsPage() {
  const upcomingEvents = await getUpcomingEvents();
  const pastEvents = await getPastEvents();

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-purple-900/20 to-black">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Events</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Catch me live at upcoming shows and festivals around the world
          </p>
        </div>
      </section>

      <EventsClient upcomingEvents={upcomingEvents} pastEvents={pastEvents} />

      <Footer />
    </main>
  );
}
