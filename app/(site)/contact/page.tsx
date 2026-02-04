import { contactQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { notFound } from "next/navigation";
import { ContactQueryResult } from "@/sanity.types";
import HeroBanner from "./component/heroBanner";
import Contact from "./component/contact";

export async function generateMetadata() {
  const { data }: {data: NonNullable<ContactQueryResult>} = await sanityFetch({ query: contactQuery });

  if (!data) {
    return {};
  }

  return {
    title: data.seo.seoTitle,
    description: data.seo.seoDescription,
  };
}

export default async function ContactPage() {
  const { data }: {data: NonNullable<ContactQueryResult>} = await sanityFetch({ query: contactQuery });

  if (!data) {
    return notFound()
  }

  return (
    <div className="pt-26">
      <HeroBanner data={data} />
      <Contact data={data} />
    </div>
  );
}
