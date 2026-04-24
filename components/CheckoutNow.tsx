"use client";
// import { useShoppingCart } from "use-shopping-cart";

export default function CheckoutNow({
  name,
  description,
  price,
  currency,
  image,
  price_id,
}: any) {
  // const { checkoutSingleItem } = useShoppingCart();
  // function buyNow(priceId: string) {
  //   checkoutSingleItem(priceId);
  // }

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
      //   buyNow(product?.price_id);
      // }}
    >
      Add To Cart
    </button>
  );
}
