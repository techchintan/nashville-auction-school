import RichText from "@/components/common/rich-text";
import { NewsDetailQueryResult } from "@/sanity.types";

export default function NewsDetails({
  data,
}: {
  data: NonNullable<NewsDetailQueryResult>;
}) {
  return (
    <div className="max-width-container padding-container">
      <h1 className="text-black-pearl mb-5 text-[24px] font-bold md:text-[40px] lg:text-center">
        {data.title}
      </h1>
      <RichText content={data.content} />
    </div>
  );
}
