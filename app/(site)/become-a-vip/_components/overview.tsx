import RichText from "@/components/common/rich-text";
import { BecomeAVipPageQueryResult } from "@/sanity.types";
import Image from "next/image";

const Overview = ({
  becomeAVip,
}: {
  becomeAVip: NonNullable<BecomeAVipPageQueryResult>;
}) => {
  return (
    <div className="max-width-container padding-container">
      <h4 className="text-3xl sm:text-[40px] text-black-pearl font-semibold leading-[100%]">
        {becomeAVip.overviewTitle}
      </h4>
      <RichText
        content={becomeAVip.overviewDescription}
        className="prose-ul:list-image-[url(/check.svg)] prose-p:m-0 prose-ul:my-2.5 prose-p:my-1.25 prose-li:text-dull-black"
      />
      <div className="flex bg-medium-orchid/20 gap-2.5 py-3 px-4.5 rounded-[5px] items-start mt-10">
        <Image
          src="/info-circle.svg"
          alt="info icon"
          width={24}
          height={24}
          className="object-contain"
        />
        <RichText
          content={becomeAVip.overviewCourseValidationNote}
          className="prose-p:text-medium-orchid prose-p:m-0 prose-p:text-base prose-p:leading-[100%] prose-p:capitalize"
        />
      </div>
    </div>
  );
};

export default Overview;
