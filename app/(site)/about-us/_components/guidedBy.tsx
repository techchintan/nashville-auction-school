import HammerHeading from "@/components/common/hammerHeading";
import { SanityImage } from "@/components/common/image";
import RichText from "@/components/ui/rich-text";
import { AboutPageQueryResult } from "@/sanity.types";

const GuidedBy = ({aboutPage}: {aboutPage: NonNullable<AboutPageQueryResult>}) => {
  return (
    <div className="relative bg-shiny-white">
      
      <div className="max-width-container padding-container relative items-center  z-1 grid h-full grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <HammerHeading text={aboutPage.guidedByHeading} />
          <RichText
            content={aboutPage.guidedByContent}
            className="prose-h3:font-bold"
          />
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {aboutPage.guidedByImages.map((image) => (
            <div className="flex flex-col" key={image._key}>
              <SanityImage
                src={image.image}
                alt={image.image.alt}
                className="w-full h-auto rounded-md object-cover"
                width={400}
                height={800}
              />
              <div className="py-7">
                <p className="text-center text-base leading-[100%] text-black-pearl font-medium capitalize">
                  {image.name}
                </p>
                <p className="text-center text-base text-black-pearl capitalize">
                  {image.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuidedBy;
