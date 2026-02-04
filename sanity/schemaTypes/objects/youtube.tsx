/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineField, defineType } from "sanity";

const YouTubePreview = (props: any) => {
  const { title: videoId } = props;
  return (
    <iframe
      style={{ width: "100%", aspectRatio: "16 / 9" }}
      src={`https://www.youtube.com/embed/${videoId}`}
    />
  );
};

export const youtube = defineType({
  name: "youtube",
  type: "object",
  title: "YouTube Embed",
  fields: [
    defineField({
      name: "videoId",
      type: "string",
      title: "Enter YouTube video Id",
      description:
        "This is youtube video id. Example: https://www.youtube.com/embed/VIDEO_ID. VIDEO_ID is the id of the video.",
      validation: (validation) => validation.required(),
    }),
  ],
  preview: {
    select: {
      title: "videoId",
    },
  },
  components: {
    preview: YouTubePreview,
  },
});
