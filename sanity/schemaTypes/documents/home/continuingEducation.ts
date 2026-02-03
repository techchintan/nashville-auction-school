import { defineField } from "sanity";

export const continuingEducation = [
  defineField({
    name: "continuingEducationBgImage",
    title: "Continuing Education Bg Image",
    type: "image",
    group: "continuingEducation",
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
    name: "continuingEducationHeading",
    title: "Continuing Education Heading",
    type: "string",
    group: "continuingEducation",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "continuingEducationContent",
    title: "Continuing Education Content",
    type: "blockContent",
    group: "continuingEducation",
    validation: (Rule) => Rule.required(),
  }),
];
