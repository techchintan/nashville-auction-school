import { sanityFetch } from "@/sanity/lib/live";
import HeroBanner from "./_components/heroBanner";
import { registerVipPageQuery } from "@/sanity/lib/queries";
import { RegisterVipPageQueryResult } from "@/sanity.types";
import RegisterVipForm from "./_components/registerVipForm";

const RegisterVip = async () => {
  const {
    data: registerPage,
  }: { data: NonNullable<RegisterVipPageQueryResult> } = await sanityFetch({
    query: registerVipPageQuery,
  });
  return (
    <div className="pt-26">
      <HeroBanner registerVip={registerPage} />
      <RegisterVipForm registerVip={registerPage} />
    </div>
  );
};

export default RegisterVip;
