import { defineField } from "sanity";

export const form = [
  defineField({
    name: "formTitle",
    title: "Form Title",
    type: "string",
    validation: (Rule) => Rule.required(),
    group: "form",
  }),
  defineField({
    name: "getInTouchHeading",
    title: "Get In Touch Heading",
    type: "string",
    validation: (Rule) => Rule.required(),
    group: "form",
  }),
  defineField({
    name: "getInTouchDescription",
    title: "Get In Touch Description",
    type: "text",
    validation: (Rule) => Rule.required(),
    group: "form",
  }),
  defineField({
    name: "locationInfoTitle",
    title: "Location Info Title",
    type: "string",
    validation: (Rule) => Rule.required(),
    group: "form",
  }),
  defineField({
    name: "locationMapUrl",
    title: "Location Map URL",
    type: "url",
    validation: (Rule) => Rule.required(),
    group: "form",
  }),
  defineField({
    name: "physicalAddress",
    title: "Physical Address",
    type: "string",
    validation: (Rule) => Rule.required(),
    group: "form",
  }),
  defineField({
    name: "phoneNumber",
    title: "Phone Number",
    type: "string",
    validation: (Rule) => Rule.required(),
    group: "form",
  }),
  defineField({
    name: "email",
    title: "Email",
    type: "string",
    validation: (Rule) => Rule.required(),
    group: "form",
  }),
];
