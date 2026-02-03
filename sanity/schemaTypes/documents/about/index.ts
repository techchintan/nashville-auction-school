import { Users2Icon } from "lucide-react";
import { defineField, defineType } from "sanity";
import { herobanner } from "./herobanner";
import { guidedBy } from "./guidedBy";
import { aboutPagePoints } from "./aboutPagePoints";
import { about } from "./about";

export const aboutPage = defineType({
  name: "about",
  title: "About Page",
  type: "document",
  icon: Users2Icon,
  groups: [
    { name: "seo", title: "Seo" },
    { name: "herobanner", title: "Herobanner" },
    { name: "aboutSection", title: "About Section" },
    { name: "guidedBy", title: "Guided By" },
    { name: "aboutPagePoints", title: "About Page Points" },
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
    ...about,
    ...guidedBy,
    ...aboutPagePoints,
  ],
});
