import HammerHeading from "@/components/common/hammerHeading";
import { SanityImage } from "@/components/common/image";
import RichText from "@/components/ui/rich-text";
import { HomePageQueryResult } from "@/sanity.types";

const ContinuingEducation = ({
  homePage,
}: {
  homePage: NonNullable<HomePageQueryResult>;
}) => {
  return (
    <div className="relative">
      <SanityImage
        src={homePage.continuingEducationBgImage}
        alt={homePage.continuingEducationBgImage.alt}
        fill
        className="object-cover -z-1 opacity-50"
      />
      <div className="max-width-container padding-container">
        <div className="flex flex-col gap-4">
          <HammerHeading text={homePage.continuingEducationHeading} />
          <RichText content={homePage.continuingEducationContent} />
        </div>
      </div>
    </div>
  );
};

export default ContinuingEducation;
