import createImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { datasetAAA, projectIdAAA } from "../envAAA";

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({
  projectId: projectIdAAA,
  dataset: datasetAAA,
});

export const urlForAAA = (source: SanityImageSource) => {
  return builder.image(source);
};
