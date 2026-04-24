"use client";
import Image from "next/image";

export default function ShoppingCart({
  setShowCart,
}: {
  setShowCart: (value: boolean) => void;
}) {
  // const {
  //   cartCount,
  //   shouldDisplayCart,
  //   handleCartClick,
  //   cartDetails,
  //   removeItem,
  //   totalPrice,
  //   redirectToCheckout,
  // } = useShoppingCart();

  // async function handleCheckoutClick(event: any) {
  //   event.preventDefault();
  //   try {
  //     const result = await redirectToCheckout();
  //     if (result?.error) {
  //       console.log("result");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <div>
      <div className="sm:max-w-lg bg-white">
        <h4>Shopping Cart</h4>
        <div className="h-full flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 divide-y divide-gray-200">
              {/* {cartCount === 0 ? ( */}
              <h1 className="py-6">You don&apos;t have any items</h1>
              {/* ) : ( */}
              <>
                <li
                  // key={entry?.id}
                  className="flex py-6"
                >
                  <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <Image
                      // src={entry?.image as string}
                      src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      alt="Product image"
                      width={100}
                      height={100}
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          {/* {entry?.name} */}
                          Nike Air Force 1
                        </h3>
                        <p className="ml-4">
                          {/* {entry?.price} */}
                          260
                        </p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                        {/* {entry?.description} */}
                        Lorem ipsum dolor sit amet consectetur adipisicing
                      </p>
                    </div>

                    <div className="flex flex-1 items-end justify-between text-sm">
                      <p className="text-gray-500">QTY:80</p>
                      <div className="flex">
                        <button
                          type="button"
                          // onClick={() => removeItem(entry.id)}
                          className="font-medium text-primary hover:text-primary/80"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </>
              {/* )} */}
            </ul>
          </div>

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal: </p>
              <p>
                {/* ${totalPrice} */}
                900
              </p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes are calculated at checkout.
            </p>
            <div className="mt-6">
              <button
                // onClick={handleCheckoutClick}
                className="w-full"
              >
                Checkout
              </button>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                OR{" "}
                <button
                  // onClick={() => handleCartClick()}
                  onClick={() => setShowCart(false)}
                  className="font-medium text-primary hover:text-primary/80"
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
