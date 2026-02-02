import { defineField } from "sanity";

export const upcomingCourse = [
  defineField({
    name: "upcomingCourseImage",
    title: "Upcoming Course Image",
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
    group: "upcomingCourse",
  }),
  defineField({
    name: "upcomingCourseTitle",
    title: "Upcoming Course Title",
    type: "string",
    validation: (Rule) => Rule.required(),
    group: "upcomingCourse",
  }),
  defineField({
    name: "upcomingCourseButton",
    title: "Upcoming Course Button",
    type: "link",
    validation: (Rule) => Rule.required(),
    group: "upcomingCourse",
  }),
];
