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
      image: "/profiles/rick2.png",
    },
  ];

  return (
    <main className="min-h-screen bg-[#141414] text-white flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 relative">
      <div className="absolute top-4 left-4 sm:top-5 sm:left-8 md:left-12">
  <Link href="/">
  <Image
    src="/logo.png"
    alt="SOHON"
    width={110}
    height={40}
    priority
    className="w-20 sm:w-24 md:w-28 h-auto cursor-pointer"
  />
</Link>
</div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mb-8 md:mb-16 text-white text-center">
        Who's Watching?
      </h2>

      <div className="grid
grid-cols-2
sm:grid-cols-2
md:grid-cols-3
lg:grid-cols-4
gap-6
md:gap-10
lg:gap-14">
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
        className="
w-28
sm:w-36
md:w-40
lg:w-48
h-auto
rounded-md
border-2
border-transparent
group-hover:border-white
transition-all
duration-300
"
      />

      <span className="text-[#808080] text-sm sm:text-base md:text-lg lg:text-xl group-hover:text-white transition-all duration-300">
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
