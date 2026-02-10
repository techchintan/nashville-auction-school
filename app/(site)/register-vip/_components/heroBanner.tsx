import { SanityImage } from "@/components/common/image";
import {
  BecomeAVipPageQueryResult,
  RegisterVipPageQueryResult,
} from "@/sanity.types";

export const HeroBanner = ({
  registerVip,
}: {
  registerVip: NonNullable<RegisterVipPageQueryResult>;
}) => {
  return (
    <div className="relative aspect-3/4 max-h-150 w-full sm:aspect-auto sm:h-150">
      <SanityImage
        src={registerVip.herobannerBgImage}
        alt={registerVip.herobannerBgImage.alt}
        className="z-0 h-full w-full object-cover"
        fill
      />
      <div className="relative z-1 flex h-full w-full flex-col justify-end bg-eternity/60">
        <div className="max-width-container padding-container flex h-full w-full flex-col justify-end">
          <div className="hero-banner-title">{registerVip.herobannerTitle}</div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
