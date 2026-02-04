import { NewsQueryResult } from "@/sanity.types";
import { sanityFetch } from "@/sanity/lib/live";
import { newsQuery } from "@/sanity/lib/queries";
import { notFound, redirect } from "next/navigation";
import HeroBanner from "./components/heroBanner";
import NewsList from "./components/newsList";

export async function generateMetadata() {
  const { data }: {data: NonNullable<NewsQueryResult>} = await sanityFetch({ query: newsQuery });

  if (!data) {
    return {};
  }

  return {
    title: data.seo.seoTitle,
    description: data.seo.seoDescription,
  };
}

export default async function NewsPage() {
  const { data }: {data: NonNullable<NewsQueryResult>} = await sanityFetch({ query: newsQuery });

  if (!data) {
    return notFound()
  }

  return (
    <div className="pt-26">
      <HeroBanner data={data} />
      <NewsList data={data} />
    </div>
  );
}
