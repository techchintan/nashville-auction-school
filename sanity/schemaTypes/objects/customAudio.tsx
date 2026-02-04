/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineField, defineType } from "sanity";

const AudioPreview = (props: any) => {
  const { file: url } = props;
  return <audio style={{ width: "100%" }} src={url} controls />;
};

export const customAudio = defineType({
  name: "customAudio",
  type: "object",
  title: "Audio Embed",
  fields: [
    defineField({
      name: "audio",
      type: "file",
      options: {
        accept: ".mp3",
      },
      title: "Audio File",
      validation: (validation) => validation.required(),
    }),
    defineField({
      name: "alt",
      type: "string",
      title: "Audio Alt",
      validation: (validation) => validation.required(),
    }),
  ],
  preview: {
    select: {
      file: "audio.asset.url",
    },
    prepare: ({ file }) => {
      return {
        title: "Audio",
        file: file,
      };
    },
  },
  components: {
    preview: AudioPreview,
  },
});
