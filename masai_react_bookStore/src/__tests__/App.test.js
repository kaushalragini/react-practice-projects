import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App.jsx";
import fiction from "./fiction.json";
import nonfiction from "./nonFiction.json";

describe("Testing Restaurant", () => {
  global.score = 1;
  console.log("Resetting score to 1");
  describe("App component should render", () => {
    beforeEach(() => {
      render(<App />);
    });

    it("should have basic structure", () => {
      expect(screen.getByTestId("toggle-btn")).toBeInTheDocument();
      expect(screen.getByTestId("conditional-container")).toBeInTheDocument();
      expect(screen.getByTestId("books-fiction")).toBeInTheDocument();
      expect(screen.getByTestId("books-container-title")).toBeInTheDocument();
      expect(screen.getAllByTestId("book-card")).toBeTruthy();
      expect(screen.getAllByTestId("book-card-title")).toBeTruthy();
      expect(screen.getAllByTestId("book-card-author")).toBeTruthy();
      expect(screen.getAllByTestId("book-card-price")).toBeTruthy();

      global.score += 1;
    });

    it("should change text in the button on toggle", () => {
      expect(screen.getByTestId("toggle-btn")).toHaveTextContent(
        "Show Non-Fiction Books"
      );

      fireEvent.click(screen.getByTestId("toggle-btn"));

      expect(screen.getByTestId("toggle-btn")).toHaveTextContent(
        "Show Fictional Books"
      );
      global.score += 1;
    });

    it("should display the title as Fictional Books by default", () => {
      expect(screen.getByTestId("books-container-title")).toHaveTextContent(
        "Fictional Books"
      );
      global.score += 1;
    });

    it("should display all books in fiction section by default", () => {
      let books = screen.getAllByTestId("book-card");
      let i = 0;
      books.forEach((book) => {
        expect(book).toHaveTextContent(fiction[i].title);
        expect(book).toHaveTextContent(fiction[i].author);
        expect(book).toHaveTextContent(fiction[i++].price);
      });
      global.score += 2;
    });

    it("should display nonfiction book section title as Non-Fiction Books after toggling", () => {
      expect(screen.getByTestId("books-container-title")).toHaveTextContent(
        "Fictional Books"
      );
      fireEvent.click(screen.getByTestId("toggle-btn"));
      expect(screen.getByTestId("books-container-title")).toHaveTextContent(
        "Non-Fiction Books"
      );

      global.score += 2;
    });

    it("should display all books in nonfiction section after toggling", () => {
      fireEvent.click(screen.getByTestId("toggle-btn"));
      let books = screen.getAllByTestId("book-card");
      let i = 0;
      books.forEach((book) => {
        expect(book).toHaveTextContent(nonfiction[i].title);
        expect(book).toHaveTextContent(nonfiction[i].author);
        expect(book).toHaveTextContent(nonfiction[i++].price);
      });

      global.score += 2;
    });
  });
  afterAll(() => {
    console.log("Final Score is", global.score);
  });
});
