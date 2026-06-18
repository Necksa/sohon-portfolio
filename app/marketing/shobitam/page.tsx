"use client";

import Link from "next/link";

export default function ShobitamPage() {
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
            src="/Marketing/shobitam.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        <div className="relative z-20 flex flex-col justify-center h-full px-16 max-w-4xl">

          <Link
            href="/social-media"
            className="text-zinc-300 mb-8 hover:text-white"
          >
            ← Back
          </Link>

          <h1 className="text-7xl font-extrabold mb-6">
            SHOBITAM
          </h1>

          <p className="text-xl text-zinc-300 leading-relaxed">
            Social media strategy, influencer marketing,
            campaign planning, community engagement,
            and organic growth for a global fashion brand.
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
              Shobitam is a global fashion and lifestyle brand
              serving customers across multiple markets.
              The focus was on strengthening brand awareness,
              increasing engagement, and creating campaigns
              that connected with both existing and new audiences.
            </p>

            <p className="text-zinc-300 text-lg leading-relaxed">
              My role combined social media management,
              influencer partnerships, content planning,
              campaign execution, and performance analysis.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Skills Used
            </h3>

            <ul className="space-y-3 text-zinc-300">
              <li>Social Media Strategy</li>
              <li>Influencer Marketing</li>
              <li>Content Calendars</li>
              <li>Campaign Planning</li>
              <li>Community Management</li>
              <li>Analytics Reporting</li>
              <li>Brand Partnerships</li>
              <li>Performance Optimization</li>
            </ul>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="max-w-6xl mx-auto px-8 pb-24">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-zinc-900 rounded-xl p-8">
            <h3 className="text-5xl font-bold text-red-500">
              50+
            </h3>
            <p className="text-zinc-400 mt-2">
              Influencer Partnerships
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            <h3 className="text-5xl font-bold text-red-500">
              60%
            </h3>
            <p className="text-zinc-400 mt-2">
              Engagement Growth
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            <h3 className="text-5xl font-bold text-red-500">
              20%
            </h3>
            <p className="text-zinc-400 mt-2">
              Conversion Increase
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            <h3 className="text-5xl font-bold text-red-500">
              30%
            </h3>
            <p className="text-zinc-400 mt-2">
              Organic Reach Growth
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
            "Managed influencer and celebrity partnerships",
            "Built monthly content calendars",
            "Executed product launch campaigns",
            "Managed Instagram content strategy",
            "Supported YouTube content planning",
            "Developed Pinterest growth strategy",
            "Coordinated creator collaborations",
            "Tracked campaign performance",
            "Analyzed engagement metrics",
            "Managed community interactions",
            "Optimized content performance",
            "Supported brand awareness initiatives",
          ].map((item) => (
            <div
              key={item}
              className="
              bg-zinc-900
              rounded-xl
              p-6
              border
              border-zinc-800
              hover:bg-red-600
              hover:border-red-600
              transition-all
              duration-300
              "
            >
              ✓ {item}
            </div>
          ))}

        </div>

      </section>

      {/* CHALLENGE */}

      <section className="max-w-6xl mx-auto px-8 pb-24">

        <h2 className="text-5xl font-bold mb-8">
          The Challenge
        </h2>

        <div className="bg-zinc-900 rounded-xl p-10">

          <p className="text-zinc-300 text-lg leading-relaxed">
            The challenge was maintaining a consistent
            brand presence while managing multiple campaigns,
            influencer partnerships, and content initiatives
            across several social platforms.
          </p>

        </div>

      </section>

      {/* STRATEGY */}

      <section className="max-w-6xl mx-auto px-8 pb-24">

        <h2 className="text-5xl font-bold mb-8">
          Strategy
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Influencer Marketing
            </h3>

            <p className="text-zinc-400">
              Partnered with creators and celebrities
              to increase reach and brand credibility.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Content Strategy
            </h3>

            <p className="text-zinc-400">
              Built structured content calendars aligned
              with campaigns, launches, and audience interests.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Performance Tracking
            </h3>

            <p className="text-zinc-400">
              Used engagement and conversion insights
              to improve future campaign performance.
            </p>
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
            Stronger Brand Awareness
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            Increased Community Engagement
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            Improved Campaign Performance
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            Influencer Growth Program
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            Better Content Consistency
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            Higher Organic Visibility
          </div>

        </div>

      </section>

    </main>
  );
}