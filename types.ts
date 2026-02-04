import { SanityAssetSourceData, SanityImageMetadata, Slug } from "./sanity.types";

export type Code = {
  _type: "code";
  language?: string;
  filename?: string;
  code?: string;
  highlightedLines?: Array<number>;
};

export type AAACoursesQueryResult = Array<{
  _id: string;
  _type: "courses";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  courseDates: string;
  courseTag: {
    _id: string;
    _type: "coursesTag";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    courseTag: string;
    slug: Slug;
  };
  courseTitle: string;
  courseShortDescription: string;
  courseImage: {
    asset: {
      _id: string;
      _type: "sanity.imageAsset";
      _createdAt: string;
      _updatedAt: string;
      _rev: string;
      originalFilename?: string;
      label?: string;
      title?: string;
      description?: string;
      altText?: string;
      sha1hash?: string;
      extension?: string;
      mimeType?: string;
      size?: number;
      assetId?: string;
      uploadId?: string;
      path?: string;
      url?: string;
      metadata?: SanityImageMetadata;
      source?: SanityAssetSourceData;
    } | null;
  };
  coursePlatforms: Array<string>;
  pricing: Array<{
    isActive: boolean;
    title: string;
    description: string;
    price: number;
    pendingAmount: number;
    emailTemplate: {
      _id: string;
      _type: "emailTemplate";
      _createdAt: string;
      _updatedAt: string;
      _rev: string;
      name: string;
      templateCode: Code;
    };
    _type: "price";
    _key: string;
  }>;
  orderRank?: string;
}>;
