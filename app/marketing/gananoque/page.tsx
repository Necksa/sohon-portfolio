"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function GananoquePage() {
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
            src="/Marketing/gananoque.mp4"
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

          <h1 className="text-7xl font-extrabold mb-6">
            GANANOQUE
            <br />
            NURSERY SCHOOL
          </h1>

          <p className="text-xl text-zinc-300 leading-relaxed">
            Website redesign, UX optimization,
            accessibility improvements,
            content structure,
            and client training documentation.
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
              Gananoque Nursery School required a modern,
              easy-to-manage website that better represented
              the organization while providing parents with
              a clear and user-friendly experience.
            </p>

            <p className="text-zinc-300 text-lg leading-relaxed">
              I was responsible for planning,
              designing, building, testing,
              and launching the website while ensuring
              the client could confidently manage the
              website after handoff.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Skills Used
            </h3>

            <ul className="space-y-3 text-zinc-300">

              <li>Website Design</li>
              <li>Wix Development</li>
              <li>UX Design</li>
              <li>Website Auditing</li>
              <li>Accessibility</li>
              <li>Content Strategy</li>
              <li>Client Training</li>
              <li>Quality Assurance</li>

            </ul>

          </div>

        </div>

      </section>

      {/* PROJECT STATS */}

      <section className="max-w-6xl mx-auto px-8 pb-24">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-zinc-900 rounded-xl p-8">
            <h3 className="text-5xl font-bold text-lime-400">
              UX
            </h3>

            <p className="text-zinc-400 mt-2">
              Focused Design
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            <h3 className="text-5xl font-bold text-lime-400">
              Wix
            </h3>

            <p className="text-zinc-400 mt-2">
              Development
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            <h3 className="text-5xl font-bold text-lime-400">
              QA
            </h3>

            <p className="text-zinc-400 mt-2">
              Testing
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            <h3 className="text-5xl font-bold text-lime-400">
              CMS
            </h3>

            <p className="text-zinc-400 mt-2">
              Client Training
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
            "Conducted website audit",
            "Planned site architecture",
            "Designed page layouts",
            "Built website in Wix",
            "Optimized mobile experience",
            "Improved website accessibility",
            "Tested navigation and functionality",
            "Created client user guide",
            "Performed quality assurance checks",
            "Improved user journey",
            "Structured website content",
            "Prepared website handoff",
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
            The primary challenge was creating a website
            that was simple enough for parents to navigate,
            while also giving the nursery school team an
            easy-to-manage platform for future updates.
            The website needed to clearly communicate
            programs, values, and key information while
            maintaining a welcoming and trustworthy design.
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
            I developed a modern website focused on clarity,
            accessibility, and ease of use. The structure was
            simplified to reduce friction for visitors while
            ensuring important information could be accessed
            quickly. Mobile responsiveness and accessibility
            were prioritized throughout the design process.
          </p>

        </div>

      </section>

      {/* CLIENT TRAINING */}

      <section className="max-w-6xl mx-auto px-8 pb-24">

        <h2 className="text-5xl font-bold mb-8">
          Client Training & Documentation
        </h2>

        <div className="bg-zinc-900 rounded-xl p-10">

          <p className="text-zinc-300 text-lg leading-relaxed">
            Beyond the website build itself,
            I created a detailed user guide to help
            the client confidently manage and update
            their website independently. This ensured
            long-term sustainability and reduced the
            need for ongoing technical support.
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
            Simplicity often creates a better user experience.
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            Accessibility should be considered from day one.
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            Strong client documentation improves project success.
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            Mobile-first design is critical for modern websites.
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
            Modern Website Experience
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            Improved Navigation
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            Better Mobile Usability
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            Enhanced Accessibility
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            Simplified Content Structure
          </div>

          <div className="bg-zinc-900 rounded-xl p-8">
            Successful Client Handoff
          </div>

        </div>

      </section>

    </main>
  );
}