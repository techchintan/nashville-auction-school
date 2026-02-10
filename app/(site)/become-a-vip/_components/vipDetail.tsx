import { SanityImage } from "@/components/common/image";
import RichText from "@/components/common/rich-text";
import { Button } from "@/components/ui/button";
import { BecomeAVipPageQueryResult } from "@/sanity.types";
import Link from "next/link";

const VipDetail = ({
  becomeAVip,
}: {
  becomeAVip: NonNullable<BecomeAVipPageQueryResult>;
}) => {
  return (
    <div className="bg-shiny-white">
      <div className="max-width-container padding-container">
        <div className="flex flex-col gap-12.5">
          <div className="flex flex-col gap-3.5 text-center text-balance">
            <h2 className="text-black-pearl text-3xl sm:text-[40px] font-semibold leading-[100%] ">
              {becomeAVip.vipDetailTitle}
            </h2>
            <p className="text-base leading-6.25 text-dull-black">
              {becomeAVip.vipDetailDescription}
            </p>
          </div>
          <div className="flex flex-col gap-7.5">
            <h4 className="text-xl sn:text-2xl text-black-pearl font-bold leading-[100%]">
              {becomeAVip.vipDetailInfoTitle}
            </h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {becomeAVip.vipDetailInfoPoints.map((point) => (
                <div
                  key={point._key}
                  className="flex gap-5 p-5 bg-white rounded-[5px] shadow-[0px_25px_40px_0px_#CBCBCB40] items-start"
                >
                  <SanityImage
                    src={point.icon}
                    alt={point.icon.alt}
                    width={48}
                    height={48}
                    className="object-contain shrink-0"
                  />
                  <div className="flex flex-col gap-2">
                    <b className="text-[18px] leading-6 -tracking-[0.31px]">
                      {point.title}
                    </b>
                    <p>{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href={becomeAVip.vipDetailButton.url}>
              <Button variant="primary" className="w-fit">
                {becomeAVip.vipDetailButton.label}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VipDetail;
