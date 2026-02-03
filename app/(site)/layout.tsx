import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import { SettingsQueryResult } from "@/sanity.types";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { settingsQuery } from "@/sanity/lib/queries";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data }: { data: NonNullable<SettingsQueryResult> } =
    await sanityFetch({ query: settingsQuery });
  return (
    <>
      <Header settings={data} />
      <main>{children}</main>
      <Footer settings={data} />
      <SanityLive />
    </>
  );
}
