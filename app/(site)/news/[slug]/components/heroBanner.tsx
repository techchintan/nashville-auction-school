import { SanityImage } from "@/components/common/image";
import { NewsDetailQueryResult } from "@/sanity.types";

const HeroBanner = ({ data }: { data: NonNullable<NewsDetailQueryResult> }) => {
  return (
    <div className="relative aspect-3/4 max-h-150 w-full sm:aspect-auto sm:h-150">
      <SanityImage
        src={data.desktopHeroBannerImage}
        alt={data.desktopHeroBannerImage.alt}
        className="z-0 h-full w-full object-cover"
        fill
      />

      <div className="relative z-1 flex h-full w-full flex-col justify-end bg-eternity/40">
        <div className="max-width-container padding-container flex h-full w-full flex-col justify-end">
          <div className="hero-banner-title">The News</div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
