"use client";

import Link from "next/link";
import Image from "next/image";

export default function HermitHanaPage() {
  return (
    <main className="min-h-screen bg-[#141414] text-white">

      {/* HERO */}

      <section className="relative">

        <div className="max-w-7xl mx-auto px-12 py-24">

          <Link
            href="/music"
            className="text-zinc-400 hover:text-white transition"
          >
            ← Back to Creative Archive
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center mt-12">

            <div className="relative h-[750px] rounded-xl overflow-hidden">

              <Image
                src="/music/hermit-hana-cover.jpg"
                alt="Hermit Hana"
                fill
                className="object-cover"
              />

            </div>

            <div>

              <p className="uppercase tracking-[0.3em] text-zinc-500 mb-4">
                Book
              </p>

              <h1 className="text-7xl font-extrabold leading-none mb-6">
                THE ADVENTURES
                <br />
                WITH
                <br />
                HERMIT 
              </h1>

              <p className="text-2xl text-zinc-300 leading-relaxed mb-10">
                An illustrated book created for a person I loved.
              </p>

              <div className="flex gap-4 mb-12">

                <a
                  href="/music/hermit-hana.pdf"
                  target="_blank"
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
                  Read Book
                </a>

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
                  Explore More Writing
                </Link>

              </div>

              <div className="border-l-4 border-red-600 pl-6">

                <p className="italic text-zinc-300 text-lg leading-relaxed">
                  “Neither of us tried to impress one another,
                  yet both of us left a little bit of ourselves
                  onto each other that night.”
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section className="max-w-5xl mx-auto px-12 py-24">

        <h2 className="text-4xl font-bold mb-8">
          About This Project
        </h2>

        <p className="text-zinc-300 text-lg leading-relaxed mb-6">
          This book began as a gift.
        </p>

        <p className="text-zinc-300 text-lg leading-relaxed mb-6">
          At the time, someone I cared deeply about loved
          reading far more than I ever did. I was never a
          novelist, never someone who spent afternoons
          buried in books, but I understood design,
          storytelling, and the joy of creating something
          personal.
        </p>

        <p className="text-zinc-300 text-lg leading-relaxed">
          So I built a book.
        </p>

      </section>

      {/* REFLECTION */}

      <section className="max-w-5xl mx-auto px-12 pb-24">

        <h2 className="text-4xl font-bold mb-8">
          Reflection
        </h2>

        <p className="text-zinc-300 text-lg leading-relaxed mb-6">
          Looking back, this project taught me more about
          storytelling than any marketing campaign or
          writing course.
        </p>

        <p className="text-zinc-300 text-lg leading-relaxed mb-6">
          Creating something for one specific person forces
          a different kind of attention. Every detail matters
          because every detail has meaning.
        </p>

        <p className="text-zinc-300 text-lg leading-relaxed">
          The project blends writing, illustration, layout
          design, visual identity, narrative structure, and
          audience understanding. In many ways, it became
          an early exercise in the same principles I now use
          professionally: understanding a person deeply
          enough to create something that feels made
          specifically for them.
        </p>

      </section>
    </main>
  );
}
