import { SanityImage } from "@/components/common/image";
import { ContactQueryResult } from "@/sanity.types";

const HeroBanner = ({ data }: { data: NonNullable<ContactQueryResult> }) => {
  return (
    <div className="relative aspect-3/4 max-h-150 w-full sm:aspect-auto sm:h-150">
      <SanityImage
        src={data.heroBannerBackgroundImage}
        alt={data.heroBannerBackgroundImage.alt}
        className="z-0 hidden h-full w-full object-cover object-right sm:block"
        fill
      />
      <div className="relative z-1 flex h-full w-full flex-col justify-end bg-black/70">
        <div className="max-width-container padding-container flex h-full w-full flex-col justify-end">
          <div className="hero-banner-title">{data.heroBannerTitle}</div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
