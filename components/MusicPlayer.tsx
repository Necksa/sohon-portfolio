"use client";

import Image from "next/image";
import Link from "next/link";
import { usePlayer } from "@/components/PlayerContext";

export default function MusicPlayer() {
  const {
    track,
    isPlaying,
    togglePlayPause,
    nextTrack,
    prevTrack,
    currentTime,
    duration,
    volume,
    seek,
    setVolume,
  } = usePlayer();

  if (!track) return null;

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);

    return `${mins}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div
      className="
        fixed
        bottom-0
        left-0
        right-0
        h-24
        bg-black
        border-t
        border-zinc-800
        z-[9999]
        flex
        items-center
        px-6
      "
    >
      {/* LEFT */}

      <div className="w-1/4 flex items-center gap-4">

        <Link href={track.lyricsUrl}>
          <Image
            src={track.cover}
            alt={track.title}
            width={60}
            height={60}
            className="rounded cursor-pointer"
          />
        </Link>

        <div>
          <p className="font-semibold">
            {track.title}
          </p>

          <p className="text-zinc-400 text-sm">
            {track.artist}
          </p>
        </div>

      </div>

      {/* CENTER */}

      <div className="w-2/4 flex flex-col items-center">

        <div className="flex items-center gap-6 mb-2">

          <button
            onClick={prevTrack}
            className="text-xl"
          >
            ⏮
          </button>

          <button
            onClick={togglePlayPause}
            className="
              bg-white
              text-black
              w-12
              h-12
              rounded-full
              font-bold
            "
          >
            {isPlaying ? "❚❚" : "▶"}
          </button>

          <button
            onClick={nextTrack}
            className="text-xl"
          >
            ⏭
          </button>

        </div>

        <div className="flex items-center gap-3 w-full">

          <span className="text-xs">
            {formatTime(currentTime)}
          </span>

          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={(e) =>
              seek(Number(e.target.value))
            }
            className="w-full"
          />

          <span className="text-xs">
            {formatTime(duration)}
          </span>

        </div>

      </div>

      {/* RIGHT */}

      <div className="w-1/4 flex justify-end items-center gap-3">

        🔊

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) =>
            setVolume(Number(e.target.value))
          }
          className="w-32"
        />

      </div>

    </div>
  );
}