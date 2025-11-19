import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Award,
  Music2,
  Users,
  Globe,
  Download,
  Mail,
} from "lucide-react";
import Link from "next/link";

const achievements = [
  {
    icon: Music2,
    title: "500K+ Monthly Listeners",
    description: "Across all streaming platforms",
  },
  {
    icon: Users,
    title: "150+ Shows Annually",
    description: "Performing at major venues and festivals",
  },
  {
    icon: Globe,
    title: "50+ Countries",
    description: "Worldwide tour experience",
  },
  {
    icon: Award,
    title: "Multiple Awards",
    description: "Recognition in electronic music scene",
  },
];

const skills = [
  "House",
  "Techno",
  "Progressive",
  "Deep House",
  "Tech House",
  "Melodic Techno",
  "EDM",
  "Trance",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-purple-900/20 to-black">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">About</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Professional DJ bringing energy to dance floors worldwide
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-purple-900/20 to-cyan-900/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <Music2 className="w-32 h-32 text-white/20" />
              </div>
              {/* Replace with actual image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text">Biography</span>
              </h2>

              <div className="space-y-4 text-gray-300">
                <p>
                  With over a decade of experience in electronic music, DJ NAME has
                  established themselves as one of the most sought-after performers
                  in the industry. Known for seamlessly blending cutting-edge sounds
                  with timeless classics, their sets create unforgettable experiences
                  on dance floors around the world.
                </p>

                <p>
                  Starting from underground clubs to headlining major festivals,
                  the journey has been marked by dedication, innovation, and an
                  unwavering passion for music. Each performance is carefully crafted
                  to take the audience on a sonic journey, building energy and
                  creating moments that resonate long after the night ends.
                </p>

                <p>
                  Beyond performing, DJ NAME is also a prolific producer with
                  releases on major labels and consistent support from industry
                  leaders. The unique sound has garnered millions of streams and
                  a dedicated global fanbase.
                </p>
              </div>

              <div className="flex gap-4 mt-8">
                <Link href="/booking">
                  <Button className="gradient-purple-cyan hover:opacity-90">
                    <Mail className="mr-2 h-4 w-4" />
                    Book Now
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-2 border-white/20 hover:bg-white/10"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Press Kit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="gradient-text">Achievements</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur border-white/10 p-6 text-center hover:border-primary/50 transition-all duration-300"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-sm text-gray-400">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Genres */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="gradient-text">Genres & Styles</span>
          </h2>

          <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="text-lg px-6 py-3 border-2 border-white/20 hover:border-primary/50 transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Ready to Book?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Get in touch to discuss your event and create an unforgettable
              experience for your audience
            </p>
            <Link href="/booking">
              <Button
                size="lg"
                className="gradient-purple-cyan hover:opacity-90 transition-opacity"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact for Booking
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
