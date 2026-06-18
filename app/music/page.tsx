"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  Search,
  Bell,
  ChevronDown,
  Volume2,
  VolumeX,
} from "lucide-react";

import {
  useRef,
  useState,
} from "react";
const rows = [
{
title: "Featured Pieces",
projects: [


{
title: "The adventures with Hermit Hana",
image: "/music/coverhana.jpg",
href: "/music/hermitHana",
},
{
title: "Scribbles",
image: "/music/scribbles-cover.jpg",
href: "/music/scribbles",
},
],
},

{
title: "Journalism",
projects: [
{
title: "I Got Rejected for an Apology. So I Studied the System.",
image: "/music/featured2.jpg",
href: "/music/apology",
},
{
title: "If I Had A Father, I Might Not Need AI",
image: "/music/featured1.jpg",
href: "/music/if-i-had-a-father",
},
],
},

{
title: "The Notebook",
projects: [
{
title: "The Things Fate Refuses To Forget",
image: "/music/the-things-fate-refuses-to-forget.jpg",
href: "/music/the-things-fate-refuses-to-forget",
},
{
title: "Scribbles",
image: "/music/scribbles-cover.jpg",
href: "/music/scribbles",
},
{
title: "The adventures with Hermit Hana",
image: "/music/coverhana.jpg",
href: "/music/hermitHana",
},
{
title: "Ballet of a brief beginning",
image: "/music/ballet-hero.jpg",
href: "/music/ballet-of-a-brief-beginning",
},
],
},

{
title: "Songs & Recitations",
projects: [
{
title: "Ocean (ghost written)",
image: "/music/ocean-cover.jpg",
href: "/music/ocean",
},
{
title: "I Need Sleep",
image: "/music/i-need-sleep-cover.jpg",
href: "/music/i-need-sleep",
},
{
title: "IYKYK",
image: "/music/iykyk-cover.jpg",
href: "/music/iykyk",
},
],
},
];

export default function CreativeArchivePage() {
  const pathname = usePathname();

  const videoRef =
    useRef<HTMLVideoElement>(null);

  const [muted, setMuted] =
    useState(true);

  const toggleMute = () => {
    if (!videoRef.current) return;

    videoRef.current.muted =
      !videoRef.current.muted;

    setMuted(videoRef.current.muted);
  };
return (
    <main className="min-h-screen bg-[#141414] text-white">
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-12 py-5 bg-gradient-to-b from-black via-black/80 to-black/20 backdrop-blur-sm">

  <div className="flex items-center gap-10">

    <Link href="/">
      <Image
        src="/logo.png"
        alt="SOHON"
        width={110}
        height={40}
        priority
        className="cursor-pointer"
      />
    </Link>

    <div className="flex gap-6 text-sm">

      <Link
        href="/marketing"
        className={
          pathname.startsWith("/marketing")
            ? "text-white"
            : "text-zinc-300 hover:text-white"
        }
      >
        Digital Marketing
      </Link>

      <Link
        href="/seo-web"
        className={
          pathname.startsWith("/seo-web")
            ? "text-white"
            : "text-zinc-300 hover:text-white"
        }
      >
        SEO
      </Link>

      <Link
        href="/social-media"
        className={
          pathname.startsWith("/social-media")
            ? "text-white"
            : "text-zinc-300 hover:text-white"
        }
      >
        Social Media
      </Link>

      <Link
        href="/analyst"
        className={
          pathname.startsWith("/analyst")
            ? "text-white"
            : "text-zinc-300 hover:text-white"
        }
      >
        Analytics
      </Link>

      <Link
        href="/agency"
        className={
          pathname.startsWith("/agency")
            ? "text-white"
            : "text-zinc-300 hover:text-white"
        }
      >
        Agency
      </Link>

      <Link
        href="/music"
        className={
          pathname.startsWith("/music")
            ? "text-white"
            : "text-zinc-300 hover:text-white"
        }
      >
        Creative Archive
      </Link>

    </div>

  </div>

  <div className="flex items-center gap-5">

    <Search
      size={20}
      className="cursor-pointer hover:text-zinc-300"
    />

    <Bell
      size={20}
      className="cursor-pointer hover:text-zinc-300"
    />

    <Volume2
      size={20}
      className="cursor-pointer hover:text-zinc-300"
    />

    <div className="flex items-center gap-2 cursor-pointer">

      <Image
        src="/profiles/Emily cooper.png"
        alt="Profile"
        width={32}
        height={32}
        className="rounded-sm"
      />

      <ChevronDown size={14} />

    </div>

  </div>

</nav>
      {/* HERO */}

  <section className="relative h-[85vh] overflow-hidden">

   <video
  ref={videoRef}
  autoPlay
  muted
  loop
  playsInline
  className="
    absolute
    inset-0
    w-full
    h-full
    object-cover
  "
>
      <source
        src="/music/music.mp4"
        type="video/mp4"
      />
    </video>

    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />

    <div className="relative z-20 flex flex-col justify-center h-full px-12 max-w-3xl pt-20">

      <h1 className="text-8xl font-extrabold mb-6">
        CREATIVE ARCHIVE
      </h1>

      <p className="text-xl text-zinc-300 leading-relaxed mb-8">
        Journalism. Stories. Songs. Poetry.
        Videos. Ideas.
        A collection of creative work
        beyond marketing.
      </p>

      <div className="flex gap-4">

        <Link
          href="/music/featured-piece"
          className="bg-white text-black px-8 py-3 rounded font-semibold hover:bg-zinc-200 transition"
        >
          ▶ Featured Piece
        </Link>

        <Link
          href="/music/stories"
          className="bg-zinc-600/80 px-8 py-3 rounded font-semibold hover:bg-zinc-500 transition"
        >
          Explore Archive
        </Link>

      </div>

    </div>
<button
  onClick={toggleMute}
  className="
    absolute
    bottom-10
    right-10
    z-30

    w-14
    h-14

    rounded-full
    border
    border-white/40

    bg-black/50
    backdrop-blur-sm

    flex
    items-center
    justify-center

    hover:bg-black/70
    transition
  "
>
  {muted ? (
    <VolumeX size={24} />
  ) : (
    <Volume2 size={24} />
  )}
</button>
  </section>

  {/* ABOUT */}

  <section className="max-w-6xl mx-auto px-12 py-20">

    <h2 className="text-4xl font-bold mb-6">
      Why This Exists
    </h2>

    <p className="text-zinc-300 text-lg leading-relaxed max-w-4xl">
      Before marketing, there was writing.
      This archive contains journalism,
      stories, songs, poetry, videos,
      and creative projects that shaped
      how I think, communicate, and tell stories.
    </p>

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
