import { defineField } from "sanity";

export const guidedBy = [
  defineField({
    name: "guidedByHeading",
    title: "Guided By Heading",
    type: "string",
    group: "guidedBy",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "guidedByContent",
    title: "Guided By Content",
    type: "blockContent",
    group: "guidedBy",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "guidedByImages",
    title: "Guided By Images",
    type: "array",
    group: "guidedBy",
    validation: (Rule) => [Rule.required()],
    of: [
      {
        type: "object",
        fields: [
          defineField({
            name: "image",
            title: "Image",
            type: "image",
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
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule) => Rule.required(),
          }),
          defineField({
            name: "designation",
            title: "Designation",
            type: "string",
            validation: (Rule) => Rule.required(),
          }),
        ],
      },
    ],
  }),
];
