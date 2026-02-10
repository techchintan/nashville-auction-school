import { sanityFetch } from "@/sanity/lib/live";
import HeroBanner from "./_components/heroBanner";
import UpcomingCourses from "./_components/upcomingCourses";
import { coursesQuery, homePageQuery } from "@/sanity/lib/queries";
import { CoursesQueryResult, HomePageQueryResult } from "@/sanity.types";
import WhyUs from "./_components/whyUs";
import OurCourses from "./_components/ourCourses";
import ContinuingEducation from "./_components/continuingEducation";
import BecomeAVip from "./_components/becomeAVip";
import Solutions from "./_components/solutions";
import Provider from "./_components/provider";
import { sanityFetchAAA } from "@/sanity/lib/liveAAAA";
import { AAACoursesQueryResult } from "@/types";

export const generateMetadata = async () => {
  const { data: homePage }: { data: NonNullable<HomePageQueryResult> } =
    await sanityFetch({ query: homePageQuery });

  if (!homePage) {
    return {};
  }

  return {
    title: homePage.seo.seoTitle,
    description: homePage.seo.seoDescription,
  };
};

const HomePage = async () => {
  const { data: homePage }: { data: NonNullable<HomePageQueryResult> } =
    await sanityFetch({ query: homePageQuery });
  const { data: courses }: { data: NonNullable<AAACoursesQueryResult> } =
    await sanityFetchAAA({
      query: coursesQuery,
    });
  return (
    <div className="pt-26">
      <HeroBanner homePage={homePage} />
      <UpcomingCourses homePage={homePage} courses={courses} />
      <WhyUs homePage={homePage} />
      <OurCourses homePage={homePage} courses={courses} />
      <ContinuingEducation homePage={homePage} />
      <BecomeAVip homePage={homePage} />
      <Solutions homePage={homePage} />
      <Provider homePage={homePage} />
    </div>
  );
};

export default HomePage;
