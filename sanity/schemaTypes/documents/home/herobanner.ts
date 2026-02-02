import { defineField } from "sanity";

export const herobanner = [
  defineField({
    name: "seo",
    title: "Seo",
    type: "seo",
    group: "seo",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "herobannerBgImage",
    title: "herobanner Bg Image",
    type: "image",
    group: "herobanner",
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
    name: "herobannerHeading",
    title: "Hero Banner Heading",
    type: "string",
    group: "herobanner",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "herobannerSubHeading",
    title: "Hero Banner Sub Heading",
    type: "string",
    group: "herobanner",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "herobannerTitle",
    title: "Hero Banner Title",
    type: "string",
    group: "herobanner",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "herobannerSubTitle",
    title: "Hero Banner Sub Title",
    type: "string",
    group: "herobanner",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "herobannerButton1",
    title: "Hero Banner Button 1",
    type: "link",
    group: "herobanner",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "herobannerButton2",
    title: "Hero Banner Button 2",
    type: "link",
    group: "herobanner",
    validation: (Rule) => Rule.required(),
  }),
];
