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
title: "Analytics Projects",
projects: [
{
title: "Queen's University",
image: "/marketing/thumbnails/queens.png",
href: "/marketing/queens",
},
{
title: "Mercury Bar and Lounge",
image: "/marketing/thumbnails/mercury.png",
href: "/marketing/mercury",
},
{
title: "Interacts.ai",
image: "/marketing/thumbnails/interacts.ai.png",
href: "/marketing/interacts",
},
{
title: "Subete",
image: "/marketing/thumbnails/subete.png",
href: "/marketing/subete",
},
{
title: "Drivisa",
image: "/marketing/thumbnails/drivisa.jpg",
href: "/marketing/drivisa",
},
],
},

{
title: "Analytics Tools",
projects: [
{
title: "Google Analytics 4",
image: "/analyst/ga4.jpg",
href: "/analyst",
},
{
title: "Looker Studio",
image: "/analyst/looker.jpg",
href: "/analyst",
},
{
title: "Google Search Console",
image: "/marketing/seo-web/search-console.jpg",
href: "/analyst",
},
{
title: "Microsoft Clarity",
image: "/analyst/clarity.jpg",
href: "/analyst",
},
{
title: "Hotjar",
image: "/analyst/hotjar.jpg",
href: "/analyst",
},
],
},

{
title: "Reporting & Optimization",
projects: [
{
title: "Dashboard Creation",
image: "/analyst/dashboard.jpg",
href: "/analyst",
},
{
title: "Traffic Analysis",
image: "/analyst/traffic.jpg",
href: "/analyst",
},
{
title: "Campaign Reporting",
image: "/analyst/reporting.jpg",
href: "/analyst",
},
{
title: "User Journey Analysis",
image: "/analyst/userflow.jpg",
href: "/analyst",
},
{
title: "Conversion Tracking",
image: "/analyst/conversion.jpg",
href: "/analyst",
},
],
},
];

export default function AnalystPage() {

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
        src="/analyst/analytics.mp4"
        type="video/mp4"
      />
    </video>

    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />

    <div className="relative z-20 flex flex-col justify-center h-full px-12 max-w-3xl pt-20">

      <h1 className="text-8xl font-extrabold mb-6">
        ANALYTICS
      </h1>

      <p className="text-xl text-zinc-300 leading-relaxed mb-8">
        Data analysis, dashboard creation,
        conversion tracking, reporting,
        user behaviour analysis,
        and performance optimization.
      </p>

      <div className="flex gap-4">

        <Link
          href="/marketing/queens"
          className="bg-white text-black px-8 py-3 rounded font-semibold hover:bg-zinc-200 transition"
        >
          ▶ Featured Project
        </Link>

        <Link
          href="/marketing/queens"
          className="bg-zinc-600/80 px-8 py-3 rounded font-semibold hover:bg-zinc-500 transition"
        >
          View Case Study
        </Link>

      </div>

    </div>

  </section>

  {/* ABOUT */}

  <section className="max-w-6xl mx-auto px-12 py-20">

    <h2 className="text-4xl font-bold mb-6">
      What I Do
    </h2>

    <p className="text-zinc-300 text-lg leading-relaxed max-w-4xl">
      I help organizations understand how users interact
      with their websites, campaigns, and digital products.
      Through analytics, reporting, conversion tracking,
      and user behaviour analysis, I uncover insights that
      improve performance and support better decision-making.
    </p>

  </section>

  {/* STATS */}

  <section className="max-w-6xl mx-auto px-12 pb-20">

    <div className="grid md:grid-cols-4 gap-6">

      <div className="bg-zinc-900 rounded-xl p-8">
        <h3 className="text-5xl font-bold">GA4</h3>
        <p className="text-zinc-400 mt-2">
          Analytics Platform
        </p>
      </div>

      <div className="bg-zinc-900 rounded-xl p-8">
        <h3 className="text-5xl font-bold">UX</h3>
        <p className="text-zinc-400 mt-2">
          Behaviour Analysis
        </p>
      </div>

      <div className="bg-zinc-900 rounded-xl p-8">
        <h3 className="text-5xl font-bold">KPI</h3>
        <p className="text-zinc-400 mt-2">
          Performance Tracking
        </p>
      </div>

      <div className="bg-zinc-900 rounded-xl p-8">
        <h3 className="text-5xl font-bold">CRO</h3>
        <p className="text-zinc-400 mt-2">
          Optimization
        </p>
      </div>

    </div>

  </section>

  {/* ROWS */}

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
