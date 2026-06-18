"use client";

import Link from "next/link";

export default function ReadBookPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Header */}

      <div className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-black/90 backdrop-blur border-b border-zinc-800">

        <Link
          href="/music/hermitHana"
          className="text-zinc-300 hover:text-white transition"
        >
          ← Back to Hermit Hana
        </Link>

        <a
          href="/music/hermit-hana.pdf"
          download
          className="bg-white text-black px-4 py-2 rounded font-semibold hover:bg-zinc-200 transition"
        >
          Download PDF
        </a>

      </div>

      {/* Reader */}

      <div className="max-w-7xl mx-auto py-8 px-4">

        <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-2xl">

          <iframe
            src="/music/hermit-hana.pdf#toolbar=0"
            className="w-full h-[90vh]"
          />

        </div>

      </div>

    </main>
  );
}