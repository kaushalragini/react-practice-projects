/* eslint-disable jest/no-conditional-expect */
/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import {
  render,
  fireEvent,
  screen,
  cleanup,
  act,
  getByTestId,
  findByTestId,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import Restaurants from "../Component/Restaurants.jsx";
import RestaurantCard from "../Component/RestaurantCard";
import Pagination from "../Component/Pagination.jsx";
import fixture from "./fixtureA.json";
import fixtureB from "./fixtureB.json";

function getRestaurantElements(container) {
  return {
    name: getByTestId(container, "restaurant-card-name"),
    type: getByTestId(container, "restaurant-card-type"),
    image: getByTestId(container, "restaurant-card-image"),
    price: getByTestId(container, "restaurant-card-price"),
    rating: getByTestId(container, "restaurant-card-rating"),
    votes: getByTestId(container, "restaurant-card-votes"),
  };
}

// cleanup
beforeEach(() => {
  cleanup();
});

beforeAll(() => {
  global.score = 1;
  console.log("Rest score to: 1");
});

jest.setTimeout(60000);
try {
  describe("Test cases", () => {
    console.log("Resetting score to 1");
    it("should render RestaurantCard.jsx correctly", () => {
      {
        expect(RestaurantCard).toBeDefined();
        render(
          <RestaurantCard
            {...{
              name: "Fortey",
              image: "https://picsum.photos/200",
              type: "fast_food",
              price_starts_from: 400,
              number_of_votes: 89,
              rating: 3,
            }}
          />
        );
        const { name, type, rating, votes, price, image } =
          getRestaurantElements(screen.getByTestId("restaurant-card"));
        expect(name.textContent.trim()).toBe("Fortey");
        expect(type.textContent.trim()).toBe("fast_food");
        expect(price.textContent.trim()).toBe("400");
        expect(votes.textContent.trim()).toBe("89");
        expect(image).toHaveAttribute("src", "https://picsum.photos/200");
        expect(rating.textContent.trim()).toBe("3");
      }
      cleanup();
      {
        render(
          <RestaurantCard
            {...{
              image: "https://picsum.photos/200",
              name: "MacAless",
              number_of_votes: 831,
              price_starts_from: 1350,
              rating: 4,
              type: "fine_dining",
            }}
          />
        );
        const { name, type, rating, votes, price, image } =
          getRestaurantElements(screen.getByTestId("restaurant-card"));
        expect(name.textContent.trim()).toBe("MacAless");
        expect(type.textContent.trim()).toBe("fine_dining");
        expect(price.textContent.trim()).toBe("1350");
        expect(votes.textContent.trim()).toBe("831");
        expect(image).toHaveAttribute("src", "https://picsum.photos/200");
        global.score += 2;
      }
    });
    it("loading indicator should work", async () => {
      cleanup();
      render(<Restaurants />);
      expect(screen.getByTestId("loading-indicator").textContent.trim()).toBe(
        "...Loading"
      );
      const container = await screen.findByTestId("restaurants-container");
      expect(container.children.length).toBe(10);
      global.score += 1;
    });

    it("should render Restaurants page", async () => {
      cleanup();
      render(<Restaurants />);
      expect(screen.getByTestId("loading-indicator").textContent.trim()).toBe(
        "...Loading"
      );
      const header = await screen.findByTestId("restaurants-header");
      expect(header.textContent.trim()).toBe("Restaurants List");
      const container = await screen.findByTestId("restaurants-container");
      expect(container.children.length).toBe(10);

      Array.from(container.children).forEach((item, i) => {
        const { name, type, rating, votes, price, image } =
          getRestaurantElements(item);
        const { data } = fixture;
        expect(name.textContent.trim()).toBe(data[i].name);
        expect(type.textContent.trim()).toBe(data[i].type);
        expect(price.textContent.trim()).toBe(
          data[i].price_starts_from.toString()
        );
        expect(votes.textContent.trim()).toBe(
          data[i].number_of_votes.toString()
        );
        expect(image).toHaveAttribute("src", data[i].image);
      });
      global.score += 3;
    });
    it("pagination component should work properly", async () => {
      cleanup();
      render(<Restaurants />);
      expect(screen.getByTestId("loading-indicator").textContent.trim()).toBe(
        "...Loading"
      );
      let header = await screen.findByTestId("restaurants-header");

      // let pageNumBtns = screen.getByTestId("page-container");
      const fn = jest.fn();
      const data = [
        {
          data: { onChange: fn, current: 1, total: 10 },
          tests: [
            () =>
              expect(screen.getByTestId("page-container").children.length).toBe(
                10
              ),
            () =>
              expect(
                screen.getByTestId("page-container").children[0].style
                  .borderColor
              ).toBe("red"),
            () => {
              fireEvent.click(screen.getByTestId("page-container").children[1]);
              expect(fn).toBeCalledTimes(1);
            },
          ],
        },
        {
          data: { onChange: fn, current: 2, total: 5 },
          tests: [
            () =>
              expect(screen.getByTestId("page-container").children.length).toBe(
                5
              ),
            () =>
              expect(
                screen.getByTestId("page-container").children[1].style
                  .borderColor
              ).toBe("red"),
            () => {
              fireEvent.click(screen.getByTestId("page-container").children[2]);
              expect(fn).toBeCalledTimes(2);
            },
          ],
        },
        {
          data: { onChange: fn, current: 3, total: 3 },
          tests: [
            () =>
              expect(screen.getByTestId("page-container").children.length).toBe(
                3
              ),
            () =>
              expect(
                screen.getByTestId("page-container").children[2].style
                  .borderColor
              ).toBe("red"),
            () => {
              fireEvent.click(screen.getByTestId("page-container").children[2]);
              expect(fn).toBeCalledTimes(3);
            },
          ],
        },
      ];

      data.forEach(({ data, tests }) => {
        cleanup();
        render(<Pagination {...data} />);
        tests.forEach((t) => t());
      });
      global.score += 2;
    });

    it("should work with pagination correctly", async () => {
      cleanup();
      render(<Restaurants />);
      expect(screen.getByTestId("loading-indicator").textContent.trim()).toBe(
        "...Loading"
      );
      let header = await screen.findByTestId("restaurants-header");
      const pageNumBtns = screen.getByTestId("page-container");
      expect(pageNumBtns.children.length).toBe(10);
      expect(pageNumBtns.children[0].style.borderColor).toBe("red");
      await act(() => {
        fireEvent.click(pageNumBtns.children[1]);
      });
      expect(
        await screen.getByTestId("loading-indicator").textContent.trim()
      ).toBe("...Loading");
      header = await screen.findByTestId("restaurants-header");
      expect(header).toBeDefined();
      expect(header).toHaveTextContent("Restaurants List");
      expect(pageNumBtns.children[1].textContent).toBe("2");
      const container = await screen.findByTestId("restaurants-container");
      Array.from(container.children).forEach((item, i) => {
        const { name, type, rating, votes, price, image } =
          getRestaurantElements(item);
        const { data } = fixtureB;
        expect(name.textContent.trim()).toBe(data[i].name);
        expect(type.textContent.trim()).toBe(data[i].type);
        expect(price.textContent.trim()).toBe(
          data[i].price_starts_from.toString()
        );
        expect(votes.textContent.trim()).toBe(
          data[i].number_of_votes.toString()
        );
        expect(image).toHaveAttribute("src", data[i].image);
        expect(rating.textContent.trim()).toBe(data[i].rating.toString());
      });
      global.score += 3;
    });
  });
} catch (err) {
  console.log(err);
}
afterAll(() => {
  console.log("Final Score is", global.score);
});
