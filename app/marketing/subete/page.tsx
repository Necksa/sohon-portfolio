"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SubetePage() {
  const router = useRouter();

  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}

      <section className="relative h-[85vh] overflow-hidden">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/marketing/subete.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        <div className="relative z-20 flex flex-col justify-center h-full px-16 max-w-3xl">

          <button
  onClick={() => router.back()}
  className="text-zinc-300 mb-8 hover:text-white"
>
  ← Back
</button>

          <h1 className="text-8xl font-extrabold mb-6">
            SUBETE
          </h1>

          <p className="text-xl text-zinc-300 leading-relaxed">
            A complete anime ecosystem combining streaming,
            manga, merchandise, events,
            and community building into a single platform.
          </p>

        </div>

      </section>

      {/* PROJECT OVERVIEW */}

      <section className="max-w-6xl mx-auto px-8 py-24">

        <div className="grid md:grid-cols-3 gap-12">

          <div className="md:col-span-2">

            <h2 className="text-5xl font-bold mb-8">
              About The Project
            </h2>

            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Subete was created as a concept platform for anime fans
              who wanted more than just streaming.
              The goal was to combine content consumption,
              community interaction,
              merchandise,
              events,
              and fan culture into a single ecosystem.
            </p>

            <p className="text-zinc-300 text-lg leading-relaxed">
              My role focused heavily on brand strategy,
              audience research,
              competitor analysis,
              website planning,
              SEO strategy,
              content planning,
              and platform positioning.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Skills Used
            </h3>

            <ul className="space-y-4 text-zinc-300">

              <li>Brand Strategy</li>
              <li>Audience Research</li>
              <li>Competitor Analysis</li>
              <li>Buyer Persona Development</li>
              <li>Website Planning</li>
              <li>SEO Strategy</li>
              <li>Content Strategy</li>
              <li>KPI Planning</li>

            </ul>

          </div>

        </div>

      </section>

      {/* MY CONTRIBUTIONS */}

      <section className="max-w-6xl mx-auto px-8 pb-24">

        <h2 className="text-5xl font-bold mb-12">
          My Contributions
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {[
            "Created complete brand strategy",
            "Developed target audience profiles",
            "Built detailed buyer personas",
            "Conducted competitor analysis",
            "Planned website architecture",
            "Developed SEO framework",
            "Created KPI tracking strategy",
            "Produced content recommendations",
          ].map((item) => (
            <div
              key={item}
              className="
group
relative
overflow-hidden
bg-zinc-900
rounded-xl
p-6
border
border-zinc-800

transition-all
duration-500

hover:-translate-y-3
hover:scale-[1.03]
hover:border-red-500/40
hover:shadow-[0_0_40px_rgba(229,9,20,0.25)]
"
            >
              ✓ {item}
            </div>
          ))}

        </div>

      </section>

      {/* PROJECT SHOWCASE */}

      <section className="max-w-6xl mx-auto px-8 pb-24">

        <h2 className="text-5xl font-bold mb-12">
          Project Showcase
        </h2>

        <div className="space-y-20">

          <div>

            <Image
              src="/marketing/subete-brand.jpg"
              alt="Brand Guidelines"
              width={1400}
              height={800}
              className="rounded-xl"
            />

            <h3 className="text-3xl font-bold mt-6 mb-4">
              Brand Guidelines
            </h3>

            <p className="text-zinc-300">
              Created the visual identity,
              mission,
              vision,
              positioning,
              tone of voice,
              and overall brand direction.
            </p>

          </div>

          <div>

            <Image
              src="/marketing/subete-persona.jpg"
              alt="Buyer Persona"
              width={1400}
              height={800}
              className="rounded-xl"
            />

            <h3 className="text-3xl font-bold mt-6 mb-4">
              Buyer Persona
            </h3>

            <p className="text-zinc-300">
              Developed detailed user personas
              to better understand anime fans,
              behaviours,
              motivations,
              and engagement patterns.
            </p>

          </div>

          <div>

            <Image
              src="/marketing/subete-competitors.jpg"
              alt="Competitor Analysis"
              width={1400}
              height={800}
              className="rounded-xl"
            />

            <h3 className="text-3xl font-bold mt-6 mb-4">
              Competitor Analysis
            </h3>

            <p className="text-zinc-300">
              Analyzed Crunchyroll,
              Netflix,
              Funimation,
              AniList,
              and MyAnimeList to identify
              differentiation opportunities.
            </p>

          </div>

          <div>

            <Image
              src="/marketing/subete-seo.jpg"
              alt="SEO Strategy"
              width={1400}
              height={800}
              className="rounded-xl"
            />

            <h3 className="text-3xl font-bold mt-6 mb-4">
              Website & SEO Planning
            </h3>

            <p className="text-zinc-300">
              Planned website goals,
              KPI frameworks,
              keyword targeting,
              SEO recommendations,
              and content strategy.
            </p>

          </div>

        </div>

      </section>

      {/* RESULTS */}

      <section className="max-w-6xl mx-auto px-8 pb-32">

        <h2 className="text-5xl font-bold mb-12">
          Project Deliverables
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-zinc-900 rounded-xl p-8">
            <h3 className="text-5xl font-bold">49</h3>
            <p className="text-zinc-400 mt-2">
              Page Strategy Deck
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            <h3 className="text-5xl font-bold">5+</h3>
            <p className="text-zinc-400 mt-2">
              Competitors Analyzed
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            <h3 className="text-5xl font-bold">SEO</h3>
            <p className="text-zinc-400 mt-2">
              Website Framework
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            <h3 className="text-5xl font-bold">UX</h3>
            <p className="text-zinc-400 mt-2">
              Platform Planning
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}