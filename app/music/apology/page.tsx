"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ApologyPage() {
const router = useRouter();

return (
    <main className="bg-black text-white min-h-screen">
      {/* HERO */}

  <section className="relative h-[90vh] overflow-hidden">

    <Image
      src="/music/apology.jpg"
      alt="I Got Rejected For An Apology"
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
        I GOT REJECTED
        <br />
        FOR AN APOLOGY
      </h1>

      <p className="text-zinc-300 text-xl mb-8">
        Published on Substack · Maybe stupid - maybe not
      </p>

      <div className="flex gap-4">

        <Link
          href="https://attentiontenderly.substack.com/p/i-got-rejected-for-an-apology-so"
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
        Last week, I submitted what I believed was a strong, well-structured apology. It was timely, sincere, and even had a decent emotional arc.

It got rejected.

No feedback. No revision round. Just a polite “we regret to inform you.”

Naturally, I did what any rational person would do. I researched the apology industry.

Here’s what I found.

Gone are the days when “I’m sorry” was enough. The modern apology space is saturated. You are not just apologizing. You are competing.

Somewhere out there, someone is submitting a better apology than you.

Possibly with bullet points.

      </p>

    </div>

  </section>

  {/* ABOUT */}

  <section className="max-w-5xl mx-auto px-8 py-24">

    <div className="grid md:grid-cols-3 gap-12">

      <div className="md:col-span-2">

        <h2 className="text-5xl font-bold mb-8">
          About This Piece
        </h2>

        <p className="text-zinc-300 text-lg leading-relaxed">
          This piece began as a joke.

On the surface, it is an essay about having an apology rejected. Beneath that, it is an observation about something entirely different: the modern job market.

The language of hiring has become strangely emotional. Candidates are expected to demonstrate growth, self-awareness, resilience, cultural alignment, and professionalism, often within a few hundred words and a handful of interviews.

By replacing job applications with apologies, the essay exaggerates that experience just enough to expose its underlying absurdities.

It is a satire about rejection, expectations, and the increasingly performative nature of proving that you are the right person for something.

        </p>

      </div>

      <div>

        <h3 className="text-xl font-semibold mb-6">
          Themes
        </h3>

        <ul className="space-y-4 text-zinc-300">

          <li>Regret</li>
          <li>Accountability</li>
          <li>Growth</li>
          <li>Closure</li>
          <li>Relationships</li>
          <li>Memory</li>

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
    What interested me most while writing this piece was how familiar the structure felt.
    </p>

    <p className="text-zinc-300 text-lg leading-relaxed mb-6">
      Many modern systems ask people to package themselves into narratives. Whether applying for a job, seeking an opportunity, or trying to earn a second chance, there is often an expectation that growth can be measured, authenticity can be demonstrated, and character can be evaluated through a limited set of interactions.

The essay uses humour to explore that tension.

    </p>

    <p className="text-zinc-300 text-lg leading-relaxed">
     While it reads like a story about apologies, it is really a reflection on rejection, self-presentation, and the strange challenge of proving who you are to people who only see a small part of you.

Sometimes the satire works because it is only slightly exaggerated.

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
        href="https://attentiontenderly.substack.com/p/i-got-rejected-for-an-apology-so"
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
