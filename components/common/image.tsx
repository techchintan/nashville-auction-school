"use client";

import { urlFor } from "@/sanity/lib/image";
import { urlForAAA } from "@/sanity/lib/imageAAA";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image, { ImageProps } from "next/image";

type Props = Omit<ImageProps, "src"> & {
  src: SanityImageSource;
  ref?: React.RefObject<HTMLImageElement | null>;
  fromAAA?: boolean;
  onLoad?: () => void;
};

export const SanityImage = ({
  src,
  alt,
  fromAAA = false,
  ref,
  onLoad,
  ...props
}: Props) => {
  // Ensure alt is not undefined or empty, fallback to "Image" if it is
  const altText = alt || "Nashville Auction School";

  return (
    <Image
      src={fromAAA ? urlForAAA(src).url() : urlFor(src).url()}
      priority
      loading="eager"
      alt={altText}
      sizes="(min-width: 1200px) 85vw, (min-width: 768px) 75vw"
      loader={({ width, quality = 100 }) =>
        fromAAA
          ? urlForAAA(src).width(width).quality(quality).url()
          : urlFor(src).width(width).quality(quality).url()
      }
      {...props}
      ref={ref}
      onLoad={onLoad}
    />
  );
};
