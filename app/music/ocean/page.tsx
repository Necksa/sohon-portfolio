"use client";

import Link from "next/link";
import Image from "next/image";
import { usePlayer } from "@/components/PlayerContext";

export default function OceanPage() {

  const { playTrack } = usePlayer();
  return (
    <main className="min-h-screen bg-[#141414] text-white">

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-12 py-20">

        <Link
          href="/music"
          className="text-zinc-400 hover:text-white transition"
        >
          ← Back to Creative Archive
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-12">

          {/* ALBUM ART */}

          <div>

            <Image
              src="/music/ocean-cover.jpg"
              alt="Ocean"
              width={700}
              height={700}
              priority
              className="
                rounded-2xl
                shadow-2xl
              "
            />

          </div>

          {/* SONG INFO */}

          <div>

            <p className="uppercase tracking-[0.4em] text-zinc-500 mb-6">
              Song
            </p>

            <h1 className="text-8xl font-extrabold leading-none mb-6">
              OCEAN
            </h1>

            <p className="text-zinc-400 text-xl mb-2">
              Ghost Lyricist
            </p>

            <p className="text-zinc-500 mb-8">
              Performed by Sohon Roy
            </p>

            <p className="text-2xl text-zinc-300 leading-relaxed mb-10">
              A song about finding shelter
              inside another person.
            </p>

            {/* PLAYER */}

            <button
  onClick={() =>
    playTrack({
      title: "Ocean",
  artist: "Sohon Roy",
  src: "/music/audio/ocean.mp3",
  cover: "/music/ocean-cover.jpg",
  lyricsUrl: "/music/ocean/lyrics",
    })
  }
  className="
    bg-green-500
    text-black
    px-8
    py-4
    rounded-full
    font-bold
    hover:scale-105
    transition
    mb-8
  "
>
  ▶ Play Song
</button>

            <div className="flex gap-4">

              <Link
                href="/music/ocean/lyrics"
                className="
                  bg-white
                  text-black
                  px-8
                  py-3
                  rounded
                  font-semibold
                  hover:bg-zinc-200
                  transition
                "
              >
                Read Lyrics
              </Link>

              <Link
                href="/music"
                className="
                  bg-zinc-700
                  px-8
                  py-3
                  rounded
                  font-semibold
                  hover:bg-zinc-600
                  transition
                "
              >
                More Music
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section className="max-w-5xl mx-auto px-12 py-20">

        <h2 className="text-4xl font-bold mb-8">
          About
        </h2>

        <p className="text-zinc-300 text-lg leading-relaxed mb-6">
          Ocean is a song about finding
          peace inside another person.
        </p>

        <p className="text-zinc-300 text-lg leading-relaxed mb-6">
          It uses imagery of oceans,
          storms, sailors, and voyages
          to explore love as both a journey
          and a refuge.
        </p>

        <p className="text-zinc-300 text-lg leading-relaxed">
          As the song progresses,
          the scale narrows from endless
          seas to small domestic moments:
          houses, blankets, painted walls,
          and shared memories.
        </p>

      </section>

      {/* LYRICS PREVIEW */}

      <section className="max-w-5xl mx-auto px-12 pb-20">

        <h2 className="text-4xl font-bold mb-8">
          Lyrics Preview
        </h2>

        <div className="bg-zinc-900 rounded-xl p-10 border border-zinc-800">

          <p className="text-zinc-300 text-xl leading-relaxed italic">
            Your life is the ocean
          </p>

          <p className="text-zinc-300 text-xl leading-relaxed italic">
            And your heart is a wave
          </p>

          <p className="text-zinc-300 text-xl leading-relaxed italic">
            Like a dog in the sun
          </p>

          <p className="text-zinc-300 text-xl leading-relaxed italic">
            I found my peace in your storm
          </p>

          <br />

          <p className="text-zinc-300 text-xl leading-relaxed italic">
            As I sail for days
          </p>

          <p className="text-zinc-300 text-xl leading-relaxed italic">
            I keep drowning away
          </p>

          <p className="text-zinc-300 text-xl leading-relaxed italic">
            Would my sailors forgive me
          </p>

          <p className="text-zinc-300 text-xl leading-relaxed italic">
            For feeling this way?
          </p>

        </div>

        <Link
          href="/music/ocean/lyrics"
          className="
            inline-block
            mt-8
            text-white
            font-semibold
            hover:text-zinc-300
          "
        >
          View Full Lyrics →
        </Link>

      </section>

      {/* REFLECTION */}

      <section className="max-w-5xl mx-auto px-12 pb-32">

        <h2 className="text-4xl font-bold mb-8">
          Reflection
        </h2>

        <p className="text-zinc-300 text-lg leading-relaxed mb-6">
          What I love most about Ocean
          is the contrast between scale
          and intimacy.
        </p>

        <p className="text-zinc-300 text-lg leading-relaxed mb-6">
          The song begins with oceans,
          storms, sailors, and gods.
          Yet by the end, it becomes
          about houses, blankets,
          memories, and home.
        </p>

        <p className="text-zinc-300 text-lg leading-relaxed">
          For me, the song is less about
          romance and more about belonging.
          About finding someone who feels
          like a safe place to return to.
        </p>

      </section>

    </main>
  );
}