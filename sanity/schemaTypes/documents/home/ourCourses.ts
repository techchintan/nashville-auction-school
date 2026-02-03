import { defineField } from "sanity";

export const ourCourses = [
  defineField({
    name: "ourCoursesHeading",
    title: "Our Courses Heading",
    type: "string",
    group: "ourCourses",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "ourCoursesContent",
    title: "Our Courses Content",
    type: "blockContent",
    group: "ourCourses",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "ourCoursesBgImage",
    title: "Our Courses Bg Image",
    type: "image",
    group: "ourCourses",
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
];
