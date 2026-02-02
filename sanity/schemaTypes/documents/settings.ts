import { Settings } from "lucide-react";
import { defineField, defineType } from "sanity";

export const settings = defineType({
  name: "settings",
  title: "Settings",
  type: "document",
  icon: Settings,
  groups: [
    { name: "header", title: "Header" },
    { name: "footer", title: "Footer" },
  ],
  fields: [
    defineField({
      name: "headerLogo",
      title: "Header Logo",
      type: "image",
      group: "header",
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
    defineField({
      name: "headerLinks",
      title: "Header Links",
      type: "array",
      group: "header",
      of: [{ type: "link" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "headerButton",
      title: "Header Button",
      type: "string",
      group: "header",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "footerLogo",
      title: "Footer Logo",
      type: "image",
      group: "footer",
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
    defineField({
      name: "footerLinkGroups",
      title: "Footer Link Groups",
      type: "array",
      group: "footer",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "groupLinks",
              title: "Group Links",
              type: "array",
              of: [{ type: "link" }],
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "contactPhone",
      title: "Contact Phone",
      type: "number",
      group: "footer",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "contactEmail",
      title: "Contact Email",
      type: "string",
      group: "footer",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "contactDescription",
      title: "Contact Description",
      type: "string",
      group: "footer",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
