import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import "react-image-gallery/styles/css/image-gallery.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "World Guide",
  description:
    "World Guide is a free and open-source platform that helps you find the best travel destinations for your next adventure.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full w-full bg-gradient flex flex-col`}
      >
        <Navbar />
        <main className="px-6 flex-1 overflow-y-hidden">{children}</main>
      </body>
    </html>
  );
}
