import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductListingPage from "@/app/marketplace/page";

jest.mock("next/navigation", () => ({
  useSearchParams: () => ({
    get: (key: string) => {
      if (key === "category") return null;
      return null;
    },
  }),
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

jest.mock("@/services/products.request", () => ({
  useGetProductsRequest: jest.fn(() => ({
    data: [
      {
        id: 1,
        title: "Classic Black Hoodie",
        slug: "classic-black-hoodie",
        price: 80,
        description: "A comfortable hoodie for everyday wear.",
        images: ["https://i.imgur.com/cSytoSD.jpeg"],
        category: {
          id: 1,
          name: "Clothes",
          slug: "clothes",
          image: "https://i.imgur.com/QkIa5tT.jpeg",
        },
      },
      {
        id: 2,
        title: "Classic Blue Sneakers",
        slug: "classic-blue-sneakers",
        price: 120,
        description: "Stylish sneakers for daily movement.",
        images: ["https://i.imgur.com/qNOjJje.jpeg"],
        category: {
          id: 2,
          name: "Shoes",
          slug: "shoes",
          image: "https://i.imgur.com/qNOjJje.jpeg",
        },
      },
    ],
    isLoading: false,
    isError: false,
  })),
}));

jest.mock("@/services/categories.request", () => ({
  useGetCategoriesRequest: jest.fn(() => ({
    data: [
      {
        id: 1,
        name: "Clothes",
        slug: "clothes",
        image: "https://i.imgur.com/QkIa5tT.jpeg",
      },
      {
        id: 2,
        name: "Shoes",
        slug: "shoes",
        image: "https://i.imgur.com/qNOjJje.jpeg",
      },
    ],
    isLoading: false,
    isError: false,
  })),
}));

describe("Marketplace Page", () => {
  test("renders marketplace heading and search input", () => {
    render(<ProductListingPage />);

    expect(screen.getByText("Shop Fashion")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search products")).toBeInTheDocument();
  });

  test("renders products properly", () => {
    render(<ProductListingPage />);

    expect(screen.getByText("Classic Black Hoodie")).toBeInTheDocument();
    expect(screen.getByText("Classic Blue Sneakers")).toBeInTheDocument();
    expect(screen.getByText("$80")).toBeInTheDocument();
    expect(screen.getByText("$120")).toBeInTheDocument();
  });

  test("renders product count", () => {
    render(<ProductListingPage />);

    expect(screen.getByText("Showing 2 products")).toBeInTheDocument();
  });
});
