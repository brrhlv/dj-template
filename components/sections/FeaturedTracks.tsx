import { getFeaturedTracks } from "@/app/actions/tracks";
import { Music2, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export async function FeaturedTracks() {
  const tracks = await getFeaturedTracks();
  const displayTracks = tracks.slice(0, 4);

  return (
    <section className="py-32 bg-electric-black relative overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute top-20 left-10 w-48 h-2 bg-volt-yellow/20" />
      <div className="absolute bottom-40 right-20 w-32 h-32 border-4 border-magenta-shock/30" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header - brutalist */}
        <div className="mb-16">
          <div className="text-mono text-neon-cyan mb-4">
            // LATEST RELEASES
          </div>
          <h2 className="text-display-md font-display mb-6">
            <span className="text-white">Featured</span>{" "}
            <span className="gradient-text-primary">Tracks</span>
          </h2>
          <div className="w-24 h-1 bg-neon-cyan" />
        </div>

        {/* Track cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {displayTracks.map((track, index) => {
            // Cycle through different colored shadows
            const shadowColors = [
              "shadow-[6px_6px_0px_0px_rgba(0,217,255,0.4)] hover:shadow-[8px_8px_0px_0px_rgba(0,217,255,0.6)]",
              "shadow-[6px_6px_0px_0px_rgba(255,204,0,0.4)] hover:shadow-[8px_8px_0px_0px_rgba(255,204,0,0.6)]",
              "shadow-[6px_6px_0px_0px_rgba(255,0,128,0.4)] hover:shadow-[8px_8px_0px_0px_rgba(255,0,128,0.6)]",
              "shadow-[6px_6px_0px_0px_rgba(0,255,102,0.4)] hover:shadow-[8px_8px_0px_0px_rgba(0,255,102,0.6)]",
            ];
            const borderColors = [
              "border-neon-cyan",
              "border-volt-yellow",
              "border-magenta-shock",
              "border-toxic-green",
            ];

            return (
              <div
                key={track.id}
                className={`bg-concrete-200 border-2 ${borderColors[index % 4]} overflow-hidden
                           group ${shadowColors[index % 4]}
                           hover:translate-x-[-2px] hover:translate-y-[-2px]
                           transition-all duration-150`}
              >
                {/* Cover image - hard edge */}
                <div className="aspect-square relative overflow-hidden bg-concrete-100">
                  {track.coverUrl ? (
                    <img
                      src={track.coverUrl}
                      alt={track.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-void-black">
                      <Music2 className="w-16 h-16 text-concrete-400" />
                    </div>
                  )}
                </div>

                {/* Track info */}
                <div className="p-5 border-t-2 border-concrete-300">
                  <h3 className="font-display font-bold text-lg text-white mb-1 line-clamp-1">
                    {track.title}
                  </h3>
                  {track.artist && (
                    <p className="text-mono text-concrete-400 text-[10px] mb-3">
                      {track.artist.toUpperCase()}
                    </p>
                  )}

                  {track.genre && (
                    <div className={`inline-block px-3 py-1 mb-4 border-2 ${borderColors[index % 4]} bg-electric-black`}>
                      <span className="text-mono text-[10px] text-white">
                        {track.genre.toUpperCase()}
                      </span>
                    </div>
                  )}

                  {/* Platform links - brutalist buttons */}
                  <div className="flex gap-2 flex-wrap mt-4">
                    {track.spotifyUrl && (
                      <a
                        href={track.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-2 py-1 border border-toxic-green
                                   text-toxic-green hover:bg-toxic-green hover:text-electric-black
                                   transition-colors text-[10px] font-mono uppercase"
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
                        className="flex items-center gap-1 px-2 py-1 border border-volt-yellow
                                   text-volt-yellow hover:bg-volt-yellow hover:text-electric-black
                                   transition-colors text-[10px] font-mono uppercase"
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
                        className="flex items-center gap-1 px-2 py-1 border border-magenta-shock
                                   text-magenta-shock hover:bg-magenta-shock hover:text-electric-black
                                   transition-colors text-[10px] font-mono uppercase"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Apple
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA - brutalist */}
        <div className="flex justify-center">
          <Link href="/music">
            <Button className="
              bg-transparent border-2 border-neon-cyan text-neon-cyan
              hover:bg-neon-cyan hover:text-electric-black
              px-10 py-7 text-sm font-mono uppercase tracking-wider
              transition-all duration-200
              shadow-[6px_6px_0px_0px_rgba(0,217,255,0.4)]
              hover:shadow-[8px_8px_0px_0px_rgba(0,217,255,0.6)]
              hover:translate-x-[-2px] hover:translate-y-[-2px]
            ">
              View All Tracks
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
