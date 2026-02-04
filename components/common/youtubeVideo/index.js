"use client";
import { PlayIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Video = ({ videoId }) => {
  return (
    <iframe
      className="aspect-video h-full w-full"
      title="Play"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&amp;controls=0&amp;autoplay=1&amp;playsinline=1`}
    ></iframe>
  );
};

export default function YoutubeVideo({ videoId }) {
  const [play, setPlay] = useState(false);

  return play ? (
    <Video videoId={videoId} />
  ) : (
    <div className="relative aspect-video w-full">
      <Image
        src={`https://i.ytimg.com/vi_webp/${videoId}/sddefault.webp`}
        alt="video"
        className="absolute inset-0 h-full w-full object-cover"
        width={560}
        height={315}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          onClick={() => setPlay(true)}
          className="cursor-pointer rounded-full bg-red-500 px-8 py-4"
        >
          <PlayIcon className="h-10 w-10" fill="white" strokeWidth={0} />
        </div>
      </div>
    </div>
  );
}
