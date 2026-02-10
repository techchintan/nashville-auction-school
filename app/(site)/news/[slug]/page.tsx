import { newsDetailQuery } from "@/sanity/lib/queries";
import { redirect } from "next/navigation";
import HeroBanner from "./components/heroBanner";
import NewsDetails from "./components/newsDetails";
import { newsQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { sanityFetchAAA } from "@/sanity/lib/liveAAAA";
import { NewsDetailQueryResult, NewsQueryResult } from "@/types";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const { data }: {data: NonNullable<NewsDetailQueryResult>} = await sanityFetchAAA({
    query: newsDetailQuery,
    params: { slug },
  });
  if (!data) {
    return {};
  }

  return {
    title: data?.seo?.seoTitle || data?.title || "News",
    description: data?.seo?.seoDescription || undefined,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_DOMAIN_URL || ""}/news/${slug}`,
    },
  };
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const { data }: {data: NonNullable<NewsDetailQueryResult>} = await sanityFetchAAA({
    query: newsDetailQuery,
    params: { slug },
  });

  if (!data) {
    redirect("/news");
  }

  return (
    <div className="pt-26">
      <HeroBanner data={data} />
      <NewsDetails data={data} />
    </div>
  );
}

export async function generateStaticParams() {
  const data = await client.fetch<NonNullable<NewsQueryResult>>(newsQuery);

  if (!data || !Array.isArray(data.newsList)) {
    return [];
  }

  return data.newsList.map((news: NonNullable<NewsQueryResult>["newsList"][number]) => ({
    slug: news.slug.current,
  }));
}
