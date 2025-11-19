"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";

export default function EventsPage() {
  const upcomingEvents = useQuery(api.events.getUpcoming);
  const pastEvents = useQuery(api.events.getPast);
  const [showPast, setShowPast] = useState(false);

  const isLoading = !upcomingEvents || !pastEvents;

  if (isLoading) {
    return (
      <main className="min-h-screen bg-black">
        <Navigation />
        <div className="pt-32 pb-20 flex items-center justify-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent" />
        </div>
        <Footer />
      </main>
    );
  }

  const displayEvents = showPast ? pastEvents : upcomingEvents;

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

      {/* Toggle */}
      <section className="py-6 bg-black/50 backdrop-blur border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex gap-2">
            <Badge
              variant={!showPast ? "default" : "outline"}
              className="cursor-pointer hover:bg-primary/20 transition-colors text-sm px-4 py-2"
              onClick={() => setShowPast(false)}
            >
              Upcoming ({upcomingEvents.length})
            </Badge>
            <Badge
              variant={showPast ? "default" : "outline"}
              className="cursor-pointer hover:bg-primary/20 transition-colors text-sm px-4 py-2"
              onClick={() => setShowPast(true)}
            >
              Past Events ({pastEvents.length})
            </Badge>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {displayEvents.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 mx-auto text-gray-600 mb-4" />
              <p className="text-gray-400 text-lg">
                {showPast ? "No past events" : "No upcoming events scheduled"}
              </p>
              <p className="text-gray-500 text-sm mt-2">
                {showPast ? "" : "Check back soon for new tour dates"}
              </p>
            </div>
          ) : (
            <div className="space-y-4 max-w-4xl mx-auto">
              {displayEvents.map((event) => (
                <Card
                  key={event._id}
                  className="bg-card/50 backdrop-blur border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden"
                >
                  <div className="md:flex">
                    {event.imageUrl && (
                      <div className="md:w-64 h-48 md:h-auto overflow-hidden">
                        <img
                          src={event.imageUrl}
                          alt={event.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    )}

                    <div className="p-6 flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-start gap-3 mb-3">
                            <div className="bg-primary/10 p-3 rounded-lg">
                              <Calendar className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold mb-1">
                                {event.title}
                              </h3>
                              <p className="text-sm text-gray-400">
                                {format(new Date(event.date), "EEEE, MMMM d, yyyy")}
                                {event.time && ` • ${event.time}`}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 text-gray-300 mb-3">
                            <MapPin className="w-4 h-4 text-secondary" />
                            <span className="text-sm">
                              {event.venue} • {event.city}, {event.country}
                            </span>
                          </div>

                          <Badge variant={showPast ? "outline" : "secondary"}>
                            {showPast ? "Past Event" : "Upcoming"}
                          </Badge>
                        </div>

                        {!showPast && event.ticketLink && (
                          <a
                            href={event.ticketLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button className="gradient-purple-cyan hover:opacity-90 w-full md:w-auto">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Get Tickets
                            </Button>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
