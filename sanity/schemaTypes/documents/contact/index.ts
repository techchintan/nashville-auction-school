import { defineField, defineType } from "sanity";
import { form } from "./form";
import { heroBanner } from "./heroBanner";
import { Contact } from "lucide-react";
export const contact = defineType({
  name: "contact",
  title: "Contact",
  type: "document",
  icon: Contact,
  groups: [
    { name: "seo", title: "Seo" },
    { name: "heroBanner", title: "Hero Banner" },
    { name: "form", title: "Form" },
  ],
  fields: [
    defineField({
      name: "seo",
      title: "Seo",
      type: "seo",
      validation: (Rule) => Rule.required(),
      group: "seo",
    }),
    ...heroBanner,
    ...form,
  ],
});
