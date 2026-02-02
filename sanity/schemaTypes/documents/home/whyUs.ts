import { defineField } from "sanity";

export const whyUs = [
  defineField({
    name: "whyUsHeading",
    title: "Why Us Heading",
    type: "string",
    group: "whyUs",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "whyUsTitle",
    title: "Why Us Title",
    type: "string",
    group: "whyUs",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "whyUsSubTitle",
    title: "Why Us Sub Title",
    type: "string",
    group: "whyUs",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "whyUsCopyText",
    title: "Why Us Copy Text",
    type: "text",
    group: "whyUs",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "whyUsButton",
    title: "Why Us Button",
    type: "button",
    group: "whyUs",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "whyUsImages",
    title: "Why Us Images",
    type: "array",
    group: "whyUs",
    validation: (Rule) => [Rule.required()],
    of: [
      {
        type: "object",
        fields: [
          defineField({
            name: "image",
            title: 'Image',
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
            title: 'Name',
            type: "string",
            validation: (Rule) => Rule.required(),
          }),
          defineField({
            name: "designation",
            title: 'Designation',
            type: "string",
            validation: (Rule) => Rule.required(),
          }),
        ],
      },
    ],
  }),
  defineField({
    name: "whyUsBackgroundImage",
    title: 'Why Us Background Image',
    type: "image",
    group: "whyUs",
    validation: (Rule) => [
      Rule.custom((value) => {
        if (!value?.asset?._ref) {
          return "Image is required";
        }
        return true;
      }),
      Rule.required(),
    ],
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
