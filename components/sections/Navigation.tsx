"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/music", label: "Music" },
  { href: "/events", label: "Events" },
  { href: "/media", label: "Media" },
  { href: "/about", label: "About" },
  { href: "/booking", label: "Book" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-electric-black/95 backdrop-blur-sm border-b-2 border-neon-cyan/20"
          : "bg-electric-black/50"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[90px]">

          {/* Logo with accent bar */}
          <Link href="/" className="flex flex-col gap-1 group">
            <span className="text-[32px] font-bold text-white font-display">
              DJ SHADOW
            </span>
            <div className="h-[3px] w-0 bg-neon-cyan group-hover:w-full transition-all duration-300" />
          </Link>

          {/* Desktop nav - uppercase mono */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[12px] font-mono uppercase tracking-wider text-concrete-400
                           hover:text-neon-cyan transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-neon-cyan
                               group-hover:w-full transition-all duration-200" />
              </Link>
            ))}
          </div>

          {/* CTA - neo-brutalist button */}
          <div className="hidden lg:block">
            <Link href="/booking">
              <Button className="
                bg-transparent border-2 border-neon-cyan text-neon-cyan
                hover:bg-neon-cyan hover:text-electric-black
                px-8 py-6 text-sm font-mono uppercase tracking-wider
                transition-all duration-200
                shadow-[4px_4px_0px_0px_rgba(0,217,255,0.3)]
                hover:shadow-[6px_6px_0px_0px_rgba(0,217,255,0.5)]
                hover:translate-x-[-2px] hover:translate-y-[-2px]
              ">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white border-2 border-neon-cyan p-2 hover:bg-neon-cyan hover:text-electric-black transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Takeover */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-void-black flex flex-col items-center justify-center lg:hidden">
          <div className="space-y-8 text-center">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-4xl font-display font-bold text-white
                           hover:text-neon-cyan transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.label}
              </Link>
            ))}

            <Link href="/booking" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="
                mt-8 bg-neon-cyan text-electric-black font-mono uppercase text-sm
                px-10 py-7 tracking-wider
                shadow-[6px_6px_0px_0px_rgba(255,204,0,0.5)]
                hover:shadow-[8px_8px_0px_0px_rgba(255,204,0,0.7)]
                hover:translate-x-[-2px] hover:translate-y-[-2px]
                transition-all duration-150
              ">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Close button in top right */}
          <button
            className="absolute top-8 right-8 text-white border-2 border-neon-cyan p-2
                       hover:bg-neon-cyan hover:text-electric-black transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={32} />
          </button>
        </div>
      )}
    </nav>
  );
}
