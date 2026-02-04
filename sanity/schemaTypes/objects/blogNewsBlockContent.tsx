import { defineField } from "sanity";

export const commonRichFields = [
  {
    title: "Block",
    type: "block",
    styles: [
      { title: "Normal", value: "normal" },
      { title: "H1", value: "h1" },
      { title: "H2", value: "h2" },
      { title: "H3", value: "h3" },
      { title: "H4", value: "h4" },
      { title: "H5", value: "h5" },
      { title: "H6", value: "h6" },
      { title: "Quote", value: "blockquote" },
    ],
    lists: [
      { title: "Bullet", value: "bullet" },
      { title: "Numbered", value: "number" },
    ],
    marks: {
      decorators: [
        { title: "Strong", value: "strong" },
        { title: "Emphasis", value: "em" },
        {
          title: "Center",
          value: "center",
          icon: () => <b>Center</b>,
          component: ({ children }: { children: React.ReactNode }) => <center>{children}</center>,
        },
      ],
    },
  },
];

export const customTypes = [
  defineField({
    name: "image",
    type: "image",
    options: {
      storeOriginalFilename: true,
      hotspot: true,
    },
    validation: (Rule) => [
      Rule.required(),
      Rule.custom((value) => {
        if (!value?.asset?._ref) {
          return "Image `is` required";
        }
        return true;
      }),
    ],
    fields: [
      defineField({
        name: "alt",
        type: "string",
        title: "Alt",
        validation: (Rule) => Rule.required(),
      }),
    ],
  }),
  defineField({
    name: "audio",
    type: "customAudio",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "youtube",
    type: "youtube",
    validation: (Rule) => Rule.required(),
  }),
];

const blockContentNews = {
  title: "Block Content News",
  name: "blockContentNews",
  type: "array",
  of: [...commonRichFields, ...customTypes],
};

export default blockContentNews;
