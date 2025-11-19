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
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Media Gallery</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Photos and videos from recent performances
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {displayMedia.map((item) => (
              <Card
                key={item.id}
                className="bg-card/50 backdrop-blur border-white/10 overflow-hidden group cursor-pointer hover:border-primary/50 transition-all duration-300"
                onClick={() => setSelectedMedia(item)}
              >
                <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-purple-900/20 to-cyan-900/20">
                  {item.type === "photo" ? (
                    <img
                      src={item.url}
                      alt={item.caption || "Gallery image"}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <>
                      <img
                        src={item.thumbnailUrl || "/placeholder-video.jpg"}
                        alt={item.caption || "Video thumbnail"}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                          <Video className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </>
                  )}

                  <div className="absolute top-2 right-2">
                    <Badge variant={item.type === "photo" ? "secondary" : "default"}>
                      {item.type === "photo" ? (
                        <ImageIcon className="w-3 h-3 mr-1" />
                      ) : (
                        <Video className="w-3 h-3 mr-1" />
                      )}
                      {item.type}
                    </Badge>
                  </div>

                  {item.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-sm text-white">{item.caption}</p>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/media">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/20 hover:bg-white/10"
              >
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
