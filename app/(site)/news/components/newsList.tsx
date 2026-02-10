"use client";

import DropdownSelect from "@/components/common/dropdownSelect";
import { SanityImage } from "@/components/common/image";
import AngelDown from "@/icons/angelDown";
import KeyPoint from "@/icons/keyPoint";
import { cn } from "@/lib/utils";
import { NewsQueryResult } from "@/types";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const MAX_INSTRUCTOR_PER_PAGE = 3;
const INITIAL_INSTRUCTOR_PER_PAGE = 6;

interface NewsCategory {
  label: string;
  value: number;
}

export default function NewsList({
  data,
}: {
  data: NonNullable<NewsQueryResult>;
}) {
  const allNewsCategories: NewsCategory[] = [
    {
      label: "All Categories",
      value: data.totalNewsCount,
    },
    ...data.categories.map((category) => ({
      label: category.name,
      value: category.count,
    })),
  ];
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory>(
    allNewsCategories[0],
  );

  const [page, setPage] = useState(INITIAL_INSTRUCTOR_PER_PAGE);

  const newsList = useMemo(() => {
    let list: NonNullable<NewsQueryResult>["newsList"] = [];
    if (selectedCategory.label === "All Categories") {
      list = data.newsList;
    } else {
      list = data.newsList.filter(
        (news) => news.newsCategory.name === selectedCategory.label,
      );
    }
    return list.slice(0, page);
  }, [data.newsList, selectedCategory, page]);

  const handleLoadMore = () => {
    setPage((prev) => {
      if (prev + MAX_INSTRUCTOR_PER_PAGE < data.newsList.length) {
        return prev + MAX_INSTRUCTOR_PER_PAGE;
      }
      return data.newsList.length;
    });
  };

  useEffect(() => {
    setPage(INITIAL_INSTRUCTOR_PER_PAGE);
  }, [selectedCategory]);

  return (
    <div className="max-width-container padding-container">
      <div className="xxl:grid-cols-4! grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="xxl:col-span-1 sticky top-26 hidden h-fit lg:col-span-1 lg:block">
          <p className="text-black-pearl w-full p-3 text-center text-xl font-bold capitalize">
            Categories
          </p>
          <div>
            {allNewsCategories.map((newsCategory, index) => (
              <div
                key={index}
                onClick={() => setSelectedCategory(newsCategory)}
                className={cn(
                  "cursor-pointer border-l-2 pl-2",
                  selectedCategory.label === newsCategory.label
                    ? "border-vivid-orange"
                    : "border-shiny-white",
                )}
              >
                <div
                  className={cn(
                    "ml-4 flex items-center gap-2 p-3",
                    selectedCategory.label === newsCategory.label &&
                      "bg-shiny-white",
                  )}
                >
                  <KeyPoint className="fill-vivid-orange stroke-vivid-orange h-6 min-h-6 w-6 min-w-6" />
                  <p
                    className={cn(
                      "text-black-pearl line-clamp-1 text-sm font-normal capitalize",
                      selectedCategory.label === newsCategory.label &&
                        "font-semibold",
                    )}
                  >
                    {newsCategory.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="xxl:col-span-1 h-fit lg:col-span-1 lg:hidden">
          <DropdownSelect
            menuItems={allNewsCategories.map((newsCategory) => ({
              label: newsCategory.label,
              value: newsCategory.value,
            }))}
            placeHolder="Select Category"
            selectedOption={selectedCategory}
            onSelect={(value) => {
              setSelectedCategory(
                allNewsCategories.find(
                  (newsCategory) => newsCategory.label === value,
                )!,
              );
            }}
            label="Categories"
          />
        </div>
        <div className="xxl:grid-cols-3! xxl:col-span-3! col-span-1 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-2">
          {newsList.map((news) => (
            <Link
              href={`/news/${news.slug.current}`}
              className="col-span-1 flex flex-1 flex-col rounded-md shadow-[0px_25px_40px_0px_#CBCBCB40]"
              key={news._id}
            >
              <SanityImage
                src={news.desktopHeroBannerImage}
                alt={news.desktopHeroBannerImage.alt}
                className="flex aspect-square rounded-md object-cover"
                fromAAA
                width={776}
                height={776}
              />
              <div className="flex flex-col gap-3.5 p-2.5">
                <div className="flex flex-col">
                  <p className="text-xl font-bold text-black">{news.title}</p>
                </div>
                <p className="text-dark-text font-unbuntu-sans line-clamp-4 text-base leading-5.5 capitalize">
                  {news.plainContent}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="xxl:col-start-2! xxl:col-span-3! col-span-1 col-start-1 lg:col-span-2 lg:col-start-2 mt-10">
          {newsList.length < selectedCategory.value && (
            <div className="flex items-center gap-6.5">
              <div className="bg-vibrant-silver h-px flex-1" />
              <button
                className="flex cursor-pointer items-center gap-2 text-base text-black-pearl"
                onClick={handleLoadMore}
              >
                Load More
                <AngelDown />
              </button>
              <div className="bg-vibrant-silver h-px flex-1" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
