"use client";

import { Button } from "@/components/ui/button";
import Speaker from "@/icons/speaker";
import Link from "next/link";

const courses = ['Apr 24, 27, 2025 (hybrid)', 'Aug 07, 10 - June 6 (hybrid)', 'Nov 13-20, 2025 (in-person)']

const UpcomingCourses = () => {
  return (
    <div className="bg-black-pearl">
      <div className="max-width-container padding-container flex flex-col items-center gap-6 py-5! md:flex-row md:gap-10">
        <div className="flex w-fit items-center gap-1">
          <Speaker color="#FF8200"/>
          <p className="text-xl font-semibold text-vivid-orange uppercase">Upcoming Courses</p>
        </div>
        <div className="flex w-full flex-1 items-center overflow-hidden">
          <div className="no-scrollbar flex w-full flex-col items-center gap-6 md:animate-[marquee_10s_linear_infinite] md:flex-row md:gap-10">
            {courses.map((course, index) => (
              <p key={index} className="text-xl whitespace-nowrap text-vivid-orange">
                {course}
              </p>
            ))}
          </div>
        </div>
        <Link href="/register">
          <Button variant='primary' className="w-full border text-vivid-orange border-vivid-orange bg-vivid-orange/20">Register Now</Button>
        </Link>
      </div>
    </div>
  );
};

export default UpcomingCourses;
