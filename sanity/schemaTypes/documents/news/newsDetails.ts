import { FileChartColumnIncreasing } from "lucide-react";
import { defineField, defineType } from "sanity";

export const newsDetails = defineType({
  name: "newsDetails",
  title: "News Details",
  type: "document",
  icon: FileChartColumnIncreasing,
  groups: [{ name: "seo", title: "SEO" }],
  fields: [
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
      group: "seo",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "newsCategory",
      title: "News Category",
      type: "reference",
      to: [{ type: "newsCategory" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      validation: (Rule) => [Rule.required(), Rule.max(new Date().toISOString())],
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "desktopHeroBannerImage",
      title: "Desktop Hero Banner Image",
      type: "image",
      validation: (Rule) => Rule.required().assetRequired(),
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alt",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "blockContentNews",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
