"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar";
import MusicPlayer from "@/components/MusicPlayer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      {pathname !== "/" && <Navbar />}

      {children}

      <MusicPlayer />
    </>
  );
}
