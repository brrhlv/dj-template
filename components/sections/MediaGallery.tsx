"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Image as ImageIcon, Video, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Media } from "@/lib/db/schema";

interface MediaGalleryProps {
  media: Media[];
}

export function MediaGallery({ media }: MediaGalleryProps) {
  const [selectedMedia, setSelectedMedia] = useState<Media | null>(null);
  const displayMedia = media.slice(0, 6);

  return (
    <>
      <section className="py-32 bg-electric-black relative overflow-hidden">
        {/* Geometric background elements */}
        <div className="absolute top-20 right-10 w-32 h-32 border-4 border-magenta-shock/30 rotate-12" />
        <div className="absolute bottom-40 left-10 w-48 h-2 bg-toxic-green/20" />

        <div className="container mx-auto px-6 lg:px-8">
          {/* Section header - brutalist */}
          <div className="mb-16">
            <div className="text-mono text-magenta-shock mb-4">
              // GALLERY
            </div>
            <h2 className="text-display-md font-display mb-6">
              <span className="text-white">Media</span>{" "}
              <span className="gradient-text-primary">Archive</span>
            </h2>
            <div className="w-24 h-1 bg-magenta-shock" />
          </div>

          {/* Media grid - brutalist masonry */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {displayMedia.map((item, index) => {
              const borderColors = [
                "border-neon-cyan",
                "border-volt-yellow",
                "border-magenta-shock",
                "border-toxic-green",
              ];

              return (
                <div
                  key={item.id}
                  className={`bg-concrete-200 border-2 ${borderColors[index % 4]} overflow-hidden
                             cursor-pointer group
                             shadow-[4px_4px_0px_0px_rgba(0,0,0,0.4)]
                             hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.6)]
                             hover:translate-x-[-2px] hover:translate-y-[-2px]
                             transition-all duration-150`}
                  onClick={() => setSelectedMedia(item)}
                >
                  <div className="aspect-video relative overflow-hidden bg-void-black">
                    {item.type === "photo" ? (
                      <img
                        src={item.url}
                        alt={item.caption || "Gallery image"}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <>
                        <img
                          src={item.thumbnailUrl || "/placeholder-video.jpg"}
                          alt={item.caption || "Video thumbnail"}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-electric-black/60">
                          <div className={`w-16 h-16 border-4 ${borderColors[index % 4]} bg-electric-black
                                         flex items-center justify-center`}>
                            <Video className="w-8 h-8 text-white" />
                          </div>
                        </div>
                      </>
                    )}

                    {/* Type badge */}
                    <div className="absolute top-3 right-3">
                      <div className={`px-3 py-1 border-2 ${borderColors[index % 4]} bg-electric-black`}>
                        <span className="text-mono text-[10px] text-white flex items-center gap-1">
                          {item.type === "photo" ? (
                            <ImageIcon className="w-3 h-3" />
                          ) : (
                            <Video className="w-3 h-3" />
                          )}
                          {item.type.toUpperCase()}
                        </span>
                      </div>
                    </div>

                    {/* Caption overlay */}
                    {item.caption && (
                      <div className="absolute bottom-0 left-0 right-0 bg-electric-black/90
                                    border-t-2 border-concrete-300 p-4
                                    translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                        <p className="text-xs text-white font-mono">{item.caption.toUpperCase()}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA - brutalist */}
          <div className="flex justify-center">
            <Link href="/media">
              <Button className="
                bg-transparent border-2 border-magenta-shock text-magenta-shock
                hover:bg-magenta-shock hover:text-electric-black
                px-10 py-7 text-sm font-mono uppercase tracking-wider
                transition-all duration-200
                shadow-[6px_6px_0px_0px_rgba(255,0,128,0.4)]
                hover:shadow-[8px_8px_0px_0px_rgba(255,0,128,0.6)]
                hover:translate-x-[-2px] hover:translate-y-[-2px]
              ">
                View Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedMedia} onOpenChange={() => setSelectedMedia(null)}>
        <DialogContent className="max-w-4xl bg-black/95 border-white/10 p-0">
          {selectedMedia && (
            <div className="relative">
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {selectedMedia.type === "photo" ? (
                <img
                  src={selectedMedia.url}
                  alt={selectedMedia.caption || "Gallery image"}
                  className="w-full h-auto"
                />
              ) : (
                <video
                  src={selectedMedia.url}
                  controls
                  className="w-full h-auto"
                  autoPlay
                />
              )}

              {selectedMedia.caption && (
                <div className="p-4 bg-black/50 backdrop-blur">
                  <p className="text-white">{selectedMedia.caption}</p>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
