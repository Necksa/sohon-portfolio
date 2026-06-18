"use client";

import Link from "next/link";
import Image from "next/image";
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
  title: "Website Audits & UX",
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
      title: "Amadeus Cafe",
      image: "/Marketing/thumbnails/amadeus.jpg",
      href: "/marketing/amadeus",
    },
  ],
},
  {
  title: "Technical SEO Tools",
  projects: [
    {
      title: "Google Search Console",
      image: "/Marketing/seo-web/search-console.jpg",
      href: "/seo-web",
    },

    {
      title: "Screaming Frog",
      image: "/Marketing/seo-web/screaming-frog.jpg",
      href: "/seo-web",
    },

    {
      title: "Semrush",
      image: "/Marketing/seo-web/semrush.jpg",
      href: "/seo-web",
    },

    {
      title: "Ahrefs",
      image: "/Marketing/seo-web/ahrefs.jpg",
      href: "/seo-web",
    },
  ],
},

  {
    title: "Website Development",
    projects: [
      {
        title: "Gananoque Nursery School",
        image: "/marketing/thumbnails/gananoque.png",
        href: "/marketing/gananoque",
      },
      {
        title: "Peritys",
        image: "/marketing/thumbnails/peritys.png",
        href: "/marketing/peritys",
      },
    ],
  },
];

export default function Marketing() {
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
            src="/Marketing/queens.mp4"
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