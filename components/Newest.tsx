"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useGetProductsRequest } from "@/services/products.request";
import NewestSkeleton from "@/components/skeletons/NewestSkeleton";
import ProductImage from "./ProductImage";

export default function Newest() {
  const limit = 4;
  const offset = 1;

  const {
    data: productsData,
    isLoading,
    isError,
  } = useGetProductsRequest(limit, offset);

  if (isLoading) {
    return <NewestSkeleton />;
  }

  if (isError) {
    return <p className="text-center py-10">Failed to load products.</p>;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 pb-16 pt-8 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Newest products
          </h2>
          <Link
            href="/marketplace"
            className="text-primary flex items-center gap-x-1"
          >
            See All
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {productsData?.map((product) => (
            <Link
              href={`/product/${product.slug}`}
              key={product.id}
              className="group relative block"
            >
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <ProductImage src={product.images?.[0]} alt={product.title} className="h-full" />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">{product.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.category?.name}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  ${product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
