"use client";

import Link from "next/link";
import Image from "next/image";
import { usePlayer } from "@/components/PlayerContext";

export default function IYKYKPage() {
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
              src="/music/iykyk-cover.jpg"
              alt="IYKYK"
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
              IYKYK
            </h1>

            <p className="text-zinc-400 text-xl mb-2">
              Sohon Roy
            </p>

            <p className="text-zinc-500 mb-8">
              Written & Performed by Sohon Roy
            </p>

            <p className="text-2xl text-zinc-300 leading-relaxed mb-10">
              A spoken-word reflection about
              almost-love, insecurity, and the
              uncomfortable realization that
              sometimes we don't want a person —
              we want the version of ourselves
              we imagine beside them.
            </p>

            <button
              onClick={() =>
                playTrack({
  title: "IYKYK",
  artist: "Sohon Roy",
  src: "/music/audio/iykyk.mp3",
  cover: "/music/iykyk-cover.jpg",
  lyricsUrl: "/music/iykyk/transcript",
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
                href="/music/iykyk/transcript"
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
          IYKYK began as a story about
          missing someone who was never
          technically yours.
        </p>

        <p className="text-zinc-300 text-lg leading-relaxed mb-6">
          But beneath that story sits a deeper
          question: how much of attraction is
          really about the other person, and
          how much is about who we become
          around them?
        </p>

        <p className="text-zinc-300 text-lg leading-relaxed">
          The piece follows that evolution —
          from longing, to insecurity,
          to self-awareness.
        </p>

      </section>

      {/* EXCERPT */}

      <section className="max-w-5xl mx-auto px-12 pb-20">

        <h2 className="text-4xl font-bold mb-8">
          Excerpt
        </h2>

        <div className="bg-zinc-900 rounded-xl p-10 border border-zinc-800">

          <p className="text-zinc-300 text-xl leading-relaxed italic">
            We never even dated,
          </p>

          <p className="text-zinc-300 text-xl leading-relaxed italic">
            so this might be wrong of me to say,
          </p>

          <br />

          <p className="text-zinc-300 text-xl leading-relaxed italic">
            but your favorite song
          </p>

          <p className="text-zinc-300 text-xl leading-relaxed italic">
            came on Spotify,
          </p>

          <p className="text-zinc-300 text-xl leading-relaxed italic">
            and I missed you.
          </p>

        </div>

      </section>

      {/* REFLECTION */}

      <section className="max-w-5xl mx-auto px-12 pb-32">

        <h2 className="text-4xl font-bold mb-8">
          Reflection
        </h2>

        <p className="text-zinc-300 text-lg leading-relaxed mb-6">
          Looking back, the most important line
          in the piece isn't about her.
        </p>

        <p className="text-zinc-300 text-lg leading-relaxed mb-6">
          It's the realization that
          "the most anticipated version of me"
          had everything to do with another
          person and almost nothing to do
          with myself.
        </p>

        <p className="text-zinc-300 text-lg leading-relaxed">
          IYKYK isn't really about heartbreak.
          It's about growing out of the belief
          that being chosen by someone else
          is what finally makes you enough.
        </p>

      </section>

    </main>
  );
}
