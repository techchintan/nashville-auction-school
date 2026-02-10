import { defineField } from "sanity";

export const herobanner = [
  defineField({
    name: "herobannerBgImage",
    title: "Herobanner Bg Image",
    type: "image",
    group: "herobanner",
    fields: [
      defineField({
        name: "alt",
        title: "Alt text",
        type: "string",
        validation: (Rule) => Rule.required(),
      }),
    ],
    validation: (Rule) => Rule.required().assetRequired(),
  }),
  defineField({
    name: "herobannerTitle",
    title: "Herobannner Title",
    type: "string",
    group: "herobanner",
    validation: (Rule) => Rule.required(),
  }),
];
