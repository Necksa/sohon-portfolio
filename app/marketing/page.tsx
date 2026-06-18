"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";

import {
  Search,
  Bell,
  ChevronDown,
  Volume2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const rows = [
  {
  title: "Top Campaigns",
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
      title: "Subete",
      image: "/marketing/thumbnails/subete.png",
      href: "/marketing/subete",
    },

    {
      title: "Interacts.ai",
      image: "/marketing/thumbnails/interacts.ai.png",
      href: "/marketing/interacts",
    },

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
  ],
},

{
  title: "Things I can Do",
  projects: [
    {
      title: "Google Ads",
      image: "/marketing/thumbnails/googleads.jpg",
      href: "/marketing/google-ads",
    },

    {
      title: "Meta Ads",
      image: "/marketing/thumbnails/meta.jpg",
      href: "/marketing/meta-ads",
    },

    {
      title: "PPC Campaign",
      image: "/marketing/thumbnails/ppc.jpg",
      href: "/marketing/ppc",
    },

    {
      title: "Conversion Optimization",
      image: "/marketing/thumbnails/conversion.jpg",
      href: "/marketing/conversion",
    },

    {
      title: "Email Marketing",
      image: "/marketing/thumbnails/email.jpg",
      href: "/marketing/email",
    },

    {
      title: "PR Marketing",
      image: "/marketing/thumbnails/shobitam.jpg",
      href: "/marketing/pr",
    },
  ],
},

  {
  title: "Client Work",
  projects: [
    {
      title: "AD-icted",
      image: "/marketing/thumbnails/adicted.jpg",
      href: "/marketing/adicted",
    },

    {
      title: "Gananoque Nursery School",
      image: "/marketing/thumbnails/gananoque.png",
      href: "/marketing/gananoque",
    },

    {
      title: "The Gertrudes",
      image: "/marketing/thumbnails/gertrudes.jpg",
      href: "/marketing/gertrudes",
    },

    {
      title: "Drivisa",
      image: "/marketing/thumbnails/drivisa.jpg",
      href: "/marketing/drivisa",
    },

    {
      title: "Mercury Bar and Lounge",
      image: "/marketing/thumbnails/mercury.png",
      href: "/marketing/mercury",
    },

    {
      title: "Amadeus Cafe",
      image: "/marketing/thumbnails/amadeus.jpg",
      href: "/marketing/amadeus",
    },
  ],
},

  {
  title: "Analytics & Reporting",
  projects: [
    {
      title: "GA4 Analysis",
      image: "/marketing/thumbnails/ga4.jpg",
      href: "/marketing/ga4-analysis",
    },

    {
      title: "Traffic Analysis",
      image: "/marketing/thumbnails/traffic.jpg",
      href: "/marketing/traffic-analysis",
    },

    {
      title: "Campaign Reporting",
      image: "/marketing/thumbnails/reporting.jpg",
      href: "/marketing/campaign-reporting",
    },

    {
      title: "A/B Testing",
      image: "/marketing/thumbnails/abtesting.jpg",
      href: "/marketing/ab-testing",
    },

    {
      title: "User Flow Analysis",
      image: "/marketing/thumbnails/userflow.jpg",
      href: "/marketing/user-flow-analysis",
    },

    {
      title: "Conversion Insights",
      image: "/marketing/thumbnails/insights.jpg",
      href: "/marketing/conversion-insights",
    },
  ],
},
];

export default function Marketing()
 {
  const pathname = usePathname();
  const scrollRow = (
    direction: "left" | "right",
    rowTitle: string
  ) => {
    const row = document.getElementById(
      rowTitle.replace(/\s+/g, "-")
    );

    if (!row) return;

    row.scrollBy({
      left: direction === "right" ? 1000 : -1000,
      behavior: "smooth",
    });
  };

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
            src="/marketing/interacts.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />

        <div className="relative z-10 flex flex-col justify-center h-full px-12 max-w-2xl pt-20">

          <h1 className="text-8xl font-extrabold mb-6">
            QUEEN'S UNIVERSITY
          </h1>

          <p className="text-xl text-zinc-200 mb-8 leading-relaxed">
            Analytics, campaign strategy,
            traffic reporting,
            user flow analysis,
            performance measurement,
            and conversion insights.
          </p>

          <div className="flex gap-4">

  <Link
    href="/marketing/queens"
    className="bg-white text-black px-8 py-3 rounded font-semibold hover:bg-zinc-200 transition"
  >
    ▶ View Case Study
  </Link>

  <Link
    href="/marketing/queens"
    className="bg-zinc-600/80 px-8 py-3 rounded font-semibold hover:bg-zinc-500 transition"
  >
    ℹ More Info
  </Link>

</div>

        </div>

      </section>

      {/* ROWS */}

      <div className="-mt-16 relative z-20">

        {rows.map((row) => (

          <section
            key={row.title}
            className="mb-14"
          >

            <h3 className="text-2xl font-semibold px-12 mb-4">
              {row.title}
            </h3>

            <div className="relative group"> 

              {/* LEFT */}

              <button
  onClick={() => scrollRow("left", row.title)}
  className="
  absolute
  left-0
  top-0
  bottom-0
  z-30
  w-20
  bg-gradient-to-r
  from-black
  via-black/80
  to-transparent
  opacity-0
  group-hover:opacity-100
  transition-all
  duration-300
  flex
  items-center
  justify-center
  hover:w-24
"
>
  <ChevronLeft size={42} />
</button>

              {/* RIGHT */}

              <button
  onClick={() => scrollRow("right", row.title)}
  className="
  absolute
  right-0
  top-0
  bottom-0
  z-30
  w-20
  bg-gradient-to-l
  from-black
  via-black/80
  to-transparent
  opacity-0
  group-hover:opacity-100
  transition-all
  duration-300
  flex
  items-center
  justify-center
  hover:w-24
"
>
  <ChevronRight size={42} />
</button>

              <div
                id={row.title.replace(/\s+/g, "-")}
                className="
                  flex
                  gap-2
                  overflow-x-auto
                  scrollbar-hide
                  scroll-smooth
                  px-12
                  pb-2
                "
              >

                {row.projects.map((project) => (

                 <Link
  href={project.href}
  key={project.title}
  className="
  relative
  overflow-hidden
  min-w-[320px]
  h-[180px]
  rounded-md
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

  <h4 className="absolute bottom-4 left-4 font-semibold text-lg">
    {project.title}
  </h4>
</Link>

                ))}

              </div>

            </div>

          </section>

        ))}

      </div>

    </main>
  );
}
