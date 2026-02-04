import HammerHeading from "@/components/common/hammerHeading";
import { SanityImage } from "@/components/common/image";
import RichText from "@/components/ui/rich-text";
import { cn } from "@/lib/utils";
import { AboutPageQueryResult } from "@/sanity.types";

const AboutPagePoints = ({
  aboutPagePoints,
}: {
  aboutPagePoints: NonNullable<AboutPageQueryResult>["aboutPagePoints"];
}) => {
  return (
    <div className="max-width-container">
      {aboutPagePoints.map((point, index) => (
        <div className="grid grid-cols-1 lg:grid-cols-2 " key={point._key}>
          <div className={cn('w-full h-full',index%2!==0 && "lg:order-2")}>
            <SanityImage
              src={point.image}
              alt={point.image.alt}
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
          <div className={cn("px-4 pt-6 pb-12 md:px-8 place-content-center",index%2!==0 && "lg:order-1")}>
            <div className="flex flex-col gap-4">
              <HammerHeading text={point.heading} />
              <RichText
                content={point.content}
                className="prose-h3:font-bold"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutPagePoints;
