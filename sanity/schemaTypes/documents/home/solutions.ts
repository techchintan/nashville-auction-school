import { defineField } from "sanity";

export const solutions = [
  defineField({
    name: "solutionsBackgroundImage",
    title: "Solutions Background Image",
    type: "image",
    group: "solutions",
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
    name: "solutionsHeading",
    title: "Solutions Heading",
    type: "string",
    group: "solutions",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "solutionsContent",
    title: "Solutions Content",
    type: "blockContent",
    group: "solutions",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "solutionsButton",
    title: "Solutions Button",
    type: "link",
    group: "solutions",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "solutionsImage",
    title: "Solutions Images",
    type: "image",
    group: "solutions",
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
