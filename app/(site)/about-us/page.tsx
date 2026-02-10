import { AboutPageQueryResult } from "@/sanity.types";
import { sanityFetch } from "@/sanity/lib/live";
import { aboutPageQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import Herobanner from "./_components/herobanner";
import About from "./_components/about";
import GuidedBy from "./_components/guidedBy";
import AboutPagePoints from "./_components/aboutPagePoints";

export const generateMetadata = async () => {
  const { data: aboutPage }: { data: NonNullable<AboutPageQueryResult> } =
    await sanityFetch({ query: aboutPageQuery });

  if (!aboutPage) {
    return {};
  }

  return {
    title: aboutPage.seo.seoTitle,
    description: aboutPage.seo.seoDescription,
  };
};

const AboutPage = async () => {
  const { data: aboutPage }: { data: NonNullable<AboutPageQueryResult> } =
    await sanityFetch({ query: aboutPageQuery });

  if (!aboutPage) {
    return notFound();
  }
  return (
    <div className="pt-26">
      <Herobanner aboutPage={aboutPage} />
      <About aboutPage={aboutPage} />
      <GuidedBy aboutPage={aboutPage} />
      <AboutPagePoints aboutPagePoints={aboutPage.aboutPagePoints} />
    </div>
  );
};

export default AboutPage;
