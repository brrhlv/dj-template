import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { BookingForm } from "@/components/sections/BookingForm";
import { Card } from "@/components/ui/card";
import {
  Calendar,
  Clock,
  DollarSign,
  Music2,
  Users,
  Headphones,
} from "lucide-react";

const services = [
  {
    icon: Music2,
    title: "Club Shows",
    description: "High-energy sets for nightclubs and venues",
  },
  {
    icon: Users,
    title: "Private Events",
    description: "Weddings, corporate events, and private parties",
  },
  {
    icon: Headphones,
    title: "Festival Sets",
    description: "Main stage performances at festivals worldwide",
  },
];

const faq = [
  {
    question: "How far in advance should I book?",
    answer:
      "For best availability, we recommend booking 3-6 months in advance, especially for weekends and peak season dates.",
  },
  {
    question: "What's included in a booking?",
    answer:
      "Standard bookings include DJ performance, professional equipment, and music selection. Additional services like lighting can be arranged.",
  },
  {
    question: "Do you travel internationally?",
    answer:
      "Yes! I perform worldwide. Travel and accommodation costs are typically covered by the client.",
  },
  {
    question: "What's your typical set length?",
    answer:
      "Set lengths are flexible and can range from 1 hour to 6+ hours depending on your event needs.",
  },
];

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-purple-900/20 to-black">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Book DJ NAME</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Let's create an unforgettable experience for your event
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="gradient-text">Services</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur border-white/10 p-6 text-center hover:border-primary/50 transition-all duration-300"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-400">{service.description}</p>
              </Card>
            ))}
          </div>

          {/* Booking Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
            <Card className="bg-card/50 backdrop-blur border-white/10 p-6">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Booking Timeline</h3>
              </div>
              <p className="text-sm text-gray-400">
                Book 3-6 months in advance for best availability
              </p>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-white/10 p-6">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Response Time</h3>
              </div>
              <p className="text-sm text-gray-400">
                We typically respond within 24 hours
              </p>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-white/10 p-6">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Custom Quotes</h3>
              </div>
              <p className="text-sm text-gray-400">
                Pricing based on event type, location, and duration
              </p>
            </Card>
          </div>

          {/* Booking Form */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              <span className="gradient-text">Request a Booking</span>
            </h2>
            <BookingForm />
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              <span className="gradient-text">Frequently Asked Questions</span>
            </h2>

            <div className="space-y-4">
              {faq.map((item, index) => (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur border-white/10 p-6"
                >
                  <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                  <p className="text-gray-400">{item.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
