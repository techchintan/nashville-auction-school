import { defineField } from "sanity";

export const seo = defineField({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
