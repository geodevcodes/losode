"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ImageGalleryProps {
  images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [bigImage, setBigImage] = useState("");

  useEffect(() => {
    if (images?.length) {
      setBigImage(images[0]);
    }
  }, [images]);

  if (!images?.length || !bigImage) {
    return <div className="rounded-lg bg-gray-100" />;
  }

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={image}
              alt="Product image"
              width={200}
              height={200}
              className="h-full w-full object-cover object-center cursor-pointer"
              onClick={() => setBigImage(image)}
            />
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        <Image
          src={bigImage}
          alt="Product image"
          width={600}
          height={600}
          className="h-full w-full object-cover object-center cursor-pointer"
        />

        <span className="absolute top-0 left-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
          Sale
        </span>
      </div>
    </div>
  );
}
