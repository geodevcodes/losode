"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { Sheet } from "../modals/Sheet";
import ShoppingCart from "../ShoppingCart";
import { useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { selectCartCount } from "@/redux/features/cartSelectors";

const links = [
  {
    name: "Shoes",
    href: "/marketplace?category=image23fe",
  },
  {
    name: "Furniture",
    href: "/marketplace?category=adad",
  },
  {
    name: "Miscellaneous",
    href: "/marketplace?category=miscellaneous",
  },
  {
    name: "Accessories",
    href: "/marketplace?category=kategori-buah",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category");

  const [showCart, setShowCart] = useState(false);
  const cartCount = useAppSelector(selectCartCount);

  return (
    <>
      <header className="mb-8 border-b border-input">
        <div className="flex items-center justify-between mx-auto max-w-2xl px-4  sm:px-6 lg:max-w-7xl">
          <Link href="/">
            <h1 className="text-2xl md:text-4xl font-bold">
              Losode <span className="text-primary">Mart</span>
            </h1>
          </Link>

          <nav className="hidden gap-12 lg:flex 2xl:ml-16">
            {links?.map((link, idx) => {
              const linkCategory = link.href.split("category=")[1];
              const isActive =
                pathname === "/marketplace" && activeCategory === linkCategory;

              return (
                <div key={idx}>
                  <Link
                    href={link.href}
                    className={
                      isActive
                        ? "text-lg font-semibold text-primary"
                        : "text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                    }
                  >
                    {link.name}
                  </Link>
                </div>
              );
            })}
          </nav>

          <div className="flex divide-x border-r sm:border-l border-input">
            <button
              onClick={() => setShowCart(true)}
              className="relative flex flex-col items-center justify-center gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
            >
              <ShoppingBag />

              {cartCount > 0 && (
                <span className="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
                  {cartCount}
                </span>
              )}

              <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                Cart
              </span>
            </button>
          </div>
        </div>
      </header>

      <Sheet show={showCart} onClose={() => setShowCart(false)}>
        <ShoppingCart setShowCart={setShowCart} />
      </Sheet>
    </>
  );
}
