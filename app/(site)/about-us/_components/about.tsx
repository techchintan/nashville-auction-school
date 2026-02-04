import HammerHeading from "@/components/common/hammerHeading";
import { SanityImage } from "@/components/common/image";
import RichText from "@/components/ui/rich-text";
import { AboutPageQueryResult } from "@/sanity.types";

const About = ({
  aboutPage,
}: {
  aboutPage: NonNullable<AboutPageQueryResult>;
}) => {
  return (
    <div className="max-width-container padding-container py-0!">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="py-20 lg:col-span-3 flex flex-col gap-4">
          <HammerHeading text={aboutPage.aboutHeading} />
          <RichText content={aboutPage.aboutContent} />
        </div>
        <div className="relative hidden lg:block lg:col-span-2">
          <SanityImage
            src={aboutPage.aboutImage}
            alt={aboutPage.aboutImage.alt}
            fill
            className="min-w-122.5 h-full! object-cover opacity-10 object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
