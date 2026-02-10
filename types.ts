import {
  internalGroqTypeReferenceTo,
  SanityAssetSourceData,
  SanityImageCrop,
  SanityImageHotspot,
  SanityImageMetadata,
  Seo,
  Slug,
} from "./sanity.types";

export type Code = {
  _type: "code";
  language?: string;
  filename?: string;
  code?: string;
  highlightedLines?: Array<number>;
};

export type Youtube = {
  _type: "youtube";
  videoId: string;
};

export type CustomAudio = {
  _type: "customAudio";
  audio: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.fileAsset";
    };
    media?: unknown;
    _type: "file";
  };
  alt: string;
};

export type BlockContentNews = Array<
  | {
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: "span";
        _key: string;
      }>;
      style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
      listItem?: "bullet" | "number";
      markDefs?: Array<{
        href?: string;
        _type: "link";
        _key: string;
      }>;
      level?: number;
      _type: "block";
      _key: string;
    }
  | {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      media?: unknown;
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt: string;
      _type: "image";
      _key: string;
    }
  | ({
      _key: string;
    } & CustomAudio)
  | ({
      _key: string;
    } & Youtube)
>;

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

export type NewsQueryResult = {
  categories: Array<{
    _id: string;
    _type: "newsCategory";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    name: string;
    count: number;
  }>;
  newsList: Array<{
    _id: string;
    _type: "newsDetails";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    seo: Seo;
    newsPlatforms: Array<string>;
    newsCategory: {
      _id: string;
      _type: "newsCategory";
      _createdAt: string;
      _updatedAt: string;
      _rev: string;
      name: string;
    };
    date: string;
    author: string;
    title: string;
    slug: Slug;
    desktopHeroBannerImage: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      media?: unknown;
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt: string;
      mobileHeroBannerImage: {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        media?: unknown;
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        _type: "image";
      };
      _type: "image";
    };
    content: BlockContentNews;
    plainContent: string;
  }>;
  totalNewsCount: number;
};
// Variable: newsDetailQuery
// Query: *[_type == "newsDetails" && slug.current == $slug][0]{    ...,}
export type NewsDetailQueryResult = {
  _id: string;
  _type: "newsDetails";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  seo: Seo;
  newsCategory: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "newsCategory";
  };
  date: string;
  author: string;
  title: string;
  slug: Slug;
  desktopHeroBannerImage: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt: string;
    mobileHeroBannerImage: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      media?: unknown;
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
    _type: "image";
  };
  content: BlockContentNews;
} | null;
