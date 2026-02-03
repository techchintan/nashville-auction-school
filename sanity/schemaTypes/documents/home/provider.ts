import { defineField } from "sanity";

export const provider = [
  defineField({
    name: "providerBackgroundImage",
    title: "Provider Background Image",
    type: "image",
    group: "provider",
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
  defineField({
    name: "providerHeading",
    title: "Provider Heading",
    type: "string",
    group: "provider",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "providerContent",
    title: "Provider Content",
    type: "blockContent",
    group: "provider",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "providerImage",
    title: "Provider Images",
    type: "image",
    group: "provider",
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
