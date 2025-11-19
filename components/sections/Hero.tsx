"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Play, Calendar } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-void-black">

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20 bg-grid-pattern" />

      {/* Geometric accent shapes - brutalist */}
      <div className="absolute top-20 right-10 w-32 h-32 border-4 border-magenta-shock rotate-12 opacity-50" />
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-volt-yellow/20" />
      <div className="absolute top-1/2 right-1/4 w-2 h-48 bg-neon-cyan/30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Hero text */}
          <div>
            <div className="text-mono text-neon-cyan mb-4">
              ELECTRONIC MUSIC ARTIST
            </div>

            <h1 className="text-display-xl font-display mb-8">
              <span className="block text-white">DJ</span>
              <span className="block gradient-text-primary">SHADOW</span>
            </h1>

            <p className="text-body-lg text-concrete-400 max-w-lg mb-12 leading-relaxed">
              Bringing high-energy electronic music to dance floors worldwide.
              500K+ monthly listeners across platforms.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/music">
                <Button className="
                  bg-neon-cyan text-electric-black font-mono uppercase text-sm
                  px-10 py-7 tracking-wider
                  shadow-[6px_6px_0px_0px_rgba(255,204,0,0.5)]
                  hover:shadow-[8px_8px_0px_0px_rgba(255,204,0,0.7)]
                  hover:translate-x-[-2px] hover:translate-y-[-2px]
                  transition-all duration-150
                ">
                  <Play className="mr-2 h-5 w-5" />
                  Listen Now
                </Button>
              </Link>

              <Link href="/events">
                <Button className="
                  bg-transparent border-2 border-volt-yellow text-volt-yellow
                  hover:bg-volt-yellow hover:text-electric-black
                  font-mono uppercase text-sm px-10 py-7 tracking-wider
                  transition-all duration-150
                ">
                  <Calendar className="mr-2 h-5 w-5" />
                  Tour Dates
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: Stats - brutalist cards */}
          <div className="flex flex-col gap-6">
            <div className="bg-concrete-200 border-l-4 border-neon-cyan p-8 hover:translate-x-[-2px] transition-transform duration-150">
              <div className="text-6xl font-display font-bold text-white mb-2">
                500K+
              </div>
              <div className="text-mono text-concrete-400">
                MONTHLY LISTENERS
              </div>
            </div>

            <div className="bg-concrete-200 border-l-4 border-volt-yellow p-8 hover:translate-x-[-2px] transition-transform duration-150">
              <div className="text-6xl font-display font-bold text-white mb-2">
                150+
              </div>
              <div className="text-mono text-concrete-400">
                SHOWS ANNUALLY
              </div>
            </div>

            <div className="bg-concrete-200 border-l-4 border-magenta-shock p-8 hover:translate-x-[-2px] transition-transform duration-150">
              <div className="text-6xl font-display font-bold text-white mb-2">
                50+
              </div>
              <div className="text-mono text-concrete-400">
                COUNTRIES TOURED
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - minimal */}
      <div className="absolute bottom-12 left-6 lg:left-8">
        <div className="text-mono text-concrete-400 rotate-90 origin-left">
          SCROLL
        </div>
        <div className="w-[1px] h-24 bg-gradient-to-b from-concrete-400 to-transparent ml-2 mt-4" />
      </div>
    </section>
  );
}
