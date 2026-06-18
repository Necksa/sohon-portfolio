"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  Search,
  Bell,
  ChevronDown,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const navLink = (
    href: string,
    label: string
  ) => (
    <Link
      href={href}
      className={
        pathname.startsWith(href)
          ? "text-white"
          : "text-zinc-300 hover:text-white transition"
      }
    >
      {label}
    </Link>
  );

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-50

        flex
        items-center
        justify-between

        px-12
        py-5

        bg-gradient-to-b
        from-black
        via-black/80
        to-black/20

        backdrop-blur-sm
      "
    >
      <div className="flex items-center gap-10">

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

        <div className="flex gap-6 text-sm">

          {navLink(
            "/marketing",
            "Digital Marketing"
          )}

          {navLink(
            "/seo-web",
            "SEO"
          )}

          {navLink(
            "/social-media",
            "Social Media"
          )}

          {navLink(
            "/analyst",
            "Analytics"
          )}

          {navLink(
            "/agency",
            "Agency"
          )}

          {navLink(
            "/music",
            "Creative Archive"
          )}

        </div>

      </div>

      <div className="flex items-center gap-5">

        <Search
          size={20}
          className="
            cursor-pointer
            hover:text-zinc-300
            transition
          "
        />

        <Bell
          size={20}
          className="
            cursor-pointer
            hover:text-zinc-300
            transition
          "
        />

        <div
          className="
            flex
            items-center
            gap-2
            cursor-pointer
          "
        >
          <Image
            src="/profiles/Emily cooper.png"
            alt="Profile"
            width={32}
            height={32}
            className="rounded-sm"
          />

          <ChevronDown size={14} />
        </div>

      </div>

    </nav>
  );
}