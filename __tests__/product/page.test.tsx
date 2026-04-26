import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductPage from "@/app/product/[slug]/page";

jest.mock("next/navigation", () => ({
  useParams: () => ({
    slug: "classic-black-hoodie",
  }),
}));

jest.mock("@/services/products.request", () => ({
  useGetProductRequest: jest.fn(() => ({
    data: {
      id: 1,
      title: "Classic Black Hoodie",
      slug: "classic-black-hoodie",
      price: 80,
      description: "A comfortable black hoodie for everyday wear.",
      images: ["https://i.imgur.com/cSytoSD.jpeg"],
      category: {
        id: 1,
        name: "Clothes",
        slug: "clothes",
        image: "https://i.imgur.com/QkIa5tT.jpeg",
      },
    },
    isLoading: false,
    isError: false,
  })),
}));

jest.mock("@/components/ImageGallery", () => {
  return function MockImageGallery() {
    return <div>Image Gallery</div>;
  };
});

jest.mock("@/components/AddToBag", () => {
  return function MockAddToBag() {
    return <button>Add To Cart</button>;
  };
});

jest.mock("@/components/modals/Sheet", () => ({
  Sheet: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

jest.mock("@/components/ShoppingCart", () => {
  return function MockShoppingCart() {
    return <div>Shopping Cart</div>;
  };
});

describe("Product Page", () => {
  test("renders product details properly", () => {
    render(<ProductPage />);

    expect(screen.getByText("Classic Black Hoodie")).toBeInTheDocument();
    expect(screen.getByText("Clothes")).toBeInTheDocument();
    expect(screen.getByText("$80")).toBeInTheDocument();
    expect(screen.getByText("$110")).toBeInTheDocument();
    expect(screen.getByText("2-4 Day Shipping")).toBeInTheDocument();
    expect(
      screen.getByText("A comfortable black hoodie for everyday wear."),
    ).toBeInTheDocument();
  });

  test("renders add to cart and checkout buttons", () => {
    render(<ProductPage />);

    expect(screen.getByText("Add To Cart")).toBeInTheDocument();
    expect(screen.getByText("Checkout now")).toBeInTheDocument();
  });
});
