"use client";

import Link from "next/link";
import Image from "next/image";
import { usePlayer } from "@/components/PlayerContext";

export default function INeedSleepPage() {
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

          {/* COVER */}

          <div>

            <Image
              src="/music/i-need-sleep-cover.jpg"
              alt="I Need Sleep"
              width={700}
              height={700}
              priority
              className="rounded-2xl shadow-2xl"
            />

          </div>

          {/* INFO */}

          <div>

            <p className="uppercase tracking-[0.4em] text-zinc-500 mb-6">
              Recitation
            </p>

            <h1 className="text-8xl font-extrabold leading-none mb-6">
              I NEED
              <br />
              SLEEP
            </h1>

            <p className="text-zinc-400 text-xl mb-2">
              Sohon Roy
            </p>

            <p className="text-zinc-500 mb-8">
              Written & Performed by Sohon Roy
            </p>

            <p className="text-2xl text-zinc-300 leading-relaxed mb-10">
              A spoken-word piece about the terrifying
              tenderness of becoming interested in someone.
              Not love. Not yet. Just the moment another
              person's existence begins taking up space
              inside your own thoughts.
            </p>

            <button
              onClick={() =>
                playTrack({
  title: "I Need Sleep",
  artist: "Sohon Roy",
  src: "/music/audio/i-need-sleep.mp3",
  cover: "/music/i-need-sleep-cover.jpg",
  lyricsUrl: "/music/i-need-sleep/transcript",
})
              }
              className="
                bg-white
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
              ▶ Play Recitation
            </button>

            <div className="flex gap-4">

              <Link
                href="/music/i-need-sleep/transcript"
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
                Read Transcript
              </Link>

              <Link
                href="/music"
                className="
                  bg-zinc-800
                  px-8
                  py-3
                  rounded
                  font-semibold
                  hover:bg-zinc-700
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
          This piece explores a feeling that exists before
          romance has a name.
        </p>

        <p className="text-zinc-300 text-lg leading-relaxed mb-6">
          The stage where curiosity becomes attachment.
          Where ordinary details begin to feel important
          simply because they belong to someone else.
        </p>

        <p className="text-zinc-300 text-lg leading-relaxed">
          It's about becoming invested in a person before
          you've earned the right to say that you are.
        </p>

      </section>

      {/* PREVIEW */}

      <section className="max-w-5xl mx-auto px-12 pb-20">

        <h2 className="text-4xl font-bold mb-8">
          Excerpt
        </h2>

        <div className="bg-zinc-900 rounded-xl p-10 border border-zinc-800">

          <p className="text-zinc-300 text-xl leading-relaxed italic">
            I know we've only just met,
          </p>

          <p className="text-zinc-300 text-xl leading-relaxed italic">
            and I don't mean to move too fast,
          </p>

          <br />

          <p className="text-zinc-300 text-xl leading-relaxed italic">
            but I couldn't sleep last night
          </p>

          <p className="text-zinc-300 text-xl leading-relaxed italic">
            because I don't know your middle name,
          </p>

          <p className="text-zinc-300 text-xl leading-relaxed italic">
            or how you take your coffee.
          </p>

        </div>

      </section>

      {/* REFLECTION */}

      <section className="max-w-5xl mx-auto px-12 pb-32">

        <h2 className="text-4xl font-bold mb-8">
          Reflection
        </h2>

        <p className="text-zinc-300 text-lg leading-relaxed mb-6">
          I've always found it fascinating how affection
          often begins with curiosity.
        </p>

        <p className="text-zinc-300 text-lg leading-relaxed mb-6">
          Before love. Before commitment. Before certainty.
          There is simply an urge to know.
        </p>

        <p className="text-zinc-300 text-lg leading-relaxed">
          The piece was written around a simple idea:
          sometimes the first sign that someone matters
          is not that you miss them, but that you suddenly
          care about things that never mattered before.
        </p>

      </section>

    </main>
  );
}
