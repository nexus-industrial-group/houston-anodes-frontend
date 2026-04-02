import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Houston Anodes",
    template: "Houston Anodes | %s ",
  },
  description:
    "Houston Anodes provides world-class cathodic protection solutions with ISO 9001 certified manufacturing and a global footprint spanning 1000+ projects worldwide.",
  openGraph: {
    title: "Houston Anodes",
    description:
      "Houston Anodes provides world-class cathodic protection solutions with ISO 9001 certified manufacturing and a global footprint spanning 1000+ projects worldwide.",
    type: "website",
    images: [
      {
        url: "/images/services/services.webp",
        width: 1200,
        height: 630,
        alt: "Houston Anodes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
