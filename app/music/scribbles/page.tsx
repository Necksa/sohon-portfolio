"use client";

import Link from "next/link";
import Image from "next/image";

export default function ScribblesPage() {
  return (
    <main className="min-h-screen bg-[#141414] text-white">

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
              src="/music/scribbles-cover.jpg"
              alt="Scribbles"
              width={700}
              height={900}
              priority
              className="rounded-xl shadow-2xl"
            />
          </div>

          {/* INFO */}

          <div>

            <p className="uppercase tracking-[0.4em] text-zinc-500 mb-6">
              Collection
            </p>

            <h1 className="text-7xl font-extrabold leading-none mb-8">
              SCRIBBLES
            </h1>

            <p className="text-2xl text-zinc-300 mb-10 leading-relaxed">
              A collection of fragments,
              confessions, observations,
              and unfinished thoughts
              written across several years.
            </p>

            <div className="flex gap-4 mb-12">

              <Link
                href="/music/Scribbles.pdf"
                target="_blank"
                className="
                  bg-white
                  text-black
                  px-8
                  py-4
                  rounded
                  font-semibold
                  hover:bg-zinc-200
                  transition
                "
              >
                Read Collection
              </Link>

              <Link
                href="/music"
                className="
                  bg-zinc-700
                  px-8
                  py-4
                  rounded
                  font-semibold
                  hover:bg-zinc-600
                  transition
                "
              >
                Explore More Writing
              </Link>

            </div>

            <blockquote className="border-l-4 border-red-600 pl-6 italic text-xl text-zinc-300">
              "Take the universe apart and give them the stars."
            </blockquote>

          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section className="max-w-5xl mx-auto px-12 py-20">

        <h2 className="text-4xl font-bold mb-8">
          About
        </h2>

        <p className="text-zinc-300 text-lg leading-relaxed mb-6">
          Scribbles began accidentally.
          Most of these pieces were never
          intended to become a book.
        </p>

        <p className="text-zinc-300 text-lg leading-relaxed mb-6">
          They started as notes, captions,
          fragments, unfinished thoughts,
          and moments I wanted to remember
          before they disappeared.
        </p>

        <p className="text-zinc-300 text-lg leading-relaxed">
          Over time, they became a record of
          how I thought about love, grief,
          memory, longing, connection,
          and the strange ways people leave
          fingerprints on each other.
        </p>

      </section>

      {/* THEMES */}

      <section className="max-w-5xl mx-auto px-12 pb-20">

        <h2 className="text-4xl font-bold mb-8">
          Themes
        </h2>

        <div className="grid md:grid-cols-4 gap-4">

          <div className="bg-zinc-900 p-6 rounded-xl text-center">
            Love
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl text-center">
            Longing
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl text-center">
            Memory
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl text-center">
            Connection
          </div>

        </div>

      </section>

      {/* INSIDE THE COLLECTION */}

      <section className="max-w-5xl mx-auto px-12 pb-20">

        <h2 className="text-4xl font-bold mb-8">
          Inside The Collection
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <div className="bg-zinc-900 rounded-xl p-6">
            Closure Is A Myth
          </div>

          <div className="bg-zinc-900 rounded-xl p-6">
            Potential Love
          </div>

          <div className="bg-zinc-900 rounded-xl p-6">
            Designed To Love
          </div>

          <div className="bg-zinc-900 rounded-xl p-6">
            The Dream
          </div>

          <div className="bg-zinc-900 rounded-xl p-6">
            Libraries
          </div>

          <div className="bg-zinc-900 rounded-xl p-6">
            Constellations
          </div>

          <div className="bg-zinc-900 rounded-xl p-6">
            Home
          </div>

          <div className="bg-zinc-900 rounded-xl p-6">
            Take The Universe Apart
          </div>

        </div>

      </section>

      {/* REFLECTION */}

      <section className="max-w-5xl mx-auto px-12 pb-32">

        <h2 className="text-4xl font-bold mb-8">
          Reflection
        </h2>

        <p className="text-zinc-300 text-lg leading-relaxed mb-6">
          Looking through these pieces now
          feels less like reading old writing
          and more like meeting older versions
          of myself.
        </p>

        <p className="text-zinc-300 text-lg leading-relaxed mb-6">
          Some of these fragments were written
          years apart, yet they often circle
          the same ideas:
          love, absence, memory,
          and the people who stay with us
          long after they leave.
        </p>

        <p className="text-zinc-300 text-lg leading-relaxed">
          None of them were written with
          publication in mind.
          They simply appeared when they
          needed to, and this collection is
          an attempt to preserve them before
          they disappear.
        </p>

      </section>

    </main>
  );
}