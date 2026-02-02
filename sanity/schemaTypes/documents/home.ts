import { Home } from "lucide-react";
import { defineField, defineType } from "sanity";
import { herobanner } from "./home/herobanner";
import { upcomingCourse } from "./home/upcomingCourses";

export const home = defineType({
  name: "home",
  title: "Home",
  type: "document",
  icon: Home,
  groups: [
    { name: "seo", title: "Seo" },
    { name: "herobanner", title: "Herobanner" },
    {name: 'upcomingCourse', title: 'Upcoming Course'},
    {name: 'whyUs', title: 'Why Us'}
  ],
  fields: [
   ...herobanner,
   ...upcomingCourse,
  ],
});
