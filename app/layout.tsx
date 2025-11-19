import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ['600', '700'],
  variable: '--font-space-grotesk',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ['400'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: "DJ NAME - Electronic Music Artist | Tour Dates & Bookings",
  description: "Official website of DJ NAME - Electronic music artist bringing high-energy performances worldwide. Listen to tracks, view tour dates, and book events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
