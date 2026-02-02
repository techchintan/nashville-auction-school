import { BookMarkedIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const course = defineType({
  name: "course",
  title: "Course",
  type: "document",
  icon: BookMarkedIcon,
  fields: [
    defineField({
      name: "courseTitle",
      title: "Course Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
