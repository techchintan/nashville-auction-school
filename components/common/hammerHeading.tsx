import Harmer from "@/icons/harmer";

const HammerHeading = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="shrink-0">
        <Harmer />
      </div>
      <h2 className="text-vivid-orange text-[24px] sm:text-[28px] md:text-4xl uppercase sm:shrink-0 whitespace-break-spaces">
        {text}
      </h2>
      <div className="bg-vivid-orange h-0.5 sm:w-full w-0 max-w-51.5 shrink" />
    </div>
  );
};

export default HammerHeading;
