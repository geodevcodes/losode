"use client";
import Image from "next/image";
import Link from "next/link";
import { useGetCategoriesRequest } from "@/services/categories.request";
import { isValidCategory } from "@/lib/utils";

export default function Hero() {
  const { data: categories = [], isLoading } = useGetCategoriesRequest();
  const categoriesWithImages = categories.filter(isValidCategory);

  const firstImage =
    categoriesWithImages?.[0]?.image || "/assets/placeholder.jpg";
  const secondImage =
    categoriesWithImages?.[1]?.image || "/assets/placeholder.jpg";

  const firstCategory = categoriesWithImages?.[0];
  const secondCategory = categoriesWithImages?.[1];
  const thirdCategory = categoriesWithImages?.[2];

  return (
    <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
            Top Fashion for a top price!
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
            We sell only the most exclusive and high quality products for you.
            We are the best so come and shop with us.
          </p>
        </div>
        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          {isLoading ? (
            <>
              <div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer relative left-12 top-12 z-10 -ml-12 h-[500px] w-[500px] animate-pulse overflow-hidden rounded-lg bg-gray-200 shadow-lg md:left-16 md:top-16 lg:ml-0" />
              <div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer h-[500px] w-[500px] animate-pulse overflow-hidden rounded-lg bg-gray-200 shadow-lg" />
            </>
          ) : (
            <>
              <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
                <Image
                  src={firstImage}
                  alt={firstCategory?.name || "Category Image"}
                  className="h-full w-full object-cover object-center"
                  width={500}
                  height={500}
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/PZxPQAIogM0nyRNiQAAAABJRU5ErkJggg=="
                />
              </div>

              <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                <Image
                  src={secondImage}
                  alt={secondCategory?.name || "Category Image"}
                  className="h-full w-full object-cover object-center"
                  width={500}
                  height={500}
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/PZxPQAIogM0nyRNiQAAAABJRU5ErkJggg=="
                />
              </div>
            </>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex h-12 w-74 divide-x overflow-hidden rounded-lg border border-input">
          <Link
            href={`/marketplace?category=${firstCategory?.slug || "shoes"}`}
            className="capitalize flex w-1/3 min-w-0 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200 border-input"
          >
            <span className="truncate max-w-[8ch] block">
              {firstCategory?.name || "Shoes"}
            </span>
          </Link>

          <Link
            href={`/marketplace?category=${secondCategory?.slug || "adad"}`}
            className="capitalize flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200 border-input max-w-[10ch]"
          >
            <span className="truncate max-w-[8ch] block">
              {secondCategory?.name || "Furniture"}
            </span>
          </Link>

          <Link
            href={`/marketplace?category=${thirdCategory?.slug || "kategori-buah"}`}
            className="capitalize flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200 max-w-[10ch]"
          >
            <span className="truncate max-w-[8ch] block">
              {thirdCategory?.name || "Accessories"}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
