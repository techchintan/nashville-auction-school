import { createClient } from "next-sanity";

import { apiVersionAAA, datasetAAA, projectIdAAA } from "../envAAA";
import { tokenAAA } from "./tokenAAA";

export const clientAAA = createClient({
  projectId: projectIdAAA,
  dataset: datasetAAA,
  apiVersion: apiVersionAAA,
  token: tokenAAA,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
