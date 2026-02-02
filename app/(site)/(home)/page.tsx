import { sanityFetch } from "@/sanity/lib/live";
import HeroBanner from "./_components/heroBanner";
import UpcomingCourses from "./_components/upcomingCourses";
import { homePageQuery } from "@/sanity/lib/queries";

const HomePage = async () => {
  const {data: homePage} = await sanityFetch({query: homePageQuery})
  return <div className="pt-26">
    <HeroBanner homePage={homePage}/>
    <UpcomingCourses homePage={homePage}/>
  </div>;
};

export default HomePage;
