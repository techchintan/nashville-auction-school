import { defineField, defineType } from "sanity";
import { heroBanner } from "./heroBanner";
export const news = defineType({
  name: "news",
  title: "News",
  type: "document",
  groups: [
    { name: "seo", title: "Seo" },
    { name: "heroBanner", title: "Hero Banner" },
  ],
  fields: [
    defineField({
      name: "seo",
      title: "Seo",
      type: "seo",
      validation: (Rule) => Rule.required(),
      group: "seo",
    }),
    ...heroBanner,
  ],
});
