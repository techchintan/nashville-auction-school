import HammerHeading from "@/components/common/hammerHeading";
import { SanityImage } from "@/components/common/image";
import RichText from "@/components/common/rich-text";
import { HomePageQueryResult } from "@/sanity.types";

const Provider = ({
  homePage,
}: {
  homePage: NonNullable<HomePageQueryResult>;
}) => {
  return (
    <div className="relative">
      <SanityImage
        src={homePage.providerBackgroundImage}
        alt={homePage.providerBackgroundImage.alt}
        fill
        className="object-cover -z-1 opacity-18"
      />
      <div className="max-width-container padding-container">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <HammerHeading text={homePage.providerHeading} />
            <RichText content={homePage.providerContent} />
          </div>
        </div>
        <SanityImage
          src={homePage.providerImage}
          alt={homePage.providerImage.alt}
          width={100}
          height={100}
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Provider;
