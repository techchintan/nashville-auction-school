import HammerHeading from "@/components/common/hammerHeading";
import { SanityImage } from "@/components/common/image";
import { Button } from "@/components/ui/button";
import RichText from "@/components/ui/rich-text";
import { cn } from "@/lib/utils";
import { HomePageQueryResult } from "@/sanity.types";

const courses = [
  {
    heading: "Educational ",
    title: "Pre-licensing Education (in-person or hybrid)",
    description:
      "Complete the education you need to earn your auctioneer license through flexible in-person or hybrid formats designed for real career preparation.",
  },
  {
    heading: "Educational ",
    title: "Pre-licensing Education (in-person or hybrid)",
    description:
      "Complete the education you need to earn your auctioneer license through flexible in-person or hybrid formats designed for real career preparation.",
  },
  {
    heading: "Educational ",
    title: "Pre-licensing Education (in-person or hybrid)",
    description:
      "Complete the education you need to earn your auctioneer license through flexible in-person or hybrid formats designed for real career preparation.",
  },
  {
    heading: "Educational ",
    title: "Pre-licensing Education (in-person or hybrid)",
    description:
      "Complete the education you need to earn your auctioneer license through flexible in-person or hybrid formats designed for real career preparation.",
  },
  {
    heading: "Educational ",
    title: "Pre-licensing Education (in-person or hybrid)",
    description:
      "Complete the education you need to earn your auctioneer license through flexible in-person or hybrid formats designed for real career preparation.",
  },
];

const OurCourses = ({
  homePage,
}: {
  homePage: NonNullable<HomePageQueryResult>;
}) => {
  return (
    <div className="relative">
      <div className="bg-shiny-white absolute left-0 top-0 w-full h-full opacity-82 -z-1" />
      <SanityImage
        src={homePage.ourCoursesBgImage}
        alt={homePage.ourCoursesBgImage.alt}
        fill
        className="object-cover -z-2"
      />
      <div className="max-width-container padding-container flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <HammerHeading text={homePage.ourCoursesHeading} />
          <RichText
            content={homePage.ourCoursesContent}
            className="max-w-250"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {courses.map((course, index) => (
            <div
              key={index}
              className={cn(
                "border border-shiny-white shadow-md rounded-[10px] overflow-hidden",
                courses.length % 2 !== 0 &&
                  index === courses.length - 1 &&
                  "lg:col-span-2",
              )}
            >
              <div className="w-full min-h-50 bg-gray-400 relative">
                <span className="absolute left-4 top-4 z-1 py-1 px-2 bg-blue-chalk text-grape rounded-[5px] text-sm font-roboto">
                  New
                </span>
              </div>
              <div className="bg-white">
                <div className="pt-6 px-4 pb-4 flex flex-col gap-4">
                  <div className="text-black-pearl">
                    <p className="font-roboto font-medium text-base leading-[110%]">
                      {course.heading}
                    </p>
                    <p className="font-roboto font-bold text-2xl leading-[110%]">
                      {course.title}
                    </p>
                  </div>
                  <p className="text-dull-black leading-6.25 text-base">
                    {course.description}
                  </p>
                </div>
                <div className="p-4">
                  <Button variant="primary" className="w-full">
                    Enroll Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCourses;
