import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const profiles = [
    {
      name: "SEO & Web",
      link: "/seo-web",
      image: "/profiles/Nairobi.png",
    },
    {
      name: "Digital Marketing",
      link: "/marketing",
      image: "/profiles/Emily cooper.png",
    },
    {
      name: "Social Media",
      link: "/social-media",
      image: "/profiles/Meadow.png",
    },
    {
      name: "Analyst",
      link: "/analyst",
      image: "/profiles/Sherlock.png",
    },
    {
      name: "Agency",
      link: "/agency",
      image: "/profiles/Richard hendriks.png",
    },
    {
      name: "Creative Archive",
      link: "/music",
      image: "/profiles/Jabari.png",
    },
    {
      name: "Experimental",
      link: "/experimental",
      image: "marketing/thumbnails/rick.png",
    },
  ];

  return (
    <main className="min-h-screen bg-[#141414] text-white flex flex-col items-center justify-center px-6 relative">
      <div className="absolute top-5 left-12">
  <Link href="/">
  <Image
    src="/logo.png"
    alt="SOHON"
    width={110}
    height={40}
    priority
    className="cursor-pointer"
  />
</Link>
</div>

      <h2 className="text-6xl font-normal mb-16 text-[#ffffff]">
        Who's Watching my Penis?
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-16 gap-y-14">
  {profiles.map((profile) => (
    <Link
      href={profile.link}
      key={profile.name}
      className="group flex flex-col items-center gap-3 transition-all duration-300 hover:scale-110"
    >
      <Image
        src={profile.image}
        alt={profile.name}
        width={190}
        height={190}
        className="rounded-md border-2 border-transparent hover:border-white transition-all duration-300"
      />

      <span className="text-[#808080] text-xl group-hover:text-white transition-all duration-300">
        {profile.name}
      </span>
    </Link>
  ))}
</div>

<div className="mt-16">
  <a
    href="mailto:sohon.work@gmail.com"
    className="border border-[#808080] px-10 py-3 text-[#808080] text-xl tracking-wider hover:text-white hover:border-white transition-all duration-300"
  >
    Let's Talk
  </a>
</div>

</main>
  );
}
