import Image from "next/image";
import Link from "next/link";
import axios from "axios";

export default async function Hero() {
 const res = await axios.get(
   `${process.env.NEXT_PUBLIC_BASEURL}/products?limit=50`,
 );

 const products = res.data;

 // filter all products with category "adad"
 const adadProducts = products.filter((p: any) => p.category?.slug === "adad");

 // pick two different images
 const firstImage = adadProducts?.[0]?.images?.[0] || "/placeholder.png";

 const secondImage =
   adadProducts?.[4]?.images?.[1] ||
   adadProducts?.[4]?.images?.[0] ||
   "/placeholder.png";

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
              alt="Product Image"
              priority
              width={500}
              height={500}
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              src={secondImage}
              alt="Product Image"
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
            href="/marketplace?category=shoes"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200 border-input"
          >
            Shoes
          </Link>
          <Link
            href="/marketplace?category=adad"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200 border-input"
          >
            Furniture
          </Link>
          <Link
            href="/marketplace?category=kategori-buah"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Accessories
          </Link>
        </div>
      </div>
    </section>
  );
}
