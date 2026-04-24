"use client";
import { useState } from "react";
import { PaystackButton } from "react-paystack";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  selectCartItems,
  selectCartTotal,
} from "@/redux/features/cartSelectors";
import { clearCart } from "@/redux/features/cartSlice";
import { toast } from "sonner";

export default function CheckoutPage() {
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector(selectCartItems);
  const totalPrice = useAppSelector(selectCartTotal);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY_TEST as string;

  const componentProps = {
    email,
    amount: totalPrice * 100,
    publicKey,
    text: "Pay Now",
    metadata: {
      name,
      custom_fields: [
        {
          display_name: "Cart Items",
          variable_name: "cart_items",
          value: cartItems.map((item) => item.name).join(", "),
        },
      ],
    },
    onSuccess: () => {
      toast.success("Payment successful");
      dispatch(clearCart());
    },
    onClose: () => {
      toast.info("Payment cancelled");
    },
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="text-2xl font-bold text-gray-900">Checkout</h1>

      <div className="mt-6 space-y-4">
        <input
          type="text"
          placeholder="Full name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full rounded-md border px-4 py-3"
        />

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full rounded-md border px-4 py-3"
        />

        <div className="rounded-md border p-4">
          <p className="font-medium">Order Summary</p>
          <p className="mt-2 text-gray-600">Items: {cartItems.length}</p>
          <p className="mt-1 text-gray-900 font-semibold">
            Total: ${totalPrice}
          </p>
        </div>

        <PaystackButton
          {...componentProps}
          disabled={!name || !email || totalPrice === 0}
          className="w-full rounded-md bg-primary px-4 py-3 font-medium text-white disabled:opacity-50"
        />
      </div>
    </div>
  );
}
