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
