"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  ArrowLeft,
  Play,
} from "lucide-react";

export default function QueensPage() {
  const router = useRouter();

  return (
    <main className="bg-[#141414] text-white min-h-screen">

      {/* HERO */}

      <section className="relative h-[80vh] overflow-hidden">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="/marketing/queens.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/50 to-black/20" />

        <div className="relative z-10 flex flex-col justify-end h-full px-16 pb-20">

          <button
  onClick={() => router.back()}
  className="mb-6 flex items-center gap-2 text-zinc-300 hover:text-white"
>
  <ArrowLeft size={18} />
  Back
</button>

          <h1 className="text-8xl font-black mb-4">
            QUEEN'S UNIVERSITY
          </h1>

          <div className="flex items-center gap-4 mb-6">

            <span className="text-green-500 font-bold">
              98% Match
            </span>

            <span>2025</span>

            <span className="border px-2 py-1 text-xs">
              GA4
            </span>

            <span className="border px-2 py-1 text-xs">
              META ADS
            </span>

            <span className="border px-2 py-1 text-xs">
              ANALYTICS
            </span>

          </div>

          <p className="max-w-2xl text-lg text-zinc-200 mb-8">
            Social campaigns, GA4 analysis,
            audience insights, campaign reporting,
            and student engagement optimization.
          </p>

         

        </div>

      </section>

      {/* CONTENT */}

      <section className="max-w-7xl mx-auto px-16 py-20">

        <div className="grid grid-cols-3 gap-16">

          <div className="col-span-2">

            <h2 className="text-4xl font-bold mb-6">
              About This Project
            </h2>

            <p className="text-zinc-300 leading-8 text-lg">
              As a Digital Marketing Coordinator
              at Queen's University, I executed and
              optimized multi-platform social campaigns
              across Instagram, LinkedIn, and Facebook.

              Using GA4 and Meta Insights,
              I monitored campaign performance,
              analyzed audience behaviour,
              and identified opportunities
              for optimization.

              I worked with internal stakeholders
              to align campaign messaging
              with student engagement goals
              and institutional branding objectives.
            </p>

          </div>

          <div>

            <h3 className="text-zinc-400 mb-4">
              Skills Used
            </h3>

            <div className="space-y-2">

              <p>GA4 Analytics</p>
              <p>Meta Insights</p>
              <p>Campaign Reporting</p>
              <p>Audience Analysis</p>
              <p>Social Media Marketing</p>
              <p>Content Strategy</p>
              <p>Performance Monitoring</p>
              <p>Student Engagement</p>

            </div>

          </div>

        </div>

        {/* STATS */}

        <div className="grid grid-cols-4 gap-6 mt-20">

          <div className="bg-zinc-900 p-8 rounded-lg">
            <h3 className="text-5xl font-black">
              22%
            </h3>

            <p className="text-zinc-400 mt-3">
              Engagement Growth
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-lg">
            <h3 className="text-5xl font-black">
              3
            </h3>

            <p className="text-zinc-400 mt-3">
              Major Platforms
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-lg">
            <h3 className="text-5xl font-black">
              GA4
            </h3>

            <p className="text-zinc-400 mt-3">
              Analytics Reporting
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-lg">
            <h3 className="text-5xl font-black">
              KPI
            </h3>

            <p className="text-zinc-400 mt-3">
              Performance Tracking
            </p>
          </div>

        </div>

{/* RESEARCH & STRATEGIC ANALYSIS */}

<div className="mt-24">

  <h2 className="text-4xl font-bold mb-4">
    Research & Strategic Analysis
  </h2>

  <p className="text-zinc-400 mb-12 max-w-4xl">
    Beyond campaign execution, this project focused on
    understanding how prospective students discovered
    programs, evaluated options, and moved through the
    university's digital ecosystem. The objective was to
    identify opportunities to improve engagement,
    navigation, and long-term conversion potential.
  </p>

  <div className="space-y-16">

    {/* 1 */}

    <div className="bg-zinc-900/50 rounded-xl p-8">

      <h3 className="text-3xl font-bold mb-4">
        Course Discovery Analysis
      </h3>

      <p className="text-zinc-400 mb-6">
        Challenge
      </p>

      <p className="leading-8 text-zinc-300 mb-8">
        Students frequently arrived on individual course
        pages but did not consistently continue exploring
        other programs within the university ecosystem.
        Understanding how users discovered courses and
        where exploration stopped became a key focus.
      </p>

      <p className="text-zinc-400 mb-6">
        Research Process
      </p>

      <p className="leading-8 text-zinc-300 mb-8">
        User journeys were analyzed using GA4 user flow
        reports, landing page behaviour, and internal
        navigation patterns. Special attention was given
        to entry pages, exit pages, engagement depth,
        and click-through behaviour between courses.
      </p>

      <p className="text-zinc-400 mb-6">
        Findings
      </p>

      <p className="leading-8 text-zinc-300">
        Many visitors viewed a single course before
        exiting. This suggested that users were evaluating
        programs individually rather than discovering the
        broader educational ecosystem available to them.
      </p>

    </div>

    {/* 2 */}

    <div className="bg-zinc-900/50 rounded-xl p-8">

      <h3 className="text-3xl font-bold mb-4">
        Traffic Source Analysis
      </h3>

      <p className="text-zinc-400 mb-6">
        Challenge
      </p>

      <p className="leading-8 text-zinc-300 mb-8">
        Traffic originated from multiple channels
        including Google Search, Google Ads, social
        platforms, and direct visits. Understanding
        differences in user quality and behaviour was
        essential for future optimization.
      </p>

      <p className="text-zinc-400 mb-6">
        Research Process
      </p>

      <p className="leading-8 text-zinc-300 mb-8">
        Channel performance was evaluated using
        engagement metrics, navigation behaviour,
        landing page performance, and conversion
        indicators. Comparative analysis was performed
        across acquisition sources.
      </p>

      <p className="text-zinc-400 mb-6">
        Findings
      </p>

      <p className="leading-8 text-zinc-300">
        Search-driven traffic generally demonstrated
        stronger intent and deeper engagement compared
        with awareness-focused channels. This highlighted
        the importance of tailoring experiences based on
        acquisition source.
      </p>

    </div>

    {/* 3 */}

    <div className="bg-zinc-900/50 rounded-xl p-8">

      <h3 className="text-3xl font-bold mb-4">
        User Flow Investigation
      </h3>

      <p className="text-zinc-400 mb-6">
        Objective
      </p>

      <p className="leading-8 text-zinc-300 mb-8">
        Map how users navigated through the website and
        identify points of friction that prevented deeper
        engagement.
      </p>

      <p className="text-zinc-400 mb-6">
        Approach
      </p>

      <p className="leading-8 text-zinc-300 mb-8">
        GA4 user flow reports were used to visualize
        navigation patterns across key pages. Entry
        points, common journeys, and drop-off locations
        were documented to understand user decision
        making.
      </p>

      <p className="text-zinc-400 mb-6">
        Insight
      </p>

      <p className="leading-8 text-zinc-300">
        Several high-traffic pages functioned as dead
        ends, creating missed opportunities for continued
        exploration and program discovery.
      </p>

    </div>

    {/* 4 */}

    <div className="bg-zinc-900/50 rounded-xl p-8">

      <h3 className="text-3xl font-bold mb-4">
        Course Bundling Opportunities
      </h3>

      <p className="text-zinc-400 mb-6">
        Strategic Question
      </p>

      <p className="leading-8 text-zinc-300 mb-8">
        Could related programs be grouped together to
        increase perceived value and encourage broader
        exploration?
      </p>

      <p className="text-zinc-400 mb-6">
        Findings
      </p>

      <p className="leading-8 text-zinc-300">
        Analysis suggested opportunities to connect
        complementary programs through recommendations,
        learning pathways, and related-course modules.
        This approach could potentially improve
        engagement while increasing exposure to
        additional offerings.
      </p>

    </div>

    {/* 5 */}

    <div className="bg-zinc-900/50 rounded-xl p-8">

      <h3 className="text-3xl font-bold mb-4">
        Initiator Behaviour Research
      </h3>

      <p className="text-zinc-400 mb-6">
        Observation
      </p>

      <p className="leading-8 text-zinc-300 mb-8">
        Many educational purchasing decisions involve
        an "initiator" who researches options before
        recommending them to others.
      </p>

      <p className="text-zinc-400 mb-6">
        Insight
      </p>

      <p className="leading-8 text-zinc-300">
        Initiators require stronger confidence before
        making recommendations. Clear value
        communication, testimonials, and evidence-based
        outcomes become especially important when
        decisions impact multiple stakeholders.
      </p>

    </div>

    {/* 6 */}

    <div className="bg-zinc-900/50 rounded-xl p-8">

      <h3 className="text-3xl font-bold mb-4">
        Measurement Framework & Recommendations
      </h3>

      <p className="text-zinc-400 mb-6">
        Outcome
      </p>

      <p className="leading-8 text-zinc-300">
        The research informed a series of recommendations
        focused on navigation optimization, course
        discovery improvements, attribution tracking,
        user journey measurement, alumni testimonial
        tracking, and future A/B testing opportunities.
        The goal was to create a stronger measurement
        foundation while improving the overall student
        decision-making experience.
      </p>

    </div>

  </div>

</div>

      </section>

    </main>
  );
}