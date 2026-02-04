import { defineField } from "sanity";

export const aboutPagePoints = [
  defineField({
    name: "aboutPagePoints",
    title: "About Page Points",
    type: "array",
    group: "aboutPagePoints",
    of: [
      {
        type: "object",
        fields: [
          defineField({
            name: "heading",
            title: "Heading",
            type: "string",
            validation: (Rule) => Rule.required(),
          }),
          defineField({
            name: "content",
            title: "Content",
            type: "blockContent",
            validation: (Rule) => Rule.required(),
          }),
          defineField({
            name: "image",
            title: "Image",
            type: "image",
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
        ],
      },
    ],
    validation: (Rule) => Rule.required(),
  }),
];
