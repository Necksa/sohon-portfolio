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
title: "Agency Clients",
projects: [
{
title: "AD-icted",
image: "/marketing/thumbnails/adicted.jpg",
href: "/marketing/adicted",
},

  {
    title: "Drivisa",
    image: "/marketing/thumbnails/drivisa.jpg",
    href: "/marketing/drivisa",
  },

  {
    title: "Amadeus Cafe",
    image: "/marketing/thumbnails/amadeus.jpg",
    href: "/marketing/amadeus",
  },

  {
    title: "Mercury Bar and Lounge",
    image: "/marketing/thumbnails/mercury.png",
    href: "/marketing/mercury",
  },

  {
    title: "Gananoque Nursery School",
    image: "/marketing/thumbnails/gananoque.png",
    href: "/marketing/gananoque",
  },
],

},

{
title: "Website Projects",
projects: [
{
title: "Peritys",
image: "/marketing/thumbnails/peritys.png",
href: "/marketing/peritys",
},
  {
    title: "Gananoque Nursery School",
    image: "/marketing/thumbnails/gananoque.png",
    href: "/marketing/gananoque",
  },

  {
    title: "Drivisa",
    image: "/marketing/thumbnails/drivisa.jpg",
    href: "/marketing/drivisa",
  },

  {
    title: "Amadeus Cafe",
    image: "/marketing/thumbnails/amadeus.jpg",
    href: "/marketing/amadeus",
  },
],
},

{
title: "Marketing & Growth",
projects: [
{
title: "AD-icted",
image: "/marketing/thumbnails/adicted.jpg",
href: "/marketing/adicted",
},
  {
    title: "Mercury Bar and Lounge",
    image: "/marketing/thumbnails/mercury.png",
    href: "/marketing/mercury",
  },

  {
    title: "Drivisa",
    image: "/marketing/thumbnails/drivisa.jpg",
    href: "/marketing/drivisa",
  },

  {
    title: "Peritys",
    image: "/marketing/thumbnails/peritys.png",
    href: "/marketing/peritys",
  },
],
},
];

export default function AgencyPage() {
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
        src="/marketing/adicted.mp4"
        type="video/mp4"
      />
    </video>

    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />

    <div className="relative z-20 flex flex-col justify-center h-full px-12 max-w-3xl">

      <h1 className="text-8xl font-extrabold mb-6">
        AGENCY
      </h1>

      <p className="text-xl text-zinc-300 leading-relaxed mb-8">
        Understanding the marketing world from the eyes of a business owner. Not just meeting expectations,
        but also making sure my clients are happy and satisfied with the work I do.
        I want to be a partner in their growth, not just a service provider.
      </p>

      <div className="flex gap-4">

        <Link
          href="/marketing/adicted"
          className="bg-white text-black px-8 py-3 rounded font-semibold hover:bg-zinc-200 transition"
        >
          ▶ Featured Client
        </Link>

        <Link
          href="/marketing/drivisa"
          className="bg-zinc-600/80 px-8 py-3 rounded font-semibold hover:bg-zinc-500 transition"
        >
          View Work
        </Link>

      </div>

    </div>

  </section>

      <section className="max-w-6xl mx-auto px-12 py-20">

        <h2 className="text-4xl font-bold mb-6">
          What I Do
        </h2>

        <p className="text-zinc-300 text-lg leading-relaxed max-w-4xl">
      I help businesses establish, improve,
      and grow their digital presence through
      website development, SEO, analytics,
      marketing strategy, content planning,
      automation, and performance optimization.
    </p>

  </section>

      <section className="max-w-6xl mx-auto px-12 pb-20">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-zinc-900 rounded-xl p-8">
            <h3 className="text-5xl font-bold">SEO</h3>
            <p className="text-zinc-400 mt-2">
              Growth Strategy
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            <h3 className="text-5xl font-bold">WEB</h3>
            <p className="text-zinc-400 mt-2">
              Development
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            <h3 className="text-5xl font-bold">ADS</h3>
            <p className="text-zinc-400 mt-2">
              Performance Marketing
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            <h3 className="text-5xl font-bold">DATA</h3>
            <p className="text-zinc-400 mt-2">
              Analytics & Reporting
            </p>
          </div>

        </div>

      </section>

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
