"use client";
import Image from "next/image";
import Link from "next/link";
import { useGetCategoriesRequest } from "@/services/categories.request";

export default function Hero() {
  const { data: categories = [], isLoading } = useGetCategoriesRequest();

  const categoriesWithImages = categories.filter((category) => {
    const image = category.image?.trim();

    return (
      image &&
      image.startsWith("http") &&
      !image.includes("placehold.co") &&
      !image.includes("placeimg.com") &&
      !image.includes("pravatar.cc") &&
      !image.includes("test.com")
    );
  });

  const firstImage = categoriesWithImages?.[0]?.image || "/placeholder.png";
  const secondImage = categoriesWithImages?.[1]?.image || "/placeholder.png";

  const firstCategory = categoriesWithImages?.[0];
  const secondCategory = categoriesWithImages?.[1];
  const thirdCategory = categoriesWithImages?.[2];

  if (!isLoading) {
    return (
      <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
        <div className="mb-8 flex flex-wrap justify-between md:mb-16">
          <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
            <div className="mb-4 h-24 w-full animate-pulse rounded bg-gray-200 md:mb-8" />
            <div className="h-20 max-w-md animate-pulse rounded bg-gray-200" />
          </div>

          <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
            <div className="relative left-12 top-12 z-10 -ml-12 h-[500px] w-[500px] animate-pulse overflow-hidden rounded-lg bg-gray-200 shadow-lg md:left-16 md:top-16 lg:ml-0" />
            <div className="h-[500px] w-[500px] animate-pulse overflow-hidden rounded-lg bg-gray-200 shadow-lg" />
          </div>
        </div>
      </section>
    );
  }

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
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
            <Image
              src={firstImage}
              alt={firstCategory?.name || "Category Image"}
              priority
              width={500}
              height={500}
              className="h-full w-full object-cover object-center"
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
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex h-12 w-74 divide-x overflow-hidden rounded-lg border border-input">
          <Link
            href={`/marketplace?category=${firstCategory?.slug || "shoes"}`}
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200 border-input"
          >
            {firstCategory?.name || "Shoes"}
          </Link>

          <Link
            href={`/marketplace?category=${secondCategory?.slug || "adad"}`}
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200 border-input"
          >
            {secondCategory?.name || "Furniture"}
          </Link>

          <Link
            href={`/marketplace?category=${thirdCategory?.slug || "kategori-buah"}`}
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            {thirdCategory?.name || "Accessories"}
          </Link>
        </div>
      </div>
    </section>
  );
}
