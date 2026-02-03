import { defineField } from "sanity";

export const becomeAVip = [
  defineField({
    name: "becomeAVipBgImage",
    title: "Become A Vip Bg Image",
    type: "image",
    group: "becomeAVip",
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
    name: "becomeAVipHeading",
    title: "Become A Vip Heading",
    type: "string",
    group: "becomeAVip",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "becomeAVipContent",
    title: "Become A Vip Content",
    type: "blockContent",
    group: "becomeAVip",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "becomeAVipButton",
    title: "Become A Vip Button",
    type: "link",
    group: "becomeAVip",
    validation: (Rule) => Rule.required(),
  }),
];
