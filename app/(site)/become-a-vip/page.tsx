import { sanityFetch } from "@/sanity/lib/live";
import { becomeAVipPageQuery } from "@/sanity/lib/queries";
import { BecomeAVipPageQueryResult } from "@/sanity.types";
import HeroBanner from "./_components/heroBanner";
import VipDetail from "./_components/vipDetail";
import Overview from "./_components/overview";

export const generateMetadata = async () => {
  const { data: becomeAVip }: { data: NonNullable<BecomeAVipPageQueryResult> } =
    await sanityFetch({ query: becomeAVipPageQuery });

  if (!becomeAVip) {
    return {};
  }

  return {
    title: becomeAVip.seo.seoTitle,
    description: becomeAVip.seo.seoDescription,
  };
};

const BecomeAVip = async () => {
  const { data: becomeAVip }: { data: NonNullable<BecomeAVipPageQueryResult> } =
    await sanityFetch({ query: becomeAVipPageQuery });

  if (!becomeAVip) {
    return {};
  }
  return (
    <div className="pt-26">
      <HeroBanner becomeAVip={becomeAVip} />
      <VipDetail becomeAVip={becomeAVip} />
      <Overview becomeAVip={becomeAVip} />
    </div>
  );
};

export default BecomeAVip;
