"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Music2, ExternalLink } from "lucide-react";
import type { Track } from "@/lib/db/schema";

interface MusicClientProps {
  tracks: Track[];
}

export function MusicClient({ tracks }: MusicClientProps) {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  // Get unique genres
  const genres = Array.from(new Set(tracks.map((t) => t.genre).filter(Boolean))) as string[];

  // Filter tracks by genre
  const filteredTracks = selectedGenre
    ? tracks.filter((t) => t.genre === selectedGenre)
    : tracks;

  return (
    <>
      {/* Filters */}
      {genres.length > 0 && (
        <section className="py-6 bg-black/50 backdrop-blur border-y border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={selectedGenre === null ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/20 transition-colors"
                onClick={() => setSelectedGenre(null)}
              >
                All Genres
              </Badge>
              {genres.map((genre) => (
                <Badge
                  key={genre}
                  variant={selectedGenre === genre ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary/20 transition-colors"
                  onClick={() => setSelectedGenre(genre)}
                >
                  {genre}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tracks Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {filteredTracks.length === 0 ? (
            <div className="text-center py-12">
              <Music2 className="w-16 h-16 mx-auto text-gray-600 mb-4" />
              <p className="text-gray-400 text-lg">No tracks found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTracks.map((track) => (
                <Card
                  key={track.id}
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
                    {track.featured && (
                      <div className="absolute top-2 left-2">
                        <Badge className="gradient-purple-cyan">Featured</Badge>
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1 line-clamp-1">
                      {track.title}
                    </h3>
                    {track.artist && (
                      <p className="text-sm text-gray-400 mb-2">{track.artist}</p>
                    )}
                    {track.releaseDate && (
                      <p className="text-xs text-gray-500 mb-3">
                        {new Date(track.releaseDate).getFullYear()}
                      </p>
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
          )}
        </div>
      </section>
    </>
  );
}
