"use client";

import { SanityImage } from "@/components/common/image";
import { Button } from "@/components/ui/button";
import { HomePageQueryResult } from "@/sanity.types";
import { AAACoursesQueryResult } from "@/types";
import Link from "next/link";

const UpcomingCourses = ({
  homePage,
  courses,
}: {
  homePage: NonNullable<HomePageQueryResult>;
  courses: NonNullable<AAACoursesQueryResult>;
}) => {
  return (
    <div className="bg-black-pearl">
      <div className="max-width-container padding-container flex flex-col items-center gap-6 py-5! md:flex-row md:gap-10">
        <div className="flex w-fit items-center gap-1">
          <SanityImage
            src={homePage.upcomingCourseImage}
            alt={homePage.upcomingCourseImage.alt}
            width={26}
            height={26}
            className="object-contain"
          />
          <p className="text-xl font-semibold text-vivid-orange uppercase">
            {homePage.upcomingCourseTitle}
          </p>
        </div>
        <div className="flex w-full flex-1 items-center overflow-hidden">
          <div className="no-scrollbar flex w-full flex-col items-center gap-6 md:animate-[marquee_10s_linear_infinite] md:flex-row md:gap-10">
            {courses.map((course) => (
              <p
                key={course._id}
                className="text-xl whitespace-nowrap text-vivid-orange"
              >
                {course.courseDates}
              </p>
            ))}
          </div>
        </div>
        <Link href={homePage.upcomingCourseButton.url}>
          <Button
            variant="primary"
            className="w-full border text-vivid-orange border-vivid-orange bg-vivid-orange/20"
          >
            {homePage.upcomingCourseButton.label}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default UpcomingCourses;
