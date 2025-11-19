"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Play, Calendar } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.1),transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
          <span className="gradient-text">DJ NAME</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Bringing the energy to dance floors worldwide with cutting-edge electronic music
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/music">
            <Button size="lg" className="gradient-purple-cyan hover:opacity-90 transition-opacity group">
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Listen Now
            </Button>
          </Link>

          <Link href="/events">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/20 hover:bg-white/10 transition-all"
            >
              <Calendar className="mr-2 h-5 w-5" />
              View Tour Dates
            </Button>
          </Link>
        </div>

        {/* Social Stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text">500K+</div>
            <div className="text-sm text-gray-400 mt-1">Monthly Listeners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text">150+</div>
            <div className="text-sm text-gray-400 mt-1">Shows Annually</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text">50+</div>
            <div className="text-sm text-gray-400 mt-1">Countries</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
          <div className="w-1.5 h-1.5 bg-white/50 rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
}
