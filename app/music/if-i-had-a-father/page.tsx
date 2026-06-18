"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function FatherAIPage() {
const router = useRouter();

return (
    <main className="bg-black text-white min-h-screen">
      {/* HERO */}

  <section className="relative h-[90vh] overflow-hidden">

    <Image
      src="/music/father-ai.jpg"
      alt="If I Had A Father, I Might Not Need AI"
      fill
      className="object-cover"
      priority
    />

    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

    <div className="relative z-20 flex flex-col justify-center h-full px-16 max-w-4xl">

      <button
        onClick={() => router.back()}
        className="text-zinc-300 mb-8 hover:text-white text-left"
      >
        ← Back
      </button>

      <h1 className="text-7xl md:text-8xl font-extrabold mb-6 leading-none">
        IF I HAD A FATHER,
        <br />
        I MIGHT NOT NEED AI
      </h1>

      <p className="text-zinc-300 text-xl mb-8">
       Published on Substack · Personal Essay
      </p>

      <div className="flex gap-4">

        <Link
          href="https://attentiontenderly.substack.com/p/if-i-had-a-father-i-might-not-need?r=7l2ffk"
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
          ▶ Read Article
        </Link>

      </div>

    </div>

  </section>

  
  {/* EXCERPT */}

  <section className="max-w-4xl mx-auto px-8 pb-24">

    <h2 className="text-5xl font-bold mb-10">
      Excerpt
    </h2>

    <div
      className="
        bg-zinc-900
        border
        border-zinc-800
        rounded-2xl
        p-10
      "
    >

      <p className="text-zinc-300 text-xl leading-relaxed italic">
        There are questions I ask a machine that I would not have asked if I had a father.

Not a biological fact. A presence.

The kind who stands behind you in a bathroom mirror and says, not unkindly, “No, like this,” and adjusts your wrist before the blade touches your skin. The kind who sits in the passenger seat the first time you drive and keeps one hand near the dashboard as if he could stop the car by instinct alone. The kind who tells you to slow down without making you feel small.

I did not have that version.

I had someone present but unreachable. A man who occupied rooms the way a closed door does. Solid. Definite. Rarely opened.

      </p>

    </div>

  </section>
  {/* ABOUT */}

  <section className="max-w-5xl mx-auto px-8 py-24">

    <div className="grid md:grid-cols-3 gap-12">

      <div className="md:col-span-2">

        <h2 className="text-5xl font-bold mb-8">
          Why This Piece Matters
        </h2>

        <p className="text-zinc-300 text-lg leading-relaxed mb-6">
          This is one of the most personal pieces I have ever written.
        </p>

        <p className="text-zinc-300 text-lg leading-relaxed mb-6">
          It explores loneliness, identity, technology,
          and the strange ways people search for comfort,
          guidance, and understanding.
        </p>

        <p className="text-zinc-300 text-lg leading-relaxed">
          More than anything, it asks a simple question:
          what are people really looking for when they
          turn to artificial intelligence?
        </p>

      </div>

      <div>

        <h3 className="text-xl font-semibold mb-6">
          Themes
        </h3>

        <ul className="space-y-4 text-zinc-300">

          <li>Technology</li>
          <li>Human Connection</li>
          <li>Loneliness</li>
          <li>Identity</li>
          <li>Belonging</li>
          <li>Modern Culture</li>

        </ul>

      </div>

    </div>

  </section>
  {/* REFLECTION */}

  <section className="max-w-5xl mx-auto px-8 pb-24">

    <h2 className="text-5xl font-bold mb-10">
      Reflection
    </h2>

    <p className="text-zinc-300 text-lg leading-relaxed mb-6">
      Looking back, this piece represents the type
      of writing I enjoy most:
      personal, reflective, and emotionally honest.
    </p>

    <p className="text-zinc-300 text-lg leading-relaxed">
      While much of my professional work revolves around
      marketing, strategy, and analytics, writing like this
      remains at the center of how I understand people,
      stories, and communication.
    </p>

  </section>

  {/* CTA */}

  <section className="max-w-5xl mx-auto px-8 pb-32">

    <div
      className="
        bg-zinc-900
        rounded-2xl
        p-12
        text-center
      "
    >

      <h2 className="text-4xl font-bold mb-6">
        Read The Full Article
      </h2>

      <p className="text-zinc-300 mb-8">
        Originally published on Substack.
      </p>

      <Link
        href="https://attentiontenderly.substack.com/p/if-i-had-a-father-i-might-not-need?r=7l2ffk"
        target="_blank"
        className="
          inline-block
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
        Open on Substack →
      </Link>

    </div>

  </section>

    </main>
  );
}
