"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DrivisaPage() {
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
            src="/marketing/drivisa.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        <div className="relative z-20 flex flex-col justify-center h-full px-16 max-w-4xl">

          <button
            onClick={() => router.back()}
            className="self-start text-zinc-300 hover:text-white mb-10"
          >
            ← Back
          </button>

          <h1 className="text-7xl font-extrabold mb-6">
            DRIVISA
          </h1>

          <p className="text-xl text-zinc-300 leading-relaxed">
            Website development, SEO optimization,
            local search visibility improvements,
            email marketing, and lead generation strategy.
          </p>

        </div>

      </section>

      {/* OVERVIEW */}

      <section className="max-w-6xl mx-auto px-8 py-24">

        <div className="grid md:grid-cols-3 gap-12">

          <div className="md:col-span-2">

            <h2 className="text-5xl font-bold mb-8">
              About The Project
            </h2>

            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Drivisa required a stronger online presence to
              support customer acquisition and improve
              visibility within search engines.
            </p>

            <p className="text-zinc-300 text-lg leading-relaxed">
              My role involved improving the website experience,
              optimizing technical SEO, strengthening local
              search visibility, and creating email marketing
              systems that supported lead generation and
              customer engagement.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Skills Used
            </h3>

            <ul className="space-y-3 text-zinc-300">
              <li>Website Development</li>
              <li>Technical SEO</li>
              <li>Local SEO</li>
              <li>Email Marketing</li>
              <li>Website Auditing</li>
              <li>UX Improvements</li>
              <li>Lead Generation</li>
              <li>Analytics</li>
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
            "Developed and improved website structure",
            "Conducted technical SEO audit",
            "Fixed on-page SEO issues",
            "Improved website performance",
            "Optimized local search visibility",
            "Created email marketing campaigns",
            "Built lead generation workflows",
            "Improved user experience and navigation",
            "Optimized metadata and content structure",
            "Implemented analytics tracking",
            "Improved search engine indexing",
            "Created growth recommendations",
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

      {/* CHALLENGE */}

      <section className="max-w-6xl mx-auto px-8 pb-24">

        <h2 className="text-5xl font-bold mb-8">
          The Challenge
        </h2>

        <div className="bg-zinc-900 rounded-xl p-10">

          <p className="text-zinc-300 text-lg leading-relaxed">
            The website needed stronger visibility within
            search results while also providing visitors with
            a clearer user journey. Existing SEO opportunities
            were being missed and customer acquisition channels
            required optimization.
          </p>

        </div>

      </section>

      {/* SOLUTION */}

      <section className="max-w-6xl mx-auto px-8 pb-24">

        <h2 className="text-5xl font-bold mb-8">
          The Solution
        </h2>

        <div className="bg-zinc-900 rounded-xl p-10">

          <p className="text-zinc-300 text-lg leading-relaxed">
            I implemented a combination of website improvements,
            SEO optimization, local search enhancements, and
            email marketing systems. These initiatives helped
            improve discoverability, strengthen user engagement,
            and create a more effective lead generation process.
          </p>

        </div>

      </section>

      {/* SEO */}

      <section className="max-w-6xl mx-auto px-8 pb-24">

        <h2 className="text-5xl font-bold mb-12">
          SEO Improvements
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 rounded-xl p-8">
            Technical SEO Audit
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            On-Page Optimization
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            Local SEO Strategy
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            Metadata Improvements
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            Search Visibility Growth
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            Performance Optimization
          </div>

        </div>

      </section>

      {/* EMAIL MARKETING */}

      <section className="max-w-6xl mx-auto px-8 pb-24">

        <h2 className="text-5xl font-bold mb-8">
          Email Marketing
        </h2>

        <div className="bg-zinc-900 rounded-xl p-10">

          <p className="text-zinc-300 text-lg leading-relaxed">
            Created and managed email campaigns focused on
            customer engagement, lead nurturing, and
            maintaining relationships with prospective clients.
            The goal was to strengthen retention while
            supporting future conversions.
          </p>

        </div>

      </section>

      {/* RESULTS */}

      <section className="max-w-6xl mx-auto px-8 pb-32">

        <h2 className="text-5xl font-bold mb-12">
          Outcomes
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 rounded-xl p-8">
            Improved SEO Foundation
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            Better Search Visibility
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            Improved Website Experience
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            Stronger Local Presence
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            Lead Generation Support
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            Email Marketing Framework
          </div>

        </div>

      </section>

    </main>
  );
}