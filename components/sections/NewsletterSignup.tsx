"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Check, AlertCircle } from "lucide-react";
import { z } from "zod";
import { subscribe } from "@/app/actions/newsletter";

const emailSchema = z.string().email("Please enter a valid email address");

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      // Validate email
      emailSchema.parse(email);

      // Subscribe
      const result = await subscribe(email);

      if (result.success) {
        setStatus("success");
        setMessage(result.message);
        setEmail("");
      } else {
        setStatus("error");
        setMessage(result.message);
      }

      // Reset after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    } catch (error: any) {
      setStatus("error");
      if (error instanceof z.ZodError) {
        setMessage(error.errors[0].message);
      } else {
        setMessage("Something went wrong. Please try again.");
      }

      // Reset error after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-card/50 backdrop-blur border border-white/10 rounded-lg p-8 md:p-12">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-primary" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Stay Updated</span>
            </h2>

            <p className="text-gray-400 mb-8">
              Subscribe to my newsletter for exclusive updates, new releases, and upcoming tour announcements
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading" || status === "success"}
                  className="flex-1 bg-background/50 border-white/20 focus:border-primary"
                />
                <Button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="gradient-purple-cyan hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-r-transparent" />
                      Subscribing...
                    </>
                  ) : status === "success" ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      Subscribed!
                    </>
                  ) : (
                    "Subscribe"
                  )}
                </Button>
              </div>

              {message && (
                <div
                  className={`flex items-center gap-2 p-4 rounded-lg ${
                    status === "success"
                      ? "bg-green-500/10 text-green-400 border border-green-500/20"
                      : "bg-red-500/10 text-red-400 border border-red-500/20"
                  }`}
                >
                  {status === "success" ? (
                    <Check className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{message}</p>
                </div>
              )}
            </form>

            <p className="text-xs text-gray-500 mt-6">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
