"use client";
import Image from "next/image";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "@/redux/features/cartSlice";
import {
  selectCartCount,
  selectCartItems,
  selectCartTotal,
} from "@/redux/features/cartSelectors";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";

export default function ShoppingCart({
  setShowCart,
}: {
  setShowCart: (value: boolean) => void;
}) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector(selectCartItems);
  const cartCount = useAppSelector(selectCartCount);
  const totalPrice = useAppSelector(selectCartTotal);

  return (
    <div>
      <div className="sm:max-w-lg bg-white h-[100vh] flex flex-col">
        <h4 className="font-semibold text-xl">Shopping Cart</h4>

        <div className="h-full flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 divide-y divide-gray-200">
              {cartCount === 0 ? (
                <h1 className="py-6">You don&apos;t have any items</h1>
              ) : (
                cartItems.map((entry) => (
                  <li key={entry.id} className="flex py-6">
                    <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <Image
                        src={entry.image}
                        alt={entry.name}
                        width={100}
                        height={100}
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>{entry.name}</h3>
                          <p className="ml-4">${entry.price}</p>
                        </div>

                        <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                          {entry.description}
                        </p>
                      </div>

                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => dispatch(decreaseQuantity(entry.id))}
                            className="font-medium text-primary hover:text-primary/80"
                          >
                            -
                          </button>

                          <p className="text-gray-500">QTY:{entry.quantity}</p>

                          <button
                            type="button"
                            onClick={() => dispatch(increaseQuantity(entry.id))}
                            className="font-medium text-primary hover:text-primary/80"
                          >
                            +
                          </button>
                        </div>

                        <div className="flex">
                          <button
                            type="button"
                            onClick={() => dispatch(removeFromCart(entry.id))}
                            className="font-medium text-primary hover:text-primary/80"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal: </p>
              <p>${totalPrice}</p>
            </div>

            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes are calculated at checkout.
            </p>

            <div className="mt-6">
              <button
                onClick={() => {
                  setShowCart(false);
                  router.push("/checkout");
                }}
                disabled={cartCount === 0}
                className="w-full bg-primary text-primary-foreground p-3 hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium"
              >
                Checkout
              </button>
            </div>

            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                OR
                <button
                  onClick={() => setShowCart(false)}
                  className="text-primary p-3 inline-flex items-center justify-center text-sm font-medium"
                >
                  Continue Shopping
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
