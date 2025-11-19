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
        setMessage(error.issues[0].message);
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
    <section className="py-32 bg-void-black relative overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute top-20 left-10 w-2 h-48 bg-toxic-green/20" />
      <div className="absolute bottom-20 right-20 w-40 h-40 border-4 border-neon-cyan/20" />

      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-concrete-200 border-2 border-toxic-green p-8 md:p-16
                         shadow-[8px_8px_0px_0px_rgba(0,255,102,0.3)]">

            {/* Icon - brutalist */}
            <div className="w-20 h-20 border-4 border-toxic-green bg-electric-black
                           flex items-center justify-center mx-auto mb-8">
              <Mail className="w-10 h-10 text-toxic-green" />
            </div>

            {/* Header */}
            <div className="text-center mb-8">
              <div className="text-mono text-toxic-green text-xs mb-4">
                // NEWSLETTER
              </div>
              <h2 className="text-display-md font-display text-white mb-4">
                Stay <span className="gradient-text-primary">Updated</span>
              </h2>
              <p className="text-concrete-400 text-sm">
                Exclusive updates, new releases, and tour announcements
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="YOUR.EMAIL@DOMAIN.COM"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading" || status === "success"}
                  className="flex-1 bg-electric-black border-2 border-concrete-300
                           text-white placeholder:text-concrete-400 placeholder:font-mono
                           focus:border-toxic-green font-mono text-sm px-4 py-6
                           disabled:opacity-50"
                />
                <Button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className={`
                    bg-transparent border-2 border-toxic-green text-toxic-green
                    hover:bg-toxic-green hover:text-electric-black
                    px-8 py-6 text-xs font-mono uppercase tracking-wider
                    transition-all duration-150
                    disabled:opacity-50 disabled:cursor-not-allowed
                    shadow-[4px_4px_0px_0px_rgba(0,255,102,0.3)]
                    hover:shadow-[6px_6px_0px_0px_rgba(0,255,102,0.5)]
                    hover:translate-x-[-2px] hover:translate-y-[-2px]
                  `}
                >
                  {status === "loading" ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin border-2 border-solid border-toxic-green border-r-transparent" />
                      Sending...
                    </>
                  ) : status === "success" ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      Done!
                    </>
                  ) : (
                    "Subscribe"
                  )}
                </Button>
              </div>

              {/* Status message - brutalist */}
              {message && (
                <div
                  className={`flex items-center gap-3 p-4 border-2 ${
                    status === "success"
                      ? "bg-toxic-green/10 text-toxic-green border-toxic-green"
                      : "bg-magenta-shock/10 text-magenta-shock border-magenta-shock"
                  }`}
                >
                  {status === "success" ? (
                    <Check className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-xs font-mono">{message.toUpperCase()}</p>
                </div>
              )}
            </form>

            {/* Privacy note */}
            <p className="text-[10px] text-concrete-400 mt-8 text-center font-mono">
              WE RESPECT YOUR PRIVACY. UNSUBSCRIBE ANYTIME.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
