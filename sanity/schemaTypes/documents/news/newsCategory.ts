import { FileBoxIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const newsCategory = defineType({
  name: "newsCategory",
  title: "News Category",
  type: "document",
  icon: FileBoxIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
