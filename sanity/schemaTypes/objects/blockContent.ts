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
    ],
    lists: [
      { title: "Bullet", value: "bullet" },
      { title: "Numbered", value: "number" },
    ],
    marks: {
      decorators: [
        { title: "Strong", value: "strong" },
        { title: "Emphasis", value: "em" },
      ],
      //   annotations: [
      //     {
      //       title: "URL",
      //       name: "link",
      //       type: "object",
      //       fields: [
      //         {
      //           title: "URL",
      //           name: "href",
      //           type: "url",
      //           validation: (Rule) =>
      //             Rule.uri({
      //               scheme: ["http", "https", "mailto", "tel"],
      //             }),
      //         },
      //       ],
      //     },
      //   ],
    },
  },
];

const blockContent = {
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    ...commonRichFields,
    defineField({
      name: "image",
      type: "image",
      options: {
        hotspot: true,
        storeOriginalFilename: true,
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
    }),
  ],
};

export default blockContent;
