import HammerHeading from "@/components/common/hammerHeading";
import { SanityImage } from "@/components/common/image";
import { Button } from "@/components/ui/button";
import RichText from "@/components/ui/rich-text";
import { HomePageQueryResult } from "@/sanity.types";
import Link from "next/link";

const WhyUs = ({
  homePage,
}: {
  homePage: NonNullable<HomePageQueryResult>;
}) => {
  return (
    <div className="relative">
      <SanityImage
        src={homePage.whyUsBackgroundImage}
        fill
        alt={homePage.whyUsBackgroundImage.alt}
        className="h-full w-full object-cover opacity-60"
      />
      <div className="max-width-container padding-container relative items-center  z-[1] grid h-full grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <HammerHeading text={homePage.whyUsHeading} />
          <RichText
            content={homePage.whyUsContent}
            className="prose-h3:font-bold"
          />
          <Link href={homePage.whyUsButton.url}>
            <Button variant="primary">{homePage.whyUsButton.label}</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {homePage.whyUsImages.map((image) => (
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

export default WhyUs;
