import { defineField } from "sanity";

export const registerVipForm = [
  defineField({
    name: "formTitle",
    title: "Form Title",
    type: "string",
    group: "form",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "formButton",
    title: "Form Button",
    type: "link",
    group: "form",
    validation: (Rule) => Rule.required(),
  }),
];
