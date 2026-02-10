import { defineField } from "sanity";

export const heroBanner = [
  defineField({
    name: "heroBannerTitle",
    type: "string",
    group: "heroBanner",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "heroBannerBackgroundImage",
    title: "Hero Banner Background Image",
    type: "image",
    group: "heroBanner",
    validation: (Rule) => Rule.required().assetRequired(),
    options: {
      hotspot: true,
    },
    fields: [
      defineField({
        name: "alt",
        type: "string",
        title: "Alt",
        validation: (Rule) => Rule.required(),
      }),
    ],
  }),
];
