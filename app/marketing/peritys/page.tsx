"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PeritysPage() {
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
            src="/marketing/peritys.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        <div className="relative z-20 flex flex-col justify-center h-full px-16 max-w-4xl">

          <button
  onClick={() => router.back()}
  className="text-zinc-300 mb-8 hover:text-white"
>
  ← Back
</button>

          <h1 className="text-8xl font-extrabold mb-6">
            PERITYS
          </h1>

          <p className="text-xl text-zinc-300 leading-relaxed">
            SEO, performance marketing, website optimization,
            lead generation, analytics, and digital growth
            for a software development consultancy.
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
              Peritys Innovations LLP is a software development
              consultancy based in Chennai, India. The company
              specializes in software engineering, UX design,
              DevOps, and digital transformation services.
            </p>

            <p className="text-zinc-300 text-lg leading-relaxed">
              As the SEO and Digital Marketing Specialist,
              I was responsible for improving search visibility,
              generating qualified traffic, optimizing website
              performance, and supporting lead generation through
              SEO, paid advertising, email marketing, social media,
              and analytics.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Skills Used
            </h3>

            <ul className="space-y-3 text-zinc-300">

              <li>SEO Audits</li>
              <li>Technical SEO</li>
              <li>Keyword Research</li>
              <li>Google Analytics</li>
              <li>Google Ads</li>
              <li>Meta Ads</li>
              <li>Email Marketing</li>
              <li>Instagram Marketing</li>
              <li>Schema Markup</li>
              <li>Performance Reporting</li>

            </ul>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="max-w-6xl mx-auto px-8 pb-24">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-zinc-900 rounded-xl p-8">
            <h3 className="text-5xl font-bold text-lime-400">
              100+
            </h3>

            <p className="text-zinc-400 mt-2">
              Projects Delivered
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            <h3 className="text-5xl font-bold text-lime-400">
              SEO
            </h3>

            <p className="text-zinc-400 mt-2">
              Optimization
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            <h3 className="text-5xl font-bold text-lime-400">
              PPC
            </h3>

            <p className="text-zinc-400 mt-2">
              Lead Generation
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            <h3 className="text-5xl font-bold text-lime-400">
              ROI
            </h3>

            <p className="text-zinc-400 mt-2">
              Focused
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
            "Conducted comprehensive SEO audits",
            "Improved website structure and architecture",
            "Optimized metadata and on-page SEO",
            "Implemented technical SEO improvements",
            "Improved mobile responsiveness",
            "Implemented schema markup",
            "Developed content marketing strategy",
            "Managed Instagram marketing activities",
            "Planned and optimized PPC campaigns",
            "Created email marketing campaigns",
            "Built analytics and reporting frameworks",
            "Tracked conversion and acquisition performance",
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

      {/* SEO */}

      <section className="max-w-6xl mx-auto px-8 pb-24">

        <h2 className="text-5xl font-bold mb-8">
          Search Engine Optimization
        </h2>

        <div className="bg-zinc-900 rounded-xl p-10">

          <p className="text-zinc-300 text-lg leading-relaxed">
            I conducted detailed SEO audits to identify
            opportunities across content, website structure,
            metadata, keyword targeting, and technical
            performance. Improvements focused on crawlability,
            search visibility, page speed, mobile experience,
            and user engagement.
          </p>

        </div>

      </section>

      {/* DIGITAL MARKETING */}

      <section className="max-w-6xl mx-auto px-8 pb-24">

        <h2 className="text-5xl font-bold mb-8">
          Digital Marketing
        </h2>

        <div className="bg-zinc-900 rounded-xl p-10">

          <p className="text-zinc-300 text-lg leading-relaxed">
            Alongside SEO initiatives, I managed social media
            marketing, PPC campaigns, content promotion,
            and email marketing activities designed to
            strengthen brand visibility and generate
            qualified business leads.
          </p>

        </div>

      </section>

      {/* WEBSITE */}

      <section className="max-w-6xl mx-auto px-8 pb-24">

        <h2 className="text-5xl font-bold mb-8">
          Website Management
        </h2>

        <div className="bg-zinc-900 rounded-xl p-10">

          <p className="text-zinc-300 text-lg leading-relaxed">
            I worked closely with developers to improve
            website usability, responsiveness, performance,
            and conversion opportunities. This included
            ongoing optimization and monitoring to ensure
            the website effectively represented the
            company’s expertise and services.
          </p>

        </div>

      </section>

      {/* ANALYTICS */}

      <section className="max-w-6xl mx-auto px-8 pb-24">

        <h2 className="text-5xl font-bold mb-8">
          Analytics & Reporting
        </h2>

        <div className="bg-zinc-900 rounded-xl p-10">

          <p className="text-zinc-300 text-lg leading-relaxed">
            Implemented tracking systems and reporting
            frameworks to monitor user behaviour,
            website performance, campaign effectiveness,
            and acquisition channels. Data-driven insights
            were used to guide future optimization and
            marketing decisions.
          </p>

        </div>

      </section>

      {/* LEARNINGS */}

      <section className="max-w-6xl mx-auto px-8 pb-24">

        <h2 className="text-5xl font-bold mb-12">
          Key Learnings
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-zinc-900 rounded-xl p-8">
            SEO success requires both technical excellence
            and high-quality content.
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            Performance marketing is driven by continuous
            testing and optimization.
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            Analytics should guide every strategic decision.
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            Strong websites convert more effectively than
            strong advertising alone.
          </div>

        </div>

      </section>

      {/* RESULTS */}

      <section className="max-w-6xl mx-auto px-8 pb-32">

        <h2 className="text-5xl font-bold mb-12">
          Outcomes
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 rounded-xl p-8">
            Improved Search Visibility
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            Increased Organic Traffic
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            Stronger Digital Presence
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            Better Website Performance
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            Enhanced Lead Generation
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            Data-Driven Marketing Decisions
          </div>

        </div>

      </section>

    </main>
  );
}