"use client";

import {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
} from "react";

export type Track = {
  title: string;
  artist: string;
  src: string;
  cover: string;
  lyricsUrl: string;
};

type PlayerContextType = {
  track: Track | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;

  playTrack: (track: Track) => void;
  togglePlayPause: () => void;
  seek: (time: number) => void;
  setVolume: (volume: number) => void;

  nextTrack: () => void;
  prevTrack: () => void;
};

const PlayerContext =
  createContext<PlayerContextType | null>(null);

const tracks: Track[] = [
  {
    title: "Ocean",
    artist: "Sohon Roy",
    src: "/music/audio/ocean.mp3",
    cover: "/music/ocean-cover.jpg",
    lyricsUrl: "/music/ocean/lyrics",
  },

  {
    title: "I Need Sleep",
    artist: "Sohon Roy",
    src: "/music/audio/i-need-sleep.mp3",
    cover: "/music/i-need-sleep-cover.jpg",
    lyricsUrl: "/music/i-need-sleep/transcript",
  },

  {
    title: "IYKYK",
    artist: "Sohon Roy",
    src: "/music/audio/iykyk.mp3",
    cover: "/music/iykyk-cover.jpg",
    lyricsUrl: "/music/iykyk/transcript",
  },
];

export function PlayerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const audioRef =
    useRef<HTMLAudioElement>(null);

  const [track, setTrack] =
    useState<Track | null>(null);

  const [isPlaying, setIsPlaying] =
    useState(false);

  const [currentTime, setCurrentTime] =
    useState(0);

  const [duration, setDuration] =
    useState(0);

  const [volume, setVolumeState] =
    useState(1);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };

    const updateDuration = () => {
      setDuration(audio.duration || 0);
    };

    const handleEnded = () => {
      nextTrack();
    };

    audio.addEventListener(
      "timeupdate",
      updateTime
    );

    audio.addEventListener(
      "loadedmetadata",
      updateDuration
    );

    audio.addEventListener(
      "ended",
      handleEnded
    );

    return () => {
      audio.removeEventListener(
        "timeupdate",
        updateTime
      );

      audio.removeEventListener(
        "loadedmetadata",
        updateDuration
      );

      audio.removeEventListener(
        "ended",
        handleEnded
      );
    };
  }, [track]);

  const playTrack = (newTrack: Track) => {
    setTrack(newTrack);

    setTimeout(() => {
      if (!audioRef.current) return;

      audioRef.current.src = newTrack.src;

      audioRef.current.play();

      setIsPlaying(true);
    }, 50);
  };

  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const seek = (time: number) => {
    if (!audioRef.current) return;

    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const setVolume = (
    newVolume: number
  ) => {
    if (!audioRef.current) return;

    audioRef.current.volume = newVolume;

    setVolumeState(newVolume);
  };

  const nextTrack = () => {
    if (!track) return;

    const currentIndex =
      tracks.findIndex(
        (t) => t.src === track.src
      );

    const next =
      tracks[
        (currentIndex + 1) %
          tracks.length
      ];

    playTrack(next);
  };

  const prevTrack = () => {
    if (!track) return;

    const currentIndex =
      tracks.findIndex(
        (t) => t.src === track.src
      );

    const prev =
      tracks[
        (currentIndex -
          1 +
          tracks.length) %
          tracks.length
      ];

    playTrack(prev);
  };
console.log("PlayerProvider rendering");
console.log(PlayerContext);
  return (
    <PlayerContext.Provider
      value={{
        track,
        isPlaying,
        currentTime,
        duration,
        volume,
        playTrack,
        togglePlayPause,
        seek,
        setVolume,
        nextTrack,
        prevTrack,
      }}
    >
      {children}

      <audio
        ref={audioRef}
        preload="metadata"
      />
    </PlayerContext.Provider>
  );
}

export const usePlayer = () => {
  const context =
    useContext(PlayerContext);

  if (!context) {
    throw new Error(
      "usePlayer must be inside PlayerProvider"
    );
  }

  return context;
}