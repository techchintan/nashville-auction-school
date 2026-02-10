import { defineField } from "sanity";

export const overview = [
  defineField({
    name: "overviewTitle",
    title: "Overview Title",
    type: "string",
    group: "overview",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "overviewDescription",
    title: "Overview Description",
    type: "blockContent",
    group: "overview",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "overviewCourseValidationNote",
    title: "Overview Course Validation Note",
    type: "blockContent",
    group: "overview",
    validation: (Rule) => Rule.required(),
  }),
];
