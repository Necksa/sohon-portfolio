import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";
import MusicPlayer from "@/components/MusicPlayer";
import Navbar from "@/components/navbar";
import { PlayerProvider } from "@/components/PlayerContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sohon Roy",
  description: "Netflix-style portfolio of Sohon Roy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

<PlayerProvider>

  <Navbar />

  {children}

  <MusicPlayer />

</PlayerProvider>

</body>
    </html>
  );
}