import HammerHeading from "@/components/common/hammerHeading";
import { SanityImage } from "@/components/common/image";
import { Button } from "@/components/ui/button";
import RichText from "@/components/common/rich-text";
import { HomePageQueryResult } from "@/sanity.types";
import Link from "next/link";

const Solutions = ({
  homePage,
}: {
  homePage: NonNullable<HomePageQueryResult>;
}) => {
  return (
    <div className="relative">
      <SanityImage
        src={homePage.solutionsBackgroundImage}
        alt={homePage.solutionsBackgroundImage.alt}
        fill
        className="object-cover -z-1 opacity-50"
      />
      <div className="max-width-container padding-container pb-0! lg:py-0!">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
          <div className="lg:py-16 lg:col-span-3">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <HammerHeading text={homePage.solutionsHeading} />
                <RichText content={homePage.solutionsContent} />
              </div>
              <Link href={homePage.solutionsButton.url}>
                <Button variant="primary">
                  {homePage.solutionsButton.label}
                </Button>
              </Link>
            </div>
          </div>
          <div className="h-full lg:col-start-4 lg:col-span-3 xl:col-start-5 xl:col-span-2 flex  items-end shrink-0">
            <SanityImage
              src={homePage.solutionsImage}
              alt={homePage.solutionsImage.alt}
              width={100}
              height={100}
              className="w-full h-auto object-contain "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
