import { defineField } from "sanity";

export const herobanner = [
  defineField({
    name: "herobannerBgImage",
    title: "herobanner Bg Image",
    type: "image",
    group: "herobanner",
    options: {
      hotspot: true,
    },
    validation: (Rule) => Rule.required().assetRequired(),
    fields: [
      defineField({
        name: "alt",
        title: "Alt Text",
        type: "string",
        validation: (Rule) => Rule.required(),
      }),
    ],
  }),
  defineField({
    name: "herobannerTitle",
    title: "Herobanner Title",
    type: "string",
    group: "herobanner",
    validation: (Rule) => Rule.required(),
  }),
];
