import { Crown } from "lucide-react";
import { defineField, defineType } from "sanity";
import { herobanner } from "./herobanner";
import { registerVipForm } from "./registerVipForm";

export const registerVip = defineType({
  name: "registerVip",
  title: "Register Vip",
  type: "document",
  icon: Crown,
  groups: [
    { name: "seo", title: "Seo" },
    { name: "herobanner", title: "Herobanner" },
    { name: "form", title: "Form" },
  ],
  fields: [
    defineField({
      name: "seo",
      title: "Seo",
      type: "seo",
      group: "seo",
      validation: (Rule) => Rule.required(),
    }),
    ...herobanner,
    ...registerVipForm,
  ],
});
