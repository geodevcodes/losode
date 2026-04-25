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
import {
  Lock,
  ShieldCheck,
  ShoppingBag,
  LayoutGrid,
  CircleDot,
} from "lucide-react";

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
      window.location.href = "/checkout/success";
    },
    onClose: () => {
      toast.info("Payment cancelled");
    },
  };

  const isReady = !!name && !!email && totalPrice > 0;

  return (
    <div className="bg-background flex items-center justify-center px-4 mb-32">
      <div className="w-full max-w-3xl">
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground text-center mb-8 font-medium">
          Secure Checkout
        </p>

        {/* Main card shell */}
        <div className="rounded-xl border border-border shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-[1fr_300px]">
          {/* ── LEFT PANEL: Details ── */}
          <div className="bg-card px-8 py-10 flex flex-col gap-8">
            <div>
              <h1 className="text-3xl font-serif text-card-foreground leading-tight tracking-tight mb-1">
                Your
                <span className="italic text-muted-foreground font-serif ml-2">
                  Details
                </span>
              </h1>
              <p className="text-sm text-muted-foreground">
                Complete your information to proceed with payment.
              </p>
            </div>

            {/* ============ Form fields =========== */}
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] uppercase tracking-[0.18em] font-medium text-muted-foreground">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="w-full bg-background border border-input rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all duration-150 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] uppercase tracking-[0.18em] font-medium text-muted-foreground">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="jane@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full bg-background border border-input rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all duration-150 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-3 flex-wrap mt-auto pt-2">
              <div className="flex items-center gap-2 bg-muted rounded-lg px-3 py-2">
                <Lock className="w-3 h-3 text-muted-foreground" />
                <span className="text-[11px] text-muted-foreground font-medium">
                  SSL Encrypted
                </span>
              </div>
              <div className="flex items-center gap-2 bg-muted rounded-lg px-3 py-2">
                <ShieldCheck className="w-3 h-3 text-muted-foreground" />
                <span className="text-[11px] text-muted-foreground font-medium">
                  PCI Compliant
                </span>
              </div>
            </div>
          </div>

          {/* ── RIGHT PANEL: Order summary ── */}
          <div className="bg-muted/40 border-t md:border-t-0 md:border-l border-border px-6 py-10 flex flex-col">
            <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-muted-foreground mb-6">
              Order Summary
            </p>
            <div className="flex-1 flex flex-col gap-2.5 mb-6">
              {cartItems.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center gap-3 py-10">
                  <div className="w-11 h-11 rounded-full border border-dashed border-border flex items-center justify-center">
                    <ShoppingBag className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <p className="text-xs text-muted-foreground text-center">
                    Your cart is empty
                  </p>
                </div>
              ) : (
                cartItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-card rounded-lg px-3 py-2.5 border border-border"
                  >
                    <div className="w-7 h-7 rounded-md bg-accent flex items-center justify-center shrink-0">
                      <LayoutGrid className="w-3 h-3 text-accent-foreground" />
                    </div>
                    <span className="flex-1 text-[13px] text-card-foreground truncate">
                      {item.name}
                    </span>
                    {item.price != null && (
                      <span className="text-[12px] text-muted-foreground tabular-nums font-medium">
                        ${item.price.toFixed(2)}
                      </span>
                    )}
                  </div>
                ))
              )}
            </div>

            {/* Divider */}
            <div className="h-px bg-border mb-5" />

            {/* ===========  Totals ===========  */}
            <div className="flex flex-col gap-2 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">Items</span>
                <span className="text-xs text-muted-foreground tabular-nums">
                  {cartItems.length}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-foreground">
                  Total
                </span>
                <span className="text-xl font-serif font-medium text-foreground tabular-nums">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
            </div>

            {/* =========== Pay button =========== */}
            <PaystackButton
              {...componentProps}
              disabled={!name || !email || totalPrice === 0}
              className="w-full py-3.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold tracking-wide transition-all duration-150 hover:opacity-90 hover:-translate-y-px active:scale-[0.99] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:active:scale-100 shadow-md"
            />
            <div className="flex items-center justify-center gap-2 mt-4">
              <CircleDot className="w-3 h-3 text-chart-2" />
              <span className="text-[11px] text-muted-foreground">
                Secured by Paystack
              </span>
            </div>

            {/* Readiness hint */}
            {!isReady && (
              <p className="text-center text-[11px] text-muted-foreground mt-3 leading-relaxed">
                {!name && !email
                  ? "Enter your name and email to continue"
                  : !name
                    ? "Enter your name to continue"
                    : !email
                      ? "Enter your email to continue"
                      : "Add items to your cart to continue"}
              </p>
            )}
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center text-[11px] text-muted-foreground mt-6 leading-relaxed">
          By completing your purchase you agree to our
          <span className="text-primary underline underline-offset-2 cursor-pointer hover:opacity-80 transition-opacity">
            Terms of Service
          </span>
          and
          <span className="text-primary underline underline-offset-2 cursor-pointer hover:opacity-80 transition-opacity">
            Privacy Policy
          </span>
          .
        </p>
      </div>
    </div>
  );
}
