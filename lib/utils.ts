// Utility function to validate category images
export const isValidCategory = (category: { image?: string }) => {
  const image = category.image?.trim();
  return (
    image &&
    image.startsWith("http") &&
    !image.includes("placehold.co") &&
    !image.includes("placeimg.com") &&
    !image.includes("pravatar.cc") &&
    !image.includes("test.com")
  );
};

// Utility function to validate product images
export const FALLBACK_IMAGE = "/assets/placeholder.jpg";

export function getSafeImage(image?: string | null) {
  if (!image) return FALLBACK_IMAGE;
  const invalidDomains = ["placeimg.com", "freepik.es", "lufian.com"];
  const isInvalidDomain = invalidDomains.some((domain) =>
    image.includes(domain),
  );
  if (isInvalidDomain) return FALLBACK_IMAGE;
  try {
    const url = new URL(image);
    const validExtensions = [".jpg", ".jpeg", ".png", ".webp", ".avif"];
    const hasValidExtension = validExtensions.some((ext) =>
      url.pathname.toLowerCase().includes(ext),
    );
    if (!hasValidExtension && !image.includes("picsum.photos")) {
      return FALLBACK_IMAGE;
    }
    return image;
  } catch {
    return FALLBACK_IMAGE;
  }
}
