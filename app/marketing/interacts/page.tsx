"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function InteractsPage() {
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
          <source
            src="/marketing/interacts.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        <div className="relative z-20 flex flex-col justify-center h-full px-16 max-w-3xl">

          <button
  onClick={() => router.back()}
  className="text-zinc-300 mb-8 hover:text-white text-left"
>
  ← Back
</button>

          <h1 className="text-8xl font-extrabold mb-6">
            INTERACTS.AI
          </h1>

          <p className="text-xl text-zinc-300 leading-relaxed">
            Growth marketing, influencer campaigns,
            paid media execution,
            creative optimization,
            and performance reporting across
            multiple digital platforms.
          </p>

        </div>

      </section>

      {/* ABOUT */}

      <section className="max-w-6xl mx-auto px-8 py-24">

        <div className="grid md:grid-cols-3 gap-12">

          <div className="md:col-span-2">

            <h2 className="text-5xl font-bold mb-8">
              About The Project
            </h2>

            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              As a Digital Marketing Specialist at Interacts.ai,
              I managed multi-platform marketing campaigns
              across paid and organic channels.
            </p>

            <p className="text-zinc-300 text-lg leading-relaxed">
              My responsibilities included campaign planning,
              content strategy,
              influencer partnerships,
              UGC programs,
              performance reporting,
              creative testing,
              and audience growth initiatives.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Skills Used
            </h3>

            <ul className="space-y-4 text-zinc-300">

              <li>Paid Social</li>
              <li>Content Strategy</li>
              <li>Influencer Marketing</li>
              <li>UGC Campaigns</li>
              <li>Performance Tracking</li>
              <li>Creative Testing</li>
              <li>Campaign Reporting</li>
              <li>Audience Analysis</li>

            </ul>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="max-w-6xl mx-auto px-8 pb-24">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-zinc-900 rounded-xl p-8">
            <h3 className="text-5xl font-bold text-lime-400">
              30%
            </h3>
            <p className="text-zinc-400 mt-2">
              CTR Improvement
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            <h3 className="text-5xl font-bold text-lime-400">
              6+
            </h3>
            <p className="text-zinc-400 mt-2">
              Platforms Managed
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            <h3 className="text-5xl font-bold text-lime-400">
              2X
            </h3>
            <p className="text-zinc-400 mt-2">
              Organic Reach Growth
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            <h3 className="text-5xl font-bold text-lime-400">
              2
            </h3>
            <p className="text-zinc-400 mt-2">
              Years Experience
            </p>
          </div>

        </div>

      </section>

      {/* CONTRIBUTIONS */}

      <section className="max-w-6xl mx-auto px-8 pb-24">

        <h2 className="text-5xl font-bold mb-12">
          My Contributions
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {[
            "Led multi-platform marketing campaigns",
            "Managed end-to-end campaign workflows",
            "Built influencer marketing programs",
            "Developed UGC acquisition strategies",
            "Optimized paid social creatives",
            "Improved ad CTR through testing",
            "Monitored campaign performance",
            "Collaborated with creative teams",
          ].map((item) => (
            <div
              key={item}
              className="
              bg-zinc-900
              rounded-xl
              p-6
              border
              border-zinc-800
              hover:bg-lime-400
              hover:text-black
              hover:-translate-y-1
              transition-all
              duration-300
              "
            >
              ✓ {item}
            </div>
          ))}

        </div>

      </section>

     <section className="max-w-6xl mx-auto px-8 pb-24">

  <h2 className="text-5xl font-bold mb-12">
    Marketing Strategy & Execution
  </h2>

  <div className="space-y-12">

    <div className="bg-zinc-900 rounded-xl p-10">
      <h3 className="text-3xl font-bold mb-4">
        Audience Research
      </h3>

      <p className="text-zinc-300 leading-relaxed">
        Conducted market research to understand how businesses
        evaluate AI-powered lead generation solutions.
        Identified key decision-makers, pain points,
        objections, and purchase triggers to improve campaign targeting.
      </p>
    </div>

    <div className="bg-zinc-900 rounded-xl p-10">
      <h3 className="text-3xl font-bold mb-4">
        Content & Messaging Strategy
      </h3>

      <p className="text-zinc-300 leading-relaxed">
        Developed messaging frameworks focused on revenue growth,
        lead conversion, automation, and operational efficiency.
        Worked on positioning Interacts.ai as a practical business solution
        rather than another AI tool.
      </p>
    </div>

    <div className="bg-zinc-900 rounded-xl p-10">
      <h3 className="text-3xl font-bold mb-4">
        Influencer & UGC Campaigns
      </h3>

      <p className="text-zinc-300 leading-relaxed">
        Built creator partnerships and user-generated content programs
        to improve credibility and expand organic reach.
        Collaborated with influencers and creators to produce content
        aligned with campaign objectives.
      </p>
    </div>

    <div className="bg-zinc-900 rounded-xl p-10">
      <h3 className="text-3xl font-bold mb-4">
        Performance Optimization
      </h3>

      <p className="text-zinc-300 leading-relaxed">
        Monitored campaign performance, CTR, engagement rates,
        and conversion behaviour. Used insights from campaign reporting
        to refine creatives, targeting, and messaging across channels.
      </p>
    </div>

  </div>

</section>

      {/* RESULTS */}

      <section className="max-w-6xl mx-auto px-8 pb-32">

        <h2 className="text-5xl font-bold mb-12">
          Results
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-zinc-900 rounded-xl p-8">
            <h3 className="text-5xl font-bold">
              30%
            </h3>
            <p className="text-zinc-400 mt-2">
              CTR Improvement
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            <h3 className="text-5xl font-bold">
              6+
            </h3>
            <p className="text-zinc-400 mt-2">
              Platforms Managed
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            <h3 className="text-5xl font-bold">
              UGC
            </h3>
            <p className="text-zinc-400 mt-2">
              Program Built
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            <h3 className="text-5xl font-bold">
              2X
            </h3>
            <p className="text-zinc-400 mt-2">
              Organic Reach
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}