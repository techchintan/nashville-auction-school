import { defineField, defineType } from "sanity";
import { heroBanner } from "./heroBanner";
import { overview } from "./overview";
import { vipDetail } from "./vipDetail";
import { ChessKing } from "lucide-react";

export const becomeAVip = defineType({
  name: "becomeAVip",
  title: "Become A Vip",
  type: "document",
  icon: ChessKing,
  groups: [
    { name: "seo", title: "SEO" },
    { name: "heroBanner", title: "Hero Banner" },
    { name: "vipDetail", title: "Vip Detail" },
    { name: "overview", title: "Overview" },
  ],
  fields: [
    defineField({
      name: "seo",
      type: "seo",
      group: "seo",
      validation: (Rule) => Rule.required(),
    }),
    ...heroBanner,
    ...vipDetail,
    ...overview,
  ],
});
