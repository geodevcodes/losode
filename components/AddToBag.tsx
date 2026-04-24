"use client";
// import { useShoppingCart } from "use-shopping-cart";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
  price_id: string;
}

export default function AddToBag({
  name,
  description,
  price,
  currency,
  price_id,
  image,
}: ProductCart) {
  // const { addItem, handleCartClick } = useShoppingCart();
  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    price_id: price_id,
    // image: urlFor(image).url(),
  };
  return (
    <button
      // onClick={() => {
      //   addItem(product), handleCartClick();
      // }}
    >
      Add To Cart
    </button>
  );
}
