"use client";

import Link from "next/link";
import Image from "next/image";

export default function TheThingsFateRefusesToForgetPage() {
  return (
    <main className="min-h-screen bg-[#141414] text-white">

      {/* HERO */}

      <section className="relative h-[80vh] overflow-hidden">

        <Image
          src="/music/the-things-fate-refuses-to-forget.jpg"
          alt="The Things Fate Refuses To Forget"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />

        <div className="relative z-20 flex flex-col justify-center h-full px-12 max-w-3xl">
          

          <Link
            href="/music"
            className="text-zinc-400 hover:text-white mb-8 transition"
          >
            ← Back to Creative Archive
          </Link>

          <p className="uppercase tracking-[0.3em] text-zinc-500 mb-4">
            Short Story
          </p>

          <h1 className="text-7xl font-extrabold leading-none mb-6">
            THE THINGS FATE REFUSES TO FORGET
          </h1>

          <p className="text-xl text-zinc-300 max-w-xl">
            A story about fate, grief,
            and the unbearable weight
            of knowing what cannot be changed.
          </p>
          <div className="flex gap-4 mt-8">

  <Link
    href="/music/the-things-fate-refuses-to-forget/read"
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
    Read Story
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
          A short story about fate, grief, and the
          unbearable weight of knowing.
        </p>

        <p className="text-zinc-300 text-lg leading-relaxed mb-6">
          The story follows Dillian, a man cursed
          with visions of the future, as he watches
          the woman he loves move steadily toward
          an ending he cannot prevent.
        </p>

        <p className="text-zinc-300 text-lg leading-relaxed">
          Every attempt to change destiny bends
          back toward the same conclusion,
          forcing him to confront a painful question:
          if you knew how a story ended,
          would you love any less fiercely while it lasted?
        </p>

      </section>

      {/* EXCERPT */}

      <section className="max-w-5xl mx-auto px-12 pb-24">

        <h2 className="text-4xl font-bold mb-8">
          Excerpt
        </h2>

        <div className="bg-zinc-900 rounded-xl p-10 border border-zinc-800">

          <p className="text-zinc-300 text-xl leading-relaxed italic">
            The visions had arrived as whispers in the dark,
            vivid enough to feel like memories.
          </p>

          <br />

          <p className="text-zinc-300 text-xl leading-relaxed italic">
            Then they began to happen.
          </p>

          <br />

          <p className="text-zinc-300 text-xl leading-relaxed italic">
            A book she would reach for before she ever saw it.
          </p>

          <p className="text-zinc-300 text-xl leading-relaxed italic">
            A sentence she would speak before it touched her lips.
          </p>

          <p className="text-zinc-300 text-xl leading-relaxed italic">
            The first moment their eyes met across a crowded room.
          </p>

          <br />

          <p className="text-zinc-300 text-xl leading-relaxed italic">
            Every detail unfolded exactly as he had seen it.
          </p>

          <br />

          <p className="text-zinc-300 text-xl leading-relaxed italic">
            And with every prophecy fulfilled,
            one truth grew sharper.
          </p>

          <br />

          <p className="text-zinc-300 text-xl leading-relaxed italic">
            Senua's life was running out.
          </p>

        </div>

      </section>

      {/* REFLECTION */}

      <section className="max-w-5xl mx-auto px-12 pb-32">

        <h2 className="text-4xl font-bold mb-8">
          Reflection
        </h2>

        <p className="text-zinc-300 text-lg leading-relaxed mb-6">
          I've always been fascinated by stories
          where the conflict is not defeating an enemy,
          but accepting reality.
        </p>

        <p className="text-zinc-300 text-lg leading-relaxed mb-6">
          Dillian's struggle is not against fate itself.
          It is against the hope that effort alone can
          save the things we love.
        </p>

        <p className="text-zinc-300 text-lg leading-relaxed">
          For me, the story became less about prophecy
          and more about acceptance. Some endings
          cannot be rewritten. The only choice left
          is how deeply we choose to love before they arrive.
        </p>

      </section>

    </main>
  );
}