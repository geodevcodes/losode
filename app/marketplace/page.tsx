"use client";
import Link from "next/link";
import { Input, Select, Slider } from "antd";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useGetProductsRequest } from "@/services/products.request";
import { useGetCategoriesRequest } from "@/services/categories.request";
import { useRouter } from "next/navigation";
import MarketplaceSkeleton from "@/components/skeletons/MarketPlaceSkeleton";
import ProductImage from "@/components/ProductImage";

export default function ProductListingPage() {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category");
  const router = useRouter();

  const {
    data: products = [],
    isLoading,
    isError,
  } = useGetProductsRequest(50, 0);

  const { data: categories = [] } = useGetCategoriesRequest();

  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sort, setSort] = useState("newest");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory) {
      result = result.filter(
        (product) =>
          product.category?.slug?.toLowerCase() ===
          selectedCategory.toLowerCase(),
      );
    }

    if (searchTerm) {
      result = result.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    result = result.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1],
    );

    if (sort === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, selectedCategory, searchTerm, priceRange, sort]);

  if (isLoading) {
    return <MarketplaceSkeleton />;
  }

  if (isError) {
    return <p className="py-10 text-center">Failed to load products.</p>;
  }

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="border-b border-gray-200 pb-8">
          <p className="text-sm text-gray-500">Home / Marketplace</p>

          <div className="mt-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                Shop Fashion
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500">
                Explore curated fashion products from the Losode marketplace.
              </p>
            </div>

            <div className="w-full md:w-64">
              <Input
                size="large"
                placeholder="Search products"
                prefix={<Search className="h-4 w-4 text-gray-400" />}
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[260px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-900">
                  Category
                </h3>

                <div className="mt-4">
                  <Select
                    size="large"
                    className="w-full"
                    placeholder="Select category"
                    allowClear
                    value={selectedCategory}
                    onChange={(value) => {
                      if (value) {
                        router.push(`/marketplace?category=${value}`);
                      } else {
                        router.push("/marketplace");
                      }
                    }}
                    options={categories.map((category) => ({
                      label: category.name,
                      value: category.slug,
                    }))}
                  />
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-900">
                  Price Range
                </h3>

                <div className="mt-6">
                  <Slider
                    range
                    min={0}
                    max={1000}
                    value={priceRange}
                    onChange={(value) =>
                      setPriceRange(value as [number, number])
                    }
                  />

                  <div className="mt-2 flex justify-between text-sm text-gray-500">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <section>
            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <p className="text-sm text-gray-500">
                Showing {filteredProducts.length} products
              </p>

              <Select
                size="large"
                className="w-full sm:w-52"
                value={sort}
                onChange={setSort}
                options={[
                  { label: "Newest", value: "newest" },
                  { label: "Price: Low to High", value: "price-low" },
                  { label: "Price: High to Low", value: "price-high" },
                ]}
              />
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-6">
              {filteredProducts.map((product) => (
                <Link
                  href={`/product/${product.slug}`}
                  key={product.id}
                  className="group block"
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-gray-100">
                    <ProductImage
                      src={product.images?.[0]}
                      alt={product.title}
                      width={500}
                      height={650}
                      className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
                    />

                    <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700 shadow-sm">
                      {product.category?.name}
                    </span>
                  </div>

                  <div className="mt-4">
                    <h3 className="line-clamp-1 text-sm font-medium text-gray-900">
                      {product.title}
                    </h3>

                    <p className="mt-1 line-clamp-2 text-sm text-gray-500">
                      {product.description}
                    </p>

                    <div className="mt-2 flex items-center justify-between">
                      <p className="text-sm font-semibold text-gray-900">
                        ${product.price}
                      </p>

                      <p className="text-xs text-gray-400">View product</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
