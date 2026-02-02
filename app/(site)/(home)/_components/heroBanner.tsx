import { SanityImage } from "@/components/common/image";
import { Button } from "@/components/ui/button";
import { HomePageQueryResult } from "@/sanity.types";
import Link from "next/link";

export const HeroBanner = ({homePage}: {homePage: NonNullable<HomePageQueryResult>}) => {
  return (
    <div className="lg:aspect-none relative aspect-3/5 max-h-137.5 w-full md:max-h-162.5 lg:max-h-[calc(100dvh-24px)]">
      <SanityImage src={homePage.herobannerBgImage} alt={homePage.herobannerBgImage.alt} fill className="object-cover -z-2 "/>
      <div className="absolute inset-0 -z-1 flex h-full w-full flex-col gap-8 bg-black/25" />
        <div className="max-width-container padding-container flex h-full w-full flex-col items-center justify-end gap-8 sm:items-start xl:justify-center">
          <div className="flex flex-col gap-2">
            <p className="text-center text-xl font-bold text-white capitalize sm:text-left sm:text-4xl lg:text-5xl">
              {homePage.herobannerHeading}
            </p>
            <p className="text-center text-5xl leading-none font-bold text-white capitalize sm:text-left sm:text-8xl md:text-9xl lg:text-[150px]">
              {homePage.herobannerSubHeading}
            </p>
            <p className="text-center text-xl font-bold text-white capitalize sm:text-left sm:text-4xl lg:text-5xl">
              {homePage.herobannerTitle}
            </p>
            <p className="text-center text-base text-white sm:text-left sm:font-medium md:text-xl">
              {homePage.herobannerSubTitle}
            </p>
          </div>
          <div className="flex gap-6 flex-col md:flex-row items-center">
            <Link href={homePage.herobannerButton1.url}>
              <Button variant="primary">{homePage.herobannerButton1.label}</Button>
            </Link>
            <Link href={homePage.herobannerButton2.url}>
              <Button
                variant="primary"
                className="bg-transparent border border-white hover:text-vivid-orange hover:border-vivid-orange duration-300"
              >
                {homePage.herobannerButton2.label}
              </Button>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default HeroBanner;
