"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  Search,
  Bell,
  ChevronDown,
  Volume2,
} from "lucide-react";

const rows = [
  {
    title: "Featured Campaigns",
    projects: [
      {
        title: "Mercury Bar and Lounge",
        image: "/marketing/thumbnails/mercury.png",
        href: "/marketing/mercury",
      },
      {
        title: "Queen's University",
        image: "/marketing/thumbnails/queens.png",
        href: "/marketing/queens",
      },
      {
        title: "Interacts.ai",
        image: "/marketing/thumbnails/interacts.ai.png",
        href: "/marketing/interacts",
      },
      {
        title: "Shobitam",
        image: "/marketing/thumbnails/shobitam.jpg",
        href: "/marketing/shobitam",
      },
    ],
  },

  {
    title: "Content Creation",
    projects: [
      {
        title: "Instagram Content",
        image: "/social/instagram.jpg",
        href: "/social-media",
      },
      {
        title: "TikTok Strategy",
        image: "/social/tiktok.jpg",
        href: "/social-media",
      },
      {
        title: "Short Form Video",
        image: "/social/reels.gif",
        href: "/social-media",
      },
      {
        title: "Community Management",
        image: "/social/community.jpg",
        href: "/social-media",
      },
    ],
  },

  {
    title: "Platforms & Tools",
    projects: [
      {
        title: "Meta Business Suite",
        image: "/social/meta-suite.jpg",
        href: "/social-media",
      },
      {
        title: "Canva",
        image: "/social/canva.jpg",
        href: "/social-media",
      },
      {
        title: "Hootsuite",
        image: "/social/hootsuite.jpg",
        href: "/social-media",
      },
      {
        title: "TikTok Analytics",
        image: "/social/tiktok-analytics.jpg",
        href: "/social-media",
      },
    ],
  },
];

export default function SocialMediaPage() {
  const pathname = usePathname();
  return (
    <main className="min-h-screen bg-[#141414] text-white">
    
      {/* HERO */}

      <section className="relative h-[85vh] overflow-hidden">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="/Marketing/social.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />

        <div className="relative z-20 flex flex-col justify-center h-full px-12 max-w-3xl pt-20">

          <Link
            href="/"
            className="text-zinc-300 mb-8 hover:text-white"
          >
            ← Back
          </Link>

          <h1 className="text-8xl font-extrabold mb-6">
            SOCIAL MEDIA
          </h1>

          <p className="text-xl text-zinc-300 leading-relaxed mb-8">
          I build social media strategies that combine
          creativity with data. My experience includes
          content planning, campaign management,
          audience engagement, influencer coordination,
          analytics reporting, and short-form content
          across Instagram, TikTok, LinkedIn, Facebook,
          Pinterest, and YouTube.
          </p>

        </div>

      </section>
      
      {/* PROJECT ROWS */}

      <div className="pb-24">

        {rows.map((row) => (
          <section
            key={row.title}
            className="mb-14"
          >
            <h2 className="text-2xl font-bold px-12 mb-4">
              {row.title}
            </h2>

            <div className="flex gap-3 overflow-x-auto px-12 scrollbar-hide">

              {row.projects.map((project) => (

                <Link
                  key={project.title}
                  href={project.href}
                  className="
                    relative
                    min-w-[320px]
                    h-[180px]
                    rounded-md
                    overflow-hidden
                    hover:scale-105
                    transition-all
                    duration-300
                  "
                >

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  <h3 className="absolute bottom-4 left-4 text-lg font-semibold">
                    {project.title}
                  </h3>

                </Link>

              ))}

            </div>

          </section>
        ))}

      </div>

    </main>
  );
}