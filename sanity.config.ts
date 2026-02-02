"use client";

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { apiVersion, dataset, projectId } from "./sanity/env";
import { schemaTypes, singletonType } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";
import { simplerColorInput } from "sanity-plugin-simpler-color-input";
import { media } from "sanity-plugin-media";

const singletonActions = new Set<string>([
  "publish",
  "discardChanges",
  "restore",
]);

const singletonTypes = new Set<string>([...singletonType]);

export default defineConfig({
  name: "nashville-auction-school",
  title: "Nashville Auction School",
  basePath: "/studio",
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
    media(),
    simplerColorInput({
      defaultColorFormat: "rgba",
      defaultColorList: [
        { label: "Vivid Orange", value: "#FF8200" },
        { label: "Black Pearl", value: "#001829" },
        { label: "Dull Black", value: "#161616" },
      ],
      enableSearch: true,
      showColorValue: true,
    }),
  ],
});
