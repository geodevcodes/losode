"use client";
import { FALLBACK_IMAGE, getSafeImage } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

type ProductImageProps = {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

export default function ProductImage({
  src,
  alt,
  width = 500,
  height = 650,
  className,
}: ProductImageProps) {
  const [imageSrc, setImageSrc] = useState(getSafeImage(src));

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setImageSrc(FALLBACK_IMAGE)}
      unoptimized
    />
  );
}
