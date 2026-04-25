"use client";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center px-4">
      <h1 className="text-3xl font-bold text-green-600">
        Payment Successful 🎉
      </h1>
      <p className="mt-4 text-gray-600">
        Thank you for your purchase. Your order has been confirmed.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-md bg-primary px-6 py-3 text-white"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
