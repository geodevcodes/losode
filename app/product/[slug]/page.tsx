"use client";
import AddToBag from "@/components/AddToBag";
import ImageGallery from "@/components/ImageGallery";
import { Sheet } from "@/components/modals/Sheet";
import ShoppingCart from "@/components/ShoppingCart";
import ProductDetailsSkeleton from "@/components/skeletons/ProductDetailsSkeleton";
import { useGetProductRequest } from "@/services/products.request";
import { Star, Truck } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { data: productData, isLoading, isError } = useGetProductRequest(slug);

  const [showCart, setShowCart] = useState(false);

  if (isLoading) {
    return <ProductDetailsSkeleton />;
  }

  if (isError || !productData) {
    return <p className="text-center py-10">Failed to load product.</p>;
  }

  return (
    <>
      <div className="bg-white mb-24">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <ImageGallery images={productData.images} />
            <div className="md:py-8">
              <div className="mb-2 md:mb-3">
                <span className="mb-0.5 inline-block text-gray-500">
                  {productData.category?.name}
                </span>
                <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                  {productData.title}
                </h2>
              </div>
              <div className="mb-6 flex items-center gap-3 md:mb-10">
                <button className="rounded-full gap-x-2 bg-primary text-primary-foreground p-2 px-3 hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap">
                  <span className="text-sm">4.2</span>
                  <Star className="w-5 h-5" />
                </button>

                <span className="text-sm text-gray-500 transition duration-100">
                  56 Ratings
                </span>
              </div>
              <div className="mb-4">
                <div className="flex items-end gap-2">
                  <span className="text-xl font-bold text-gray-800 md:text-2xl">
                    ${productData.price}
                  </span>
                  <span className="mb-0.5 text-red-500 line-through">
                    ${productData.price + 30}
                  </span>
                </div>
                <span className="text-sm text-gray-500">
                  Incl. Vat plus shipping
                </span>
              </div>
              <div className="mb-6 flex items-center gap-2 text-gray-500">
                <Truck className="w-6 h-6" />
                <span className="text-sm">2-4 Day Shipping</span>
              </div>
              <div className="flex gap-2.5">
                <AddToBag
                  id={productData.id}
                  currency="USD"
                  description={productData.description}
                  image={productData.images?.[0]}
                  name={productData.title}
                  price={productData.price}
                  slug={productData.slug}
                />
                <button
                  onClick={() => setShowCart(true)}
                  className="cursor-pointer bg-accent hover:bg-accent/80 p-3 inline-flex items-center justify-center gap-x-2 whitespace-nowrap rounded-md text-sm font-medium"
                >
                  Checkout now
                </button>
              </div>
              <p className="mt-12 text-base text-gray-500 tracking-wide">
                {productData.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Sheet show={showCart} onClose={() => setShowCart(false)}>
        <ShoppingCart setShowCart={setShowCart} />
      </Sheet>
    </>
  );
}
