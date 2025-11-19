"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { format } from "date-fns";
import Link from "next/link";

export function UpcomingEvents() {
  const events = useQuery(api.events.getUpcoming);

  if (!events) {
    return (
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent" />
          </div>
        </div>
      </section>
    );
  }

  const displayEvents = events.slice(0, 3);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Upcoming Events</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Catch me live at these upcoming shows
          </p>
        </div>

        {displayEvents.length === 0 ? (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 mx-auto text-gray-600 mb-4" />
            <p className="text-gray-400 text-lg">No upcoming events scheduled</p>
            <p className="text-gray-500 text-sm mt-2">Check back soon for new tour dates</p>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-8 max-w-4xl mx-auto">
              {displayEvents.map((event) => (
                <Card
                  key={event._id}
                  className="bg-card/50 backdrop-blur border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden"
                >
                  <div className="md:flex">
                    {event.imageUrl && (
                      <div className="md:w-48 h-48 md:h-auto overflow-hidden">
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

                          <Badge variant="secondary">Upcoming</Badge>
                        </div>

                        {event.ticketLink && (
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

            <div className="text-center">
              <Link href="/events">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/20 hover:bg-white/10"
                >
                  View All Events
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
