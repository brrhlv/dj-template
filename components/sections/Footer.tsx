import Link from "next/link";
import {
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Music2,
  Mail,
} from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/music", label: "Music" },
  { href: "/events", label: "Events" },
  { href: "/media", label: "Media" },
  { href: "/about", label: "About" },
  { href: "/booking", label: "Booking" },
];

export function Footer() {
  return (
    <footer className="bg-void-black border-t-4 border-neon-cyan">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6 group">
              <div className="text-[32px] font-bold text-white font-display">
                DJ SHADOW
              </div>
              <div className="h-[3px] w-0 bg-neon-cyan group-hover:w-full transition-all duration-300" />
            </Link>
            <p className="text-concrete-400 mb-6 max-w-md text-sm leading-relaxed">
              Professional DJ bringing energy to dance floors worldwide with cutting-edge electronic music.
            </p>

            {/* Social links - brutalist squares */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border-2 border-neon-cyan bg-electric-black
                             flex items-center justify-center
                             hover:bg-neon-cyan hover:text-electric-black
                             transition-all duration-150 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-neon-cyan group-hover:text-electric-black transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-mono text-neon-cyan text-xs mb-6">// NAVIGATION</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-concrete-400 hover:text-white transition-colors text-sm font-mono uppercase text-[11px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-mono text-volt-yellow text-xs mb-6">// CONTACT</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:booking@djshadow.com"
                  className="text-concrete-400 hover:text-white transition-colors flex items-start gap-2 text-xs"
                >
                  <Mail className="w-4 h-4 text-volt-yellow flex-shrink-0 mt-0.5" />
                  <span className="font-mono">BOOKING@DJSHADOW.COM</span>
                </a>
              </li>
              <li>
                <a
                  href="https://soundcloud.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-concrete-400 hover:text-white transition-colors flex items-start gap-2 text-xs"
                >
                  <Music2 className="w-4 h-4 text-volt-yellow flex-shrink-0 mt-0.5" />
                  <span className="font-mono">SOUNDCLOUD</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - brutalist */}
        <div className="pt-8 border-t-2 border-concrete-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-concrete-400 font-mono">
              © {new Date().getFullYear()} DJ SHADOW. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-6 text-xs text-concrete-400 font-mono">
              <Link href="/privacy" className="hover:text-neon-cyan transition-colors">
                PRIVACY
              </Link>
              <Link href="/terms" className="hover:text-neon-cyan transition-colors">
                TERMS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
