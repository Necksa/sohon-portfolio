"use client";

import Link from "next/link";
import Image from "next/image";

export default function BalletPage() {
  return (
    <main className="min-h-screen bg-[#141414] text-white">

      {/* HERO */}

      <section className="relative h-[80vh] overflow-hidden">

        <Image
          src="/music/ballet-hero.jpg"
          alt="Ballet of a Brief Beginning"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />

        <div className="relative z-20 flex flex-col justify-center h-full px-12 max-w-4xl">

          <Link
            href="/music"
            className="text-zinc-400 hover:text-white mb-8 transition"
          >
            ← Back to Creative Archive
          </Link>

          <p className="uppercase tracking-[0.3em] text-zinc-500 mb-4">
            Narrative Poem
          </p>

          <h1 className="text-7xl font-extrabold leading-none mb-6">
            BALLET OF A
            <br />
            BRIEF BEGINNING
          </h1>

          <p className="text-xl text-zinc-300 max-w-2xl">
            A poem about modern love,
            possibility, and the quiet grief
            of stories that end before they begin.
          </p>

          <div className="flex gap-4 mt-8">

            <Link
              href="/music/ballet-of-a-brief-beginning/read"
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
              Read Poem
            </Link>

            <Link
              href="/music"
              className="
                bg-zinc-700/80
                px-8
                py-3
                rounded
                font-semibold
                hover:bg-zinc-600
                transition
              "
            >
              Explore More Writing
            </Link>

          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section className="max-w-5xl mx-auto px-12 py-24">

        <h2 className="text-4xl font-bold mb-8">
          About This Piece
        </h2>

        <p className="text-zinc-300 text-lg leading-relaxed mb-6">
          Written after a brief connection that never had
          the chance to become what it might have been,
          Ballet of a Brief Beginning explores the strange
          mathematics of modern affection.
        </p>

        <p className="text-zinc-300 text-lg leading-relaxed mb-6">
          Set against the backdrop of dating apps,
          messages, and digital introductions,
          the poem examines how quickly a stranger
          can become important.
        </p>

        <p className="text-zinc-300 text-lg leading-relaxed">
          At its heart, the piece is less about
          rejection and more about possibility.
          About what happens when someone briefly
          makes you believe in something again.
        </p>

      </section>

      {/* EXCERPT */}

      <section className="max-w-5xl mx-auto px-12 pb-24">

        <h2 className="text-4xl font-bold mb-8">
          Excerpt
        </h2>

        <div className="bg-zinc-900 rounded-xl p-10 border border-zinc-800">

          <p className="text-zinc-300 text-xl leading-relaxed italic">
            There was no orchestra above,
          </p>

          <p className="text-zinc-300 text-xl leading-relaxed italic">
            No thunderbolt announcing love.
          </p>

          <p className="text-zinc-300 text-xl leading-relaxed italic">
            Just little things that gathered weight,
          </p>

          <p className="text-zinc-300 text-xl leading-relaxed italic">
            Like snowfall building at a gate.
          </p>

          <br />

          <p className="text-zinc-300 text-xl leading-relaxed italic">
            A question asked before goodnight.
          </p>

          <p className="text-zinc-300 text-xl leading-relaxed italic">
            A message sent at morning light.
          </p>

          <p className="text-zinc-300 text-xl leading-relaxed italic">
            The way she lingered in my mind
          </p>

          <p className="text-zinc-300 text-xl leading-relaxed italic">
            Long after I had closed the blinds.
          </p>

        </div>

      </section>

      {/* REFLECTION */}

      <section className="max-w-5xl mx-auto px-12 pb-32">

        <h2 className="text-4xl font-bold mb-8">
          Reflection
        </h2>

        <p className="text-zinc-300 text-lg leading-relaxed mb-6">
          What interested me while writing this poem
          was the difference between losing a person
          and losing a possibility.
        </p>

        <p className="text-zinc-300 text-lg leading-relaxed mb-6">
          Some relationships end after years.
          Others never begin at all.
          Yet both can leave behind a similar grief.
        </p>

        <p className="text-zinc-300 text-lg leading-relaxed">
          Sometimes we mourn not what existed,
          but what might have existed.
          This poem became an attempt to capture
          that feeling.
        </p>

      </section>

    </main>
  );
}