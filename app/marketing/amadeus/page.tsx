"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AmadeusPage() {
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
            src="/Marketing/amadeus.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        <div className="relative z-20 flex flex-col justify-center h-full px-16 max-w-4xl">

        <button
  onClick={() => router.back()}
  className="
    text-zinc-300
    hover:text-white
    mb-12
    w-fit
  "
>
  ← Back
</button>

          <h1 className="text-7xl font-extrabold mb-6">
            AMADEUS
            <br />
            CAFE
          </h1>

          <p className="text-xl text-zinc-300 leading-relaxed">
            Comprehensive SEO audit covering technical SEO,
            website performance, mobile usability,
            local SEO, backlink analysis,
            and growth recommendations.
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
              Amadeus Cafe is a well-known family-owned cafe
              located in Kingston, Ontario.
            </p>

            <p className="text-zinc-300 text-lg leading-relaxed">
              The objective of this project was to conduct
              a complete SEO and website audit to evaluate
              search visibility, website performance,
              mobile usability, content structure,
              local SEO opportunities,
              and backlink quality.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Skills Used
            </h3>

            <ul className="space-y-3 text-zinc-300">

              <li>Technical SEO</li>
              <li>SEO Auditing</li>
              <li>Local SEO</li>
              <li>Keyword Research</li>
              <li>UX Analysis</li>
              <li>Website Performance</li>
              <li>Competitor Analysis</li>
              <li>Backlink Analysis</li>

            </ul>

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
            "Conducted full SEO audit",
            "Analyzed website indexing",
            "Reviewed technical SEO setup",
            "Audited website performance",
            "Evaluated mobile usability",
            "Performed keyword research",
            "Reviewed metadata structure",
            "Analyzed backlink profile",
            "Conducted competitor research",
            "Created local SEO recommendations",
            "Developed optimization roadmap",
            "Presented actionable findings",
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
              transition-all
              duration-300
              "
            >
              ✓ {item}
            </div>
          ))}

        </div>

      </section>

      {/* AUDIT CATEGORIES */}

      <section className="max-w-6xl mx-auto px-8 pb-24">

        <h2 className="text-5xl font-bold mb-12">
          Audit Areas
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {[
            "Technical SEO",
            "Website Performance",
            "Mobile Friendliness",
            "On-Page SEO",
            "Off-Page SEO",
            "Local SEO",
            "Keyword Strategy",
            "Backlink Analysis",
          ].map((item) => (
            <div
              key={item}
              className="bg-zinc-900 rounded-xl p-8"
            >
              {item}
            </div>
          ))}

        </div>

      </section>

      {/* FINDINGS */}

      <section className="max-w-6xl mx-auto px-8 pb-24">

        <h2 className="text-5xl font-bold mb-8">
          Key Findings
        </h2>

        <div className="bg-zinc-900 rounded-xl p-10">

          <ul className="space-y-4 text-zinc-300 text-lg">

            <li>• HTTPS properly configured</li>
            <li>• Website successfully indexed</li>
            <li>• Google Analytics installed</li>
            <li>• Strong local presence</li>
            <li>• Mobile optimization opportunities identified</li>
            <li>• Missing heading structure improvements</li>
            <li>• Content expansion opportunities available</li>
            <li>• Backlink quality improvements recommended</li>

          </ul>

        </div>

      </section>

      {/* CHALLENGE */}

      <section className="max-w-6xl mx-auto px-8 pb-24">

        <h2 className="text-5xl font-bold mb-8">
          The Challenge
        </h2>

        <div className="bg-zinc-900 rounded-xl p-10">

          <p className="text-zinc-300 text-lg leading-relaxed">
            Amadeus Cafe already had strong local brand recognition,
            but several technical, content,
            and mobile experience opportunities existed.
            The challenge was identifying the highest-impact
            improvements that could strengthen organic visibility
            while maintaining the cafe's existing identity.
          </p>

        </div>

      </section>

      {/* RECOMMENDATIONS */}

      <section className="max-w-6xl mx-auto px-8 pb-24">

        <h2 className="text-5xl font-bold mb-12">
          Recommendations
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {[
            "Create SEO-focused content",
            "Improve internal linking",
            "Acquire higher-quality backlinks",
            "Improve mobile usability",
            "Optimize heading structure",
            "Expand local keyword targeting",
            "Strengthen Google Business Profile",
            "Improve UX and engagement signals",
          ].map((item) => (
            <div
              key={item}
              className="bg-zinc-900 rounded-xl p-8"
            >
              {item}
            </div>
          ))}

        </div>

      </section>

      {/* OUTCOMES */}

      <section className="max-w-6xl mx-auto px-8 pb-24">

        <h2 className="text-5xl font-bold mb-12">
          Outcomes
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-zinc-900 rounded-xl p-8">
            <h3 className="text-4xl font-bold text-lime-400">
              SEO
            </h3>
            <p className="text-zinc-400 mt-2">
              Audit Completed
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            <h3 className="text-4xl font-bold text-lime-400">
              UX
            </h3>
            <p className="text-zinc-400 mt-2">
              Review Delivered
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            <h3 className="text-4xl font-bold text-lime-400">
              Local
            </h3>
            <p className="text-zinc-400 mt-2">
              SEO Strategy
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            <h3 className="text-4xl font-bold text-lime-400">
              Growth
            </h3>
            <p className="text-zinc-400 mt-2">
              Roadmap Created
            </p>
          </div>

        </div>

      </section>

      {/* LEARNING */}

      <section className="max-w-6xl mx-auto px-8 pb-32">

        <h2 className="text-5xl font-bold mb-8">
          Key Learning
        </h2>

        <div className="bg-zinc-900 rounded-xl p-10">

          <p className="text-zinc-300 text-xl leading-relaxed">
            SEO success rarely comes from a single fix.
            The biggest improvements often come from
            combining technical optimization,
            stronger content,
            better user experience,
            and higher-quality backlinks into a unified strategy.
          </p>

        </div>

      </section>

    </main>
  );
}