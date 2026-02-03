import HammerHeading from "@/components/common/hammerHeading";
import { SanityImage } from "@/components/common/image";
import { Button } from "@/components/ui/button";
import RichText from "@/components/ui/rich-text";
import { HomePageQueryResult } from "@/sanity.types";
import Link from "next/link";

const BecomeAVip = ({
  homePage,
}: {
  homePage: NonNullable<HomePageQueryResult>;
}) => {
  return (
    <div className="relative">
      <SanityImage
        src={homePage.becomeAVipBgImage}
        alt={homePage.becomeAVipBgImage.alt}
        fill
        className="object-cover -z-1 brightness-40"
      />
      <div className="bg-linear-to-r from-black to-black/50 absolute -z-2 w-full h-full brightness-10" />
      <div className="max-width-container padding-container">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <HammerHeading text={homePage.becomeAVipHeading} />
            <RichText
              content={homePage.becomeAVipContent}
              className="prose-h3:text-white prose-p:text-white"
            />
          </div>
          <Link href={homePage.becomeAVipButton.url}>
            <Button variant="primary">{homePage.becomeAVipButton.label}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BecomeAVip;
