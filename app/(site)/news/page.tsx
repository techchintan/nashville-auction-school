import { newsPageQuery, newsQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import HeroBanner from "./components/heroBanner";
import NewsList from "./components/newsList";
import { sanityFetchAAA } from "@/sanity/lib/liveAAAA";
import { NewsQueryResult } from "@/types";
import { NewsPageQueryResult } from "@/sanity.types";
import { sanityFetch } from "@/sanity/lib/live";

export async function generateMetadata() {
  const { data }: { data: NonNullable<NewsPageQueryResult> } =
    await sanityFetch({ query: newsPageQuery });

  if (!data) {
    return {};
  }

  return {
    title: data.seo.seoTitle,
    description: data.seo.seoDescription,
  };
}

export default async function NewsPage() {
  const { data: newsData }: { data: NonNullable<NewsQueryResult> } =
    await sanityFetchAAA({ query: newsQuery });

  const { data: newsPage }: { data: NonNullable<NewsPageQueryResult> } =
    await sanityFetch({ query: newsPageQuery });

  if (!newsData || !newsPage) {
    return notFound();
  }

  return (
    <div className="pt-26">
      <HeroBanner data={newsPage} />
      <NewsList data={newsData} />
    </div>
  );
}
