import { defineField } from "sanity";

export const about = [
  defineField({
    name: "aboutHeading",
    title: "About Heading",
    type: "string",
    group: "aboutSection",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "aboutContent",
    title: "About Content",
    type: "blockContent",
    group: "aboutSection",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "aboutImage",
    title: "About Image",
    type: "image",
    group: "aboutSection",
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
];
