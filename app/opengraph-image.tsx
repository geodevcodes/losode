import generateOgImage from "@/components/opengraph-image/og-generator";

// Image metadata
export const alt = "About LosodeMart - Modern Fashion & Lifestyle Marketplace";
export const contentType = "image/png";

// Image generation
export default async function Image() {
  return generateOgImage("home", {
    title: "LosodeMart - Modern Fashion & Lifestyle Marketplace",
    description:
      "Discover curated fashion, shoes, accessories, and lifestyle products on LosodeMart. Shop quality items from a modern ecommerce marketplace built for a seamless shopping experience.",
  });
}
