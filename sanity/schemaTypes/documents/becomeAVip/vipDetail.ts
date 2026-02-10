import { defineField } from "sanity";

export const vipDetail = [
  defineField({
    name: "vipDetailTitle",
    title: "Vip Detail Title",
    type: "string",
    group: "vipDetail",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "vipDetailDescription",
    title: "Vip Detail Description",
    type: "text",
    group: "vipDetail",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "vipDetailInfoTitle",
    title: "Vip Detail Info Title",
    type: "string",
    group: "vipDetail",
    validation: (Rule) => Rule.required(),
  }),
  
  defineField({
    name: "vipDetailInfoPoints",
    title: "Vip Detail Info Points",
    type: "array",
    group: "vipDetail",
    of: [
      {
        type: "object",
        fields: [
          defineField({
            name: "icon",
            title: "Icon",
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
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
          }),
          defineField({
            name: "description",
            title: "Description",
            type: "text",
            validation: (Rule) => Rule.required(),
          }),
        ],
      },
    ],
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "vipDetailButton",
    title: "vip Detail Button",
    type: "link",
    group: "vipDetail",
    validation: (Rule) => Rule.required(),
  }),
];
