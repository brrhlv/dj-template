import { getUpcomingEvents } from "@/app/actions/events";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { format } from "date-fns";
import Link from "next/link";

export async function UpcomingEvents() {
  const events = await getUpcomingEvents();
  const displayEvents = events.slice(0, 3);

  return (
    <section className="py-32 bg-void-black relative overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute top-40 right-10 w-2 h-64 bg-neon-cyan/20" />
      <div className="absolute bottom-20 left-20 w-40 h-40 border-4 border-volt-yellow/20 rotate-45" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header - brutalist */}
        <div className="mb-16">
          <div className="text-mono text-volt-yellow mb-4">
            // TOUR SCHEDULE
          </div>
          <h2 className="text-display-md font-display mb-6">
            <span className="text-white">Upcoming</span>{" "}
            <span className="gradient-text-primary">Events</span>
          </h2>
          <div className="w-24 h-1 bg-volt-yellow" />
        </div>

        {displayEvents.length === 0 ? (
          <div className="text-center py-20 bg-concrete-200 border-2 border-concrete-300">
            <Calendar className="w-16 h-16 mx-auto text-concrete-400 mb-4" />
            <p className="text-mono text-concrete-400 text-sm">NO EVENTS SCHEDULED</p>
            <p className="text-concrete-400 text-sm mt-2">Check back soon for new tour dates</p>
          </div>
        ) : (
          <>
            {/* Timeline - brutalist vertical */}
            <div className="max-w-5xl mx-auto mb-16">
              {displayEvents.map((event, index) => {
                const accentColors = [
                  { border: "border-neon-cyan", text: "text-neon-cyan", bg: "bg-neon-cyan" },
                  { border: "border-volt-yellow", text: "text-volt-yellow", bg: "bg-volt-yellow" },
                  { border: "border-magenta-shock", text: "text-magenta-shock", bg: "bg-magenta-shock" },
                ];
                const colors = accentColors[index % 3];

                return (
                  <div key={event.id} className="relative flex gap-8 mb-12 last:mb-0">
                    {/* Timeline line and node */}
                    <div className="flex flex-col items-center">
                      {/* Node */}
                      <div className={`w-6 h-6 ${colors.bg} border-4 border-electric-black relative z-10`} />
                      {/* Line */}
                      {index < displayEvents.length - 1 && (
                        <div className={`w-1 flex-1 mt-2 ${colors.bg} opacity-30`} />
                      )}
                    </div>

                    {/* Event card - brutalist */}
                    <div className={`flex-1 bg-concrete-200 border-2 ${colors.border}
                                    shadow-[6px_6px_0px_0px_rgba(0,0,0,0.5)]
                                    hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.7)]
                                    hover:translate-x-[-2px] hover:translate-y-[-2px]
                                    transition-all duration-150 mb-4`}>
                      <div className="md:flex">
                        {/* Event image */}
                        {event.imageUrl && (
                          <div className="md:w-64 h-48 md:h-auto overflow-hidden bg-void-black">
                            <img
                              src={event.imageUrl}
                              alt={event.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}

                        {/* Event details */}
                        <div className="p-6 md:p-8 flex-1 border-t-2 md:border-t-0 md:border-l-2 border-concrete-300">
                          {/* Date - large display */}
                          <div className="mb-4">
                            <div className={`text-mono text-[10px] ${colors.text} mb-2`}>
                              {format(new Date(event.date), "EEEE").toUpperCase()}
                            </div>
                            <div className="text-display-md font-display text-white leading-none mb-1">
                              {format(new Date(event.date), "d")}
                            </div>
                            <div className="text-mono text-concrete-400 text-sm">
                              {format(new Date(event.date), "MMMM yyyy").toUpperCase()}
                              {event.time && ` • ${event.time}`}
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="font-display font-bold text-2xl text-white mb-4">
                            {event.title}
                          </h3>

                          {/* Location */}
                          <div className="flex items-start gap-2 mb-6">
                            <MapPin className={`w-4 h-4 mt-1 ${colors.text}`} />
                            <div className="text-mono text-concrete-400 text-xs">
                              <div className="text-white mb-1">{event.venue.toUpperCase()}</div>
                              <div>{event.city.toUpperCase()}, {event.country.toUpperCase()}</div>
                            </div>
                          </div>

                          {/* Ticket button */}
                          {event.ticketLink && (
                            <a
                              href={event.ticketLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button className={`
                                bg-transparent border-2 ${colors.border} ${colors.text}
                                hover:${colors.bg} hover:text-electric-black
                                px-6 py-5 text-xs font-mono uppercase tracking-wider
                                transition-all duration-150
                              `}>
                                <ExternalLink className="mr-2 h-3 w-3" />
                                Get Tickets
                              </Button>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA - brutalist */}
            <div className="flex justify-center">
              <Link href="/events">
                <Button className="
                  bg-transparent border-2 border-volt-yellow text-volt-yellow
                  hover:bg-volt-yellow hover:text-electric-black
                  px-10 py-7 text-sm font-mono uppercase tracking-wider
                  transition-all duration-200
                  shadow-[6px_6px_0px_0px_rgba(255,204,0,0.4)]
                  hover:shadow-[8px_8px_0px_0px_rgba(255,204,0,0.6)]
                  hover:translate-x-[-2px] hover:translate-y-[-2px]
                ">
                  View Full Tour Schedule
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
