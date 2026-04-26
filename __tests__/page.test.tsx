import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page";

jest.mock("@/components/Hero", () => {
  return function MockHero() {
    return (
      <div>
        <h1>Top Fashion for a top price!</h1>
        <p>
          We sell only the most exclusive and high quality products for you. We
          are the best so come and shop with us.
        </p>
      </div>
    );
  };
});

jest.mock("@/components/Newest", () => {
  return function MockNewest() {
    return <h2>Our Newest products</h2>;
  };
});

describe("Home Page", () => {
  test("renders hero section properly", () => {
    render(<Home />);

    expect(
      screen.getByText("Top Fashion for a top price!"),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /We sell only the most exclusive and high quality products/i,
      ),
    ).toBeInTheDocument();
  });

  test("renders newest section properly", () => {
    render(<Home />);
    expect(screen.getByText("Our Newest products")).toBeInTheDocument();
  });
});
