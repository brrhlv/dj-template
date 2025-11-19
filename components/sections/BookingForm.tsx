"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Check, Send, AlertCircle } from "lucide-react";
import { createBooking } from "@/app/actions/bookings";

const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  eventType: z.string().min(2, "Please specify the event type"),
  date: z.string().min(1, "Please select a date"),
  venue: z.string().optional(),
  message: z.string().min(10, "Please provide more details (at least 10 characters)"),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export function BookingForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventType: "",
      date: "",
      venue: "",
      message: "",
    },
  });

  const onSubmit = async (data: BookingFormData) => {
    setStatus("loading");
    setMessage("");

    try {
      const result = await createBooking(data);

      if (result.success) {
        setStatus("success");
        setMessage("Booking request submitted successfully! We'll get back to you within 24 hours.");
        form.reset();
      } else {
        setStatus("error");
        setMessage(result.error || "Failed to submit booking request. Please try again.");
      }

      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    } catch (error) {
      setStatus("error");
      setMessage("Failed to submit booking request. Please try again or contact us directly.");

      // Reset error after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your name"
                      {...field}
                      disabled={status === "loading"}
                      className="bg-background/50 border-white/20 focus:border-primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      {...field}
                      disabled={status === "loading"}
                      className="bg-background/50 border-white/20 focus:border-primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      {...field}
                      disabled={status === "loading"}
                      className="bg-background/50 border-white/20 focus:border-primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="eventType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Type *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g., Wedding, Club Night, Festival"
                      {...field}
                      disabled={status === "loading"}
                      className="bg-background/50 border-white/20 focus:border-primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Date *</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      {...field}
                      disabled={status === "loading"}
                      className="bg-background/50 border-white/20 focus:border-primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="venue"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Venue/Location</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Venue name or location"
                      {...field}
                      disabled={status === "loading"}
                      className="bg-background/50 border-white/20 focus:border-primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message *</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us more about your event, expected number of guests, music preferences, etc."
                    rows={6}
                    {...field}
                    disabled={status === "loading"}
                    className="bg-background/50 border-white/20 focus:border-primary resize-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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

          <Button
            type="submit"
            size="lg"
            disabled={status === "loading"}
            className="w-full gradient-purple-cyan hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {status === "loading" ? (
              <>
                <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-solid border-white border-r-transparent" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Submit Booking Request
              </>
            )}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            * Required fields. We typically respond within 24 hours.
          </p>
        </form>
      </Form>
    </div>
  );
}
