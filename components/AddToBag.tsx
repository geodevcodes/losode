"use client";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cartSlice";
import { toast } from "sonner";

export interface ProductCart {
  id: number;
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  slug: string;
}

export default function AddToBag({
  id,
  name,
  description,
  price,
  image,
  slug,
}: ProductCart) {
  const dispatch = useAppDispatch();

  return (
    <button
      className="cursor-pointer bg-primary text-primary-foreground p-3 hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium"
      onClick={() => {
        dispatch(
          addToCart({
            id,
            name,
            description,
            price,
            image,
            slug,
          }),
        );
        toast.success("Product added to cart");
      }}
    >
      Add To Cart
    </button>
  );
}
