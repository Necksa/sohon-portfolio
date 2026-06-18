"use client";

import Image from "next/image";
import Link from "next/link";

export default function ADictedPage() {
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
          <source src="/Marketing/adicted.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        <div className="relative z-20 flex flex-col justify-center h-full px-16 max-w-4xl">

          <Link
            href="/agency"
            className="text-zinc-300 mb-8 hover:text-white"
          >
            ← Back
          </Link>

          <h1 className="text-8xl font-extrabold mb-6">
            AD-ICTED
          </h1>

          <p className="text-xl text-zinc-300 leading-relaxed">
            My own digital agency focused on social media,
            paid advertising, SEO, website development,
            branding, content creation, and growth strategy.
          </p>

        </div>

      </section>

      {/* ABOUT */}

      <section className="max-w-6xl mx-auto px-8 py-24">

        <div className="grid md:grid-cols-3 gap-12">

          <div className="md:col-span-2">

            <h2 className="text-5xl font-bold mb-8">
              About AD-icted
            </h2>

            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              AD-icted was my agency where I worked with businesses
              across multiple industries to improve their digital
              presence and growth.
            </p>

            <p className="text-zinc-300 text-lg leading-relaxed">
              I managed client relationships, built marketing
              strategies, created content, ran advertising campaigns,
              developed websites, improved SEO performance,
              designed graphics, and handled reporting.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Services Delivered
            </h3>

            <ul className="space-y-4 text-zinc-300">

              <li>Social Media Management</li>
              <li>Paid Advertising</li>
              <li>SEO</li>
              <li>Website Development</li>
              <li>Graphic Design</li>
              <li>Content Creation</li>
              <li>Email Marketing</li>
              <li>Analytics & Reporting</li>

            </ul>

          </div>

        </div>

      </section>

      {/* CONTRIBUTIONS */}

      <section className="max-w-6xl mx-auto px-8 pb-24">

        <h2 className="text-5xl font-bold mb-12">
          What I Did
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {[
            "Managed multiple client accounts",
            "Created social media strategies",
            "Designed marketing creatives",
            "Built websites and landing pages",
            "Improved SEO performance",
            "Ran Google & Meta Ads",
            "Created reporting dashboards",
            "Handled client communication",
          ].map((item) => (
            <div
              key={item}
              className="
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

      {/* CLIENT WORK */}

      <section className="max-w-6xl mx-auto px-8 pb-24">

        <h2 className="text-5xl font-bold mb-12">
          Clients & Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 rounded-xl overflow-hidden">
            <Image
              src="/marketing/thumbnails/drivisa.jpg"
              alt="Drivisa"
              width={800}
              height={500}
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold">Drivisa</h3>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-xl overflow-hidden">
            <Image
              src="/marketing/thumbnails/amadeus.jpg"
              alt="Amadeus Cafe"
              width={800}
              height={500}
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold">Amadeus Cafe</h3>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-xl overflow-hidden">
            <Image
              src="/marketing/thumbnails/mercury.png"
              alt="Mercury"
              width={800}
              height={500}
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold">
                Mercury Bar & Lounge
              </h3>
            </div>
          </div>

        </div>

      </section>

     {/* DESIGN GALLERY */}

<section className="max-w-7xl mx-auto px-8 pb-32">

  <h2 className="text-5xl font-bold mb-12">
    Graphic Design Gallery
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    {[
      {
        title: "Design 1",
        pdf: "/marketing/adicted/design1.pdf",
        preview: "/marketing/adicted/design1-preview.jpg",
      },
      {
        title: "Design 2",
        pdf: "/marketing/adicted/design2.pdf",
        preview: "/marketing/adicted/design2-preview.jpg",
      },
      {
        title: "Design 3",
        pdf: "/marketing/adicted/design3.pdf",
        preview: "/marketing/adicted/design3-preview.jpg",
      },
    ].map((design) => (

      <Link
        key={design.title}
        href={design.pdf}
        target="_blank"
        className="group relative overflow-hidden rounded-xl"
      >

        <Image
          src={design.preview}
          alt={design.title}
          width={1000}
          height={1000}
          className="
            h-[280px]
            w-full
            object-cover
            transition-all
            duration-500
            group-hover:scale-110
          "
        />

        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300" />

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            p-6
            translate-y-full
            group-hover:translate-y-0
            transition-all
            duration-300
            bg-gradient-to-t
            from-black
            to-transparent
          "
        >
          <h3 className="text-xl font-bold">
            {design.title}
          </h3>

          <p className="text-zinc-300 text-sm">
            Click to view PDF
          </p>
        </div>

      </Link>

    ))}

  </div>

</section>

    </main>
  );
}