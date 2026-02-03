import { SanityImage } from "@/components/common/image";
import { AboutPageQueryResult } from "@/sanity.types";

const Herobanner = ({
  aboutPage,
}: {
  aboutPage: NonNullable<AboutPageQueryResult>;
}) => {
  return (
    <div className="relative aspect-3/4 max-h-150 w-full sm:aspect-auto sm:h-150 sm:max-h-150 flex items-end justify-start">
      <SanityImage
        src={aboutPage.herobannerBgImage}
        alt={aboutPage.herobannerBgImage.alt}
        fill
        className="object-cover -z-2"
      />
      <div className="bg-linear-to-r from-black to-black/50 absolute  w-full h-full brightness-10 -z-1" />
      <div className="max-width-container padding-container w-full">
        <h1 className="text-white font-bold text-[48px] text-center md:text-left md:text-[96px] leading-[100%]">
          {aboutPage.herobannerTitle}
        </h1>
      </div>
    </div>
  );
};

export default Herobanner;
