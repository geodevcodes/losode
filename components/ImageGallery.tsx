"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FALLBACK_IMAGE, getSafeImage } from "@/lib/utils";

interface ImageGalleryProps {
  images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [bigImage, setBigImage] = useState(FALLBACK_IMAGE);

  useEffect(() => {
    if (images?.length) {
      setBigImage(getSafeImage(images[0]));
    } else {
      setBigImage(FALLBACK_IMAGE);
    }
  }, [images]);

  const safeImages =
    images?.length > 0
      ? images.map((image) => getSafeImage(image))
      : [FALLBACK_IMAGE];

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {safeImages.map((image, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={image}
              alt="Product image"
              width={200}
              height={200}
              className="h-full w-full cursor-pointer object-cover object-center"
              onClick={() => setBigImage(image)}
              onError={(event) => {
                event.currentTarget.src = FALLBACK_IMAGE;
              }}
              unoptimized
            />
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={bigImage}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="h-[100%]"
          >
            <Image
              src={bigImage}
              alt="Product image"
              width={600}
              height={600}
              className="h-full w-full cursor-pointer object-cover object-center"
              onError={() => setBigImage(FALLBACK_IMAGE)}
              unoptimized
            />
          </motion.div>
        </AnimatePresence>

        <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
          Sale
        </span>
      </div>
    </div>
  );
}
