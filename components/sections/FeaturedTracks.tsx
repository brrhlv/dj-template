"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Music2, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FeaturedTracks() {
  const tracks = useQuery(api.tracks.getFeatured);

  if (!tracks) {
    return (
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent" />
          </div>
        </div>
      </section>
    );
  }

  const displayTracks = tracks.slice(0, 4);

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Tracks</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Check out my latest releases and most popular tracks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {displayTracks.map((track) => (
            <Card
              key={track._id}
              className="bg-card/50 backdrop-blur border-white/10 overflow-hidden group hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-purple-900/20 to-cyan-900/20">
                {track.coverUrl ? (
                  <img
                    src={track.coverUrl}
                    alt={track.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Music2 className="w-16 h-16 text-white/20" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1 line-clamp-1">
                  {track.title}
                </h3>
                {track.artist && (
                  <p className="text-sm text-gray-400 mb-2">{track.artist}</p>
                )}
                {track.genre && (
                  <Badge variant="secondary" className="mb-3">
                    {track.genre}
                  </Badge>
                )}

                <div className="flex gap-2 flex-wrap">
                  {track.spotifyUrl && (
                    <a
                      href={track.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-green-400 hover:text-green-300 flex items-center gap-1"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Spotify
                    </a>
                  )}
                  {track.soundcloudUrl && (
                    <a
                      href={track.soundcloudUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-orange-400 hover:text-orange-300 flex items-center gap-1"
                    >
                      <ExternalLink className="w-3 h-3" />
                      SoundCloud
                    </a>
                  )}
                  {track.appleMusicUrl && (
                    <a
                      href={track.appleMusicUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-pink-400 hover:text-pink-300 flex items-center gap-1"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Apple Music
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/music">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/20 hover:bg-white/10"
            >
              View All Tracks
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
