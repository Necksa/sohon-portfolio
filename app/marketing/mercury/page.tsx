"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  MapPin,
  Camera,
  Users,
  BarChart3,
  Sparkles,
} from "lucide-react";

export default function MercuryCaseStudy() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#141414] text-white">

      {/* HERO */}

      <section className="relative h-[80vh] overflow-hidden">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Marketing/mercury.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/40" />

        <div className="relative z-10 h-full flex flex-col justify-end px-16 pb-20">

          <button
  onClick={() => router.back()}
  className="mb-8 flex items-center gap-2 text-zinc-300 hover:text-white"
>
  <ArrowLeft size={18} />
  Back to Portfolio
</button>

          <h1 className="text-7xl font-black mb-6">
            MERCURY
            <br />
            BAR & LOUNGE
          </h1>

          <p className="max-w-2xl text-xl text-zinc-300 leading-relaxed mb-8">
            Building awareness, engagement, and a premium nightlife
            identity for one of Kingston's newest hospitality brands.
          </p>

          <div className="flex gap-4">
          </div>
        </div>
      </section>

      {/* STATS */}

      <section className="max-w-6xl mx-auto px-8 py-16">

  <h2 className="text-5xl font-bold mb-10">
    What I Worked On
  </h2>

  <div className="space-y-6 text-xl text-zinc-300">

    <div className="flex gap-4">
      <span className="text-red-500">●</span>
      <p>
        Developed and executed a social media strategy focused on nightlife,
        events, and local community engagement.
      </p>
    </div>

    <div className="flex gap-4">
      <span className="text-red-500">●</span>
      <p>
        Created promotional content for weekly events, themed nights,
        and special campaigns.
      </p>
    </div>

    <div className="flex gap-4">
      <span className="text-red-500">●</span>
      <p>
        Directed creative concepts and visual storytelling to maintain
        a premium nightlife brand image.
      </p>
    </div>

    <div className="flex gap-4">
      <span className="text-red-500">●</span>
      <p>
        Managed community engagement and audience interaction across
        social platforms.
      </p>
    </div>

    <div className="flex gap-4">
      <span className="text-red-500">●</span>
      <p>
        Analyzed content performance and optimized future campaigns
        using engagement insights.
      </p>
    </div>

  </div>

</section>

      {/* CHALLENGE */}

      <section className="px-16 py-16 max-w-6xl">

        <h2 className="text-5xl font-bold mb-8">
          The Challenge
        </h2>

        <p className="text-zinc-300 text-lg leading-relaxed">
          Mercury entered a highly competitive hospitality market where
          restaurants, bars, and lounges were already competing for the
          attention of students, professionals, and visitors.
        </p>

        <p className="text-zinc-300 text-lg leading-relaxed mt-6">
          The goal was not simply to promote food. The objective was to
          establish Mercury as a destination. A place people would think
          of for date nights, celebrations, cocktails, and memorable
          social experiences.
        </p>

      </section>

      {/* ROLE */}

      <section className="px-16 py-16 bg-[#181818]">

        <h2 className="text-5xl font-bold mb-10">
          My Role
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 p-8 rounded-lg">
            <Camera size={28} className="mb-4" />
            <h3 className="font-bold mb-2">
              Content Strategy
            </h3>
            <p className="text-zinc-400">
              Planned content themes, posting strategy, and audience-focused messaging.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-lg">
            <Users size={28} className="mb-4" />
            <h3 className="font-bold mb-2">
              Audience Research
            </h3>
            <p className="text-zinc-400">
              Identified audience motivations and engagement opportunities.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-lg">
            <BarChart3 size={28} className="mb-4" />
            <h3 className="font-bold mb-2">
              Campaign Planning
            </h3>
            <p className="text-zinc-400">
              Developed strategies to improve awareness and community engagement.
            </p>
          </div>

        </div>

      </section>

      {/* RESEARCH */}

      <section className="px-16 py-16">

        <h2 className="text-5xl font-bold mb-10">
          Research Process
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-zinc-900 p-8 rounded-lg">

            <h3 className="text-2xl font-bold mb-6">
              Competitor Analysis
            </h3>

            <ul className="space-y-4 text-zinc-300">
              <li>• Local restaurants</li>
              <li>• Cocktail bars</li>
              <li>• Student-focused venues</li>
              <li>• Premium dining experiences</li>
            </ul>

          </div>

          <div className="bg-zinc-900 p-8 rounded-lg">

            <h3 className="text-2xl font-bold mb-6">
              Audience Analysis
            </h3>

            <ul className="space-y-4 text-zinc-300">
              <li>• Queen's students</li>
              <li>• Young professionals</li>
              <li>• Downtown visitors</li>
              <li>• Social nightlife seekers</li>
            </ul>

          </div>

        </div>

      </section>

      {/* STRATEGY */}

      <section className="px-16 py-16 bg-[#181818]">

        <h2 className="text-5xl font-bold mb-10">
          Content Strategy
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 rounded-lg p-8">
            <h3 className="font-bold text-2xl mb-4">
              Experience Content
            </h3>

            <p className="text-zinc-400">
              Focused on atmosphere, nightlife, cocktails, and social
              experiences rather than only food photography.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-lg p-8">
            <h3 className="font-bold text-2xl mb-4">
              Food Content
            </h3>

            <p className="text-zinc-400">
              Highlighted signature dishes, premium presentation,
              and menu storytelling.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-lg p-8">
            <h3 className="font-bold text-2xl mb-4">
              Lifestyle Content
            </h3>

            <p className="text-zinc-400">
              Positioned Mercury as a destination for memorable nights,
              celebrations, and social gatherings.
            </p>
          </div>

        </div>

      </section>

      {/* RESULTS */}

      <section className="px-16 py-16">

        <h2 className="text-5xl font-bold mb-10">
          Outcomes
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {[
            "Created a consistent brand identity",
            "Improved social engagement",
            "Strengthened local awareness",
            "Developed a scalable content framework",
            "Established premium positioning",
            "Built audience familiarity before visits",
          ].map((item) => (
            <div
              key={item}
              className="bg-zinc-900 rounded-lg p-8"
            >
              {item}
            </div>
          ))}

        </div>

      </section>

      {/* GALLERY */}

      <section className="px-16 py-16">

        <h2 className="text-5xl font-bold mb-10">
          Behind The Scenes
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "Content Calendar",
            "Social Media Posts",
            "Creative Concepts",
            "Campaign Planning",
            "Brand Guidelines",
            "Performance Reviews",
          ].map((item) => (
            <div
              key={item}
              className="h-[240px] bg-zinc-900 rounded-lg flex items-center justify-center text-zinc-400"
            >
              {item}
            </div>
          ))}

        </div>

      </section>

      {/* LESSON */}

      <section className="px-16 py-24 max-w-5xl">

        <Sparkles size={36} className="mb-8" />

        <h2 className="text-5xl font-bold mb-8">
          Key Learning
        </h2>

        <p className="text-2xl text-zinc-300 leading-relaxed">
          Hospitality marketing is not about selling food.
          It's about selling anticipation.
          The strongest-performing content wasn't menu-focused.
          It was experience-focused.
          People weren't choosing a dish.
          They were choosing how they wanted their evening to feel.
        </p>

      </section>

    </main>
  );
}