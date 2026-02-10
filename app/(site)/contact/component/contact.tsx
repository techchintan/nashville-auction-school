import { ContactQueryResult } from "@/sanity.types";
import ContactForm from "./form";
import Link from "next/link";

const Contact = ({ data }: { data: NonNullable<ContactQueryResult> }) => {
  return (
    <section className="max-width-container padding-container flex flex-col gap-5 bg-white md:gap-11">
      <div className="mx-auto flex max-w-217.5 flex-col gap-3 md:gap-2">
        <div className="text-center text-2xl font-semibold text-black-pearl md:text-[40px]">
          {data.formTitle}
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-16 md:mt-16 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
        <div className="order-2 col-span-1 md:order-1 xl:col-span-2">
          <ContactForm />
        </div>
        <div className="order-1 col-span-1 md:order-2">
          <div className="flex flex-col gap-3">
            <p className="text-charade text-lg font-medium">
              {data.locationInfoTitle}
            </p>
            <iframe
              src={data.locationMapUrl}
              className="h-75 w-full rounded-lg"
              allowFullScreen
              loading="lazy"
            />
            <p className="text-dull-black mt-1 text-base font-normal md:text-lg">
              {data.physicalAddress}
            </p>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <Link
              href={`tel:${data.phoneNumber}`}
              className="text-vivid-orange flex w-fit items-center gap-2 text-base font-semibold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M7.48322 8.12934C8.01318 9.23311 8.73561 10.2676 9.65052 11.1825C10.5654 12.0974 11.5999 12.8199 12.7037 13.3498C12.7987 13.3954 12.8461 13.4182 12.9062 13.4357C13.1197 13.4979 13.3818 13.4532 13.5626 13.3238C13.6134 13.2874 13.657 13.2438 13.744 13.1568C14.0102 12.8906 14.1433 12.7575 14.2771 12.6705C14.7819 12.3423 15.4326 12.3423 15.9373 12.6705C16.0712 12.7575 16.2043 12.8906 16.4705 13.1568L16.6189 13.3052C17.0235 13.7098 17.2258 13.9122 17.3357 14.1295C17.5543 14.5616 17.5543 15.072 17.3357 15.5041C17.2258 15.7214 17.0235 15.9237 16.6189 16.3284L16.4988 16.4484C16.0956 16.8517 15.8939 17.0533 15.6198 17.2073C15.3156 17.3782 14.8431 17.5011 14.4942 17.5C14.1798 17.4991 13.9649 17.4381 13.5351 17.3161C11.2254 16.6606 9.04595 15.4236 7.22768 13.6054C5.40941 11.7871 4.17249 9.60763 3.51693 7.29792C3.39494 6.86814 3.33395 6.65325 3.33301 6.33882C3.33198 5.98992 3.45484 5.51746 3.62572 5.21327C3.77972 4.93913 3.98135 4.73749 4.38462 4.33423L4.50465 4.2142C4.9093 3.80955 5.11163 3.60722 5.32892 3.49731C5.76108 3.27873 6.27144 3.27873 6.70359 3.49731C6.92089 3.60722 7.12321 3.80954 7.52787 4.2142L7.67625 4.36258C7.94245 4.62878 8.07554 4.76188 8.16257 4.89572C8.49074 5.40046 8.49074 6.05116 8.16257 6.5559C8.07555 6.68974 7.94245 6.82284 7.67625 7.08904C7.58921 7.17608 7.54569 7.2196 7.50926 7.27047C7.37981 7.45126 7.33511 7.71339 7.39734 7.92685C7.41485 7.98692 7.43764 8.0344 7.48322 8.12934Z"
                  stroke="#ff8200"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>{" "}
              {data.phoneNumber}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
