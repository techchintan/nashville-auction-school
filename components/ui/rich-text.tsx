/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import { PortableText } from "next-sanity";
import Link from "next/link";
import React from "react";
import { SanityImage } from "../common/image";

interface Props {
  content: Array<any> | undefined;
  className?: string;
  highlightedTextClassName?: string;
}

const RichText: React.FC<Props> = ({
  content,
  className,
  highlightedTextClassName,
}) => {
  const combinedClassNames = cn(
    "prose max-w-none prose-h3:text-black-pearl prose-h3:leading-[100%]! prose-h3:text-[24px] sm:prose-h3:text-[30px] md:prose-h3:text-[40px] prose-h3:font-semibold prose-h3:capitalize prose-h3:mb-2 prose-p:mt-4 prose-p:text-base prose-p:text-dull-black prose-p:leading-[25px]",
    className,
  );

  const myPortableTextComponents: any = {
    list: {
      bullet: ({ children }: { children: React.ReactNode }) => (
        <ul className="list-disc">{children}</ul>
      ),
      number: ({ children }: { children: React.ReactNode }) => (
        <ol className="list-decimal">{children}</ol>
      ),
    },
    block: {
      h1: ({ children }: any) => <h1>{children}</h1>,
      h2: ({ children }: any) => <h2>{children}</h2>,
      h3: ({ children }: any) => <h3>{children}</h3>,
      h4: ({ children }: any) => <h4>{children}</h4>,
      h5: ({ children }: any) => <h5>{children}</h5>,
      h6: ({ children }: any) => <h6>{children}</h6>,
      normal: (props: any) => {
        if (props.children[0] === "") return <br></br>;
        return <p>{props.children}</p>;
      },
    },
    marks: {
      link: ({
        value,
        children,
      }: {
        value: any;
        children: React.ReactNode;
      }) => {
        const internal = /^\/(?!\/)/.test(value.href);

        if (internal) return <Link href={value.href}>{children}</Link>;

        return (
          <a href={value.href} target="_blank" rel="noreferrer noopener">
            {children}
          </a>
        );
      },
      textColor: ({
        value,
        children,
      }: {
        value: any;
        children: React.ReactNode;
      }) => <span style={{ color: value.value }}>{children}</span>,
      highlightedText: ({ children }: { children: React.ReactNode }) => (
        <span
          className={cn(
            "text-lg font-bold sm:text-xl md:text-2xl",
            highlightedTextClassName,
          )}
        >
          {children}
        </span>
      ),
      logo: () => (
        <span className="text-[55px] sm:text-[75px] md:text-[110px]">∓</span>
      ),
    },
    types: {
      image: ({ value }: any) => {
        return (
          <figure>
            {value && (
              <SanityImage
                src={value}
                alt={value.alt || "Nashville Auction School"}
                width={1000}
                height={1000}
                className="m-0 max-h-125 w-full object-contain"
              />
            )}
            {value.alt && (
              <figcaption className="border-safety-yellow text-ink-black border-l-2 pl-2 text-sm">
                {value.alt}
              </figcaption>
            )}
          </figure>
        );
      },
    },
  };

  return (
    <div className={combinedClassNames}>
      <PortableText value={content} components={myPortableTextComponents} />
    </div>
  );
};

export default RichText;
