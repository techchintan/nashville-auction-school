import { Home } from "lucide-react";
import { defineField, defineType } from "sanity";
import { whyUs } from "./whyUs";
import { herobanner } from "./herobanner";
import { upcomingCourse } from "./upcomingCourses";
import { ourCourses } from "./ourCourses";
import { continuingEducation } from "./continuingEducation";
import { becomeAVip } from "./becomeAVip";
import { solutions } from "./solutions";
import { provider } from "./provider";

export const home = defineType({
  name: "home",
  title: "Home",
  type: "document",
  icon: Home,
  groups: [
    { name: "seo", title: "Seo" },
    { name: "herobanner", title: "Herobanner" },
    { name: "upcomingCourse", title: "Upcoming Course" },
    { name: "whyUs", title: "Why Us" },
    { name: "ourCourses", title: "Our Courses" },
    { name: "continuingEducation", title: "Continuing Education" },
    { name: "becomeAVip", title: "Become A Vip" },
    { name: "solutions", title: "Solutions" },
    { name: "provider", title: "Provider" },
  ],
  fields: [
    defineField({
      name: "seo",
      title: "Seo",
      type: "seo",
      group: "seo",
      validation: (Rule) => Rule.required(),
    }),
    ...herobanner,
    ...upcomingCourse,
    ...whyUs,
    ...ourCourses,
    ...continuingEducation,
    ...becomeAVip,
    ...solutions,
    ...provider,
  ],
});
