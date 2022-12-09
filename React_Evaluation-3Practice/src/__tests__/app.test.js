/* eslint-disable jest/no-conditional-expect */
/* eslint-disable testing-library/prefer-screen-queries */
import React, { useContext } from "react";
import {
  render,
  fireEvent,
  waitFor,
  screen,
  cleanup,
  act,
  getByTestId,
  findByTestId,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { createMemoryHistory } from "history";
import App from "../App";
import { BrowserRouter, MemoryRouter, Router } from "react-router-dom";

import ProductItem from "../Components/ProductItem";
import ProductList from "../Components/ProductList";
import Pagination from "../Components/Pagination";
import AuthContextProvider, { AuthContext } from "../Context/AuthContext";
// import ProductPage from "../Components/ProductPage";
import fetchMock from "jest-fetch-mock";

// cleanup
beforeEach(() => {
  cleanup();
  fetchMock?.enableMocks();
});
jest.setTimeout(60000);

describe("Test cases", () => {
  global.score = 1;
  console.log("Resetting score to 1");
  test.only("App loads correctly", async () => {
    const { debug, getByTestId, getAllByTestId, findAllByTestId } = render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    const login = getByTestId("login-link");
    const home = getByTestId("home-link");
    expect(login).toHaveTextContent("Login Page");
    expect(home).toHaveTextContent("Home");
    global.score += 1; // app is mounting correctly
  });

  it.only("should render pagination component", async () => {
    const fn = jest.fn();
    const data = [
      {
        data: { onChange: fn, current: 1, totalPage: 2 },
        tests: [
          () => expect(screen.getByTestId("prev-page")).toBeInTheDocument(),
          () => expect(screen.getByTestId("prev-page")).toBeDisabled(),
          () => expect(screen.getByTestId("next-page")).toBeInTheDocument(),
          () => expect(screen.getByTestId("next-page")).not.toBeDisabled(),
          () => expect(screen.getByTestId("current-page")).toBeInTheDocument(),
          () => expect(screen.getByTestId("total-pages")).toBeInTheDocument(),
          () => expect(screen.getByTestId("total-pages").textContent).toBe("2"),
          () =>
            expect(screen.getByTestId("current-page").textContent).toBe("1"),
          () => {
            const nextPage = screen.getByTestId("next-page");
            fireEvent.click(nextPage);
            expect(fn).toBeCalledTimes(1);
          },
          () => {
            const prevPage = screen.getByTestId("prev-page");
            fireEvent.click(prevPage);
            expect(fn).toBeCalledTimes(1);
          },
        ],
      },
      {
        data: { onChange: fn, current: 2, totalPage: 4 },
        tests: [
          () => expect(screen.getByTestId("prev-page")).toBeInTheDocument(),
          () => expect(screen.getByTestId("prev-page")).not.toBeDisabled(),
          () => expect(screen.getByTestId("next-page")).toBeInTheDocument(),
          () => expect(screen.getByTestId("next-page")).not.toBeDisabled(),
          () => expect(screen.getByTestId("current-page")).toBeInTheDocument(),
          () => expect(screen.getByTestId("total-pages")).toBeInTheDocument(),
          () => expect(screen.getByTestId("total-pages").textContent).toBe("4"),
          () =>
            expect(screen.getByTestId("current-page").textContent).toBe("2"),
          () => {
            const nextPage = screen.getByTestId("next-page");
            fireEvent.click(nextPage);
            expect(fn).toBeCalledTimes(2);
          },
          () => {
            const prevPage = screen.getByTestId("prev-page");
            fireEvent.click(prevPage);
            expect(fn).toBeCalledTimes(3);
          },
        ],
      },
      {
        data: { onChange: fn, current: 3, totalPage: 3 },
        tests: [
          () => expect(screen.getByTestId("prev-page")).toBeInTheDocument(),
          () => expect(screen.getByTestId("prev-page")).not.toBeDisabled(),
          () => expect(screen.getByTestId("next-page")).toBeInTheDocument(),
          () => expect(screen.getByTestId("next-page")).toBeDisabled(),
          () => expect(screen.getByTestId("current-page")).toBeInTheDocument(),
          () => expect(screen.getByTestId("total-pages")).toBeInTheDocument(),
          () => expect(screen.getByTestId("total-pages").textContent).toBe("3"),
          () =>
            expect(screen.getByTestId("current-page").textContent).toBe("3"),
          () => {
            const nextPage = screen.getByTestId("next-page");
            fireEvent.click(nextPage);
            expect(fn).toBeCalledTimes(3);
          },
          () => {
            const prevPage = screen.getByTestId("prev-page");
            fireEvent.click(prevPage);
            expect(fn).toBeCalledTimes(4);
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
  test.only("Private Route component redirects user to login when visiting /dashboard page", async () => {
    const { debug, getByTestId, getAllByTestId, findAllByTestId } = render(
      <MemoryRouter initialEntries={["/dashboard"]}>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </MemoryRouter>
    );

    const form = getByTestId("login-form");
    expect(form).toBeInTheDocument();
    global.score += 1; // private route
  });
  describe("Auth Context works correctly", () => {
    test.only("values in context are correctly mapped", () => {
      const MockAuth = () => {
        const { authState } = useContext(AuthContext);
        return (
          <div>
            <h1 data-testid="mock-state-auth">{authState.isAuth.toString()}</h1>
            <h2 data-testid="mock-state-token">
              {authState.token === null ? "null" : "not null"}
            </h2>
          </div>
        );
      };
      const { debug, getByTestId, getAllByTestId, findByTestId } = render(
        <AuthContextProvider>
          <MockAuth />
        </AuthContextProvider>
      );
      const isAuth = getByTestId("mock-state-auth");
      const token = getByTestId("mock-state-token");
      expect(isAuth.textContent).toBe("false");
      expect(token.textContent).toBe("null");
      global.score += 1; // correct data used in context api
    });
  });
  // login page
  describe("Login APIs and functionality", () => {
    test.only("Login page works correctly with API", async () => {
      fetchMock.dontMockOnce().dontMockOnce();
      const { debug, getByTestId, getAllByTestId, findByTestId } = render(
        <MemoryRouter initialEntries={["/login"]}>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </MemoryRouter>
      );

      const form = getByTestId("login-form");
      const email = getByTestId("email-input");
      const password = getByTestId("password-input");
      const submit = getByTestId("form-submit");

      expect(form).toBeInTheDocument();
      expect(email).toBeInTheDocument();
      expect(password).toBeInTheDocument();
      expect(submit).toBeInTheDocument();

      const values = {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      };
      fireEvent.change(email, {
        target: {
          value: values.email,
        },
      });

      fireEvent.change(password, {
        target: {
          value: values.password,
        },
      });

      expect(email.value).toBe(values.email);
      expect(password.value).toBe(values.password);
      await act(() => {
        fireEvent.click(submit);
      });
      expect(submit).toBeDisabled();
      const token = await findByTestId("user-token");
      expect(token).toHaveTextContent("QpwL5tke4Pnpja7X4");
      {
        const logout = getByTestId("logout-btn");
        await act(() => {
          fireEvent.click(logout);
        });
        const form = getByTestId("login-form");
        expect(form).toBeInTheDocument();
      }
      global.score += 2; // login page api
      fetchMock.resetMocks();
    });

    test.only("Login page works correctly when API is mocked", async () => {
      fetchMock
        .once(
          JSON.stringify({
            token: "Qw12la31afa13e1ds",
          })
        )
        .once(JSON.stringify([]));
      const { debug, getByTestId, getAllByTestId, findByTestId } = render(
        <MemoryRouter initialEntries={["/login"]}>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </MemoryRouter>
      );

      const form = getByTestId("login-form");
      const email = getByTestId("email-input");
      const password = getByTestId("password-input");
      const submit = getByTestId("form-submit");

      expect(form).toBeInTheDocument();
      expect(email).toBeInTheDocument();
      expect(password).toBeInTheDocument();
      expect(submit).toBeInTheDocument();

      const values = {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      };
      fireEvent.change(email, {
        target: {
          value: values.email,
        },
      });

      fireEvent.change(password, {
        target: {
          value: values.password,
        },
      });

      expect(email.value).toBe(values.email);
      expect(password.value).toBe(values.password);
      await act(() => {
        fireEvent.click(submit);
      });
      expect(submit).toBeDisabled();
      const token = await findByTestId("user-token");
      expect(token).toHaveTextContent("Qw12la31afa13e1ds");
      {
        const logout = getByTestId("logout-btn");
        await act(() => {
          fireEvent.click(logout);
        });
        const form = getByTestId("login-form");
        expect(form).toBeInTheDocument();
      }
      global.score += 2; // login page api with mocking
    });
  });
  function getProductElements(container) {
    return {
      image: getByTestId(container, "product-image"),
      title: getByTestId(container, "product-title"),
      price: getByTestId(container, "product-price"),
      category: getByTestId(container, "product-category"),
    };
  }
  describe("ProductList component", () => {
    test.only("ProductList Components exist", () => {
      render(
        <MemoryRouter>
          <ProductList products={page1} />
        </MemoryRouter>
      );
      const products = screen.getAllByTestId("product-item");
      expect(products.length).toBe(10);
      products.forEach((product, i) => {
        const { title, image, price, category } = getProductElements(product);
        expect(title.textContent.trim()).toBe(page1[i].title);
        expect(category.textContent.trim()).toBe(page1[i].category);
        expect(price.textContent.trim()).toBe(`₹ ${page1[i].price.toString()}`);
      });
      global.score += 2; // restaurant component
    });
  });

  describe("Home page functionality", () => {
    test.only("Home page works correctly", async () => {
      fetchMock
        .once(
          JSON.stringify({
            token: "Qw12la31afa13e1ds",
          })
        )
        .once(JSON.stringify({ data: page1, totalPages: 10 }))
        .once(JSON.stringify({ data: page2, totalPages: 10 }));

      const history = createMemoryHistory();
      const {
        debug,
        getByTestId,
        getAllByTestId,
        findByTestId,
        findAllByTestId,
      } = render(
        <MemoryRouter history={history} initialEntries={["/login"]}>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </MemoryRouter>
      );
      {
        const form = getByTestId("login-form");
        const email = getByTestId("email-input");
        const password = getByTestId("password-input");
        const submit = getByTestId("form-submit");

        expect(form).toBeInTheDocument();
        expect(email).toBeInTheDocument();
        expect(password).toBeInTheDocument();
        expect(submit).toBeInTheDocument();

        const values = {
          email: "eve.holt@reqres.in",
          password: "cityslicka",
        };
        fireEvent.change(email, {
          target: {
            value: values.email,
          },
        });

        fireEvent.change(password, {
          target: {
            value: values.password,
          },
        });

        expect(email.value).toBe(values.email);
        expect(password.value).toBe(values.password);
        await act(() => {
          fireEvent.click(submit);
        });

        const token = await findByTestId("user-token");
        expect(token).toHaveTextContent("Qw12la31afa13e1ds");
      }
      {
        await sleep(3000);
        const items = await findAllByTestId("product-item");
        expect(items.length).toBe(page1.length);
        page1.forEach((res, i) => {
          const { title, imapge, category, price } = getProductElements(
            items[i]
          );
          expect(title).toHaveTextContent(res.title);
          expect(category).toHaveTextContent(res.category);
          expect(price).toHaveTextContent(`₹ ${res.price}`);
        });
      }
      const currentPage = getByTestId("current-page");
      expect(currentPage.textContent).toBe("1");
      const nextPage = getByTestId("next-page");
      await act(() => {
        fireEvent.click(nextPage);
      });

      {
        await sleep(3000);
        const items = await findAllByTestId("product-item");
        expect(items.length).toBe(page1.length);
        // console.log(items, page2);
        page2.forEach((res, i) => {
          const { title, image, category, price } = getProductElements(
            items[i]
          );
          expect(title).toHaveTextContent(res.title);
          expect(category).toHaveTextContent(res.category);
          expect(price).toHaveTextContent(`₹ ${res.price}`);
        });
      }

      global.score += 2; // home page works correctly
    });
    test.only("Sort Buttons are present", async () => {
      fetchMock.dontMockOnce().dontMockOnce();
      const history = createMemoryHistory();
      const {
        debug,
        getByTestId,
        getAllByTestId,
        findByTestId,
        findAllByTestId,
      } = render(
        <MemoryRouter history={history} initialEntries={["/login"]}>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </MemoryRouter>
      );
      {
        const form = getByTestId("login-form");
        const email = getByTestId("email-input");
        const password = getByTestId("password-input");
        const submit = getByTestId("form-submit");
        const values = {
          email: "eve.holt@reqres.in",
          password: "cityslicka",
        };
        fireEvent.change(email, {
          target: {
            value: values.email,
          },
        });

        fireEvent.change(password, {
          target: {
            value: values.password,
          },
        });
        await act(() => {
          fireEvent.click(submit);
        });
      }
      await sleep(3000);
      const sortBtns = getByTestId("sort-container");
      expect(sortBtns).toBeDefined();
      expect(sortBtns.children.length).toBe(2);
      const text = Array.from(sortBtns.children).map(
        (item) => item.textContent
      );
      let c = 0;
      text.forEach(
        (t) => ["Sort low to high", "Sort high to low"].includes(t) && c++
      );
      expect(c).toBe(2);
      global.score += 1; // flters are present
    });

    test.only("sort page works correctly", async () => {
      fetchMock
        .once(
          JSON.stringify({
            token: "Qw12la31afa13e1ds",
          })
        )
        .once(JSON.stringify({ data: page1, totalPages: 10 }))
        .once(JSON.stringify({ data: page1HighToLow, totalPages: 10 }));

      const history = createMemoryHistory();
      const {
        debug,
        getByTestId,
        getAllByTestId,
        findByTestId,
        findAllByTestId,
      } = render(
        <MemoryRouter history={history} initialEntries={["/login"]}>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </MemoryRouter>
      );
      {
        const form = getByTestId("login-form");
        const email = getByTestId("email-input");
        const password = getByTestId("password-input");
        const submit = getByTestId("form-submit");

        expect(form).toBeInTheDocument();
        expect(email).toBeInTheDocument();
        expect(password).toBeInTheDocument();
        expect(submit).toBeInTheDocument();

        const values = {
          email: "eve.holt@reqres.in",
          password: "cityslicka",
        };
        fireEvent.change(email, {
          target: {
            value: values.email,
          },
        });

        fireEvent.change(password, {
          target: {
            value: values.password,
          },
        });

        expect(email.value).toBe(values.email);
        expect(password.value).toBe(values.password);
        await act(() => {
          fireEvent.click(submit);
        });

        const token = await findByTestId("user-token");
        expect(token).toHaveTextContent("Qw12la31afa13e1ds");
      }
      {
        await sleep(3000);
        const items = await findAllByTestId("product-item");
        expect(items.length).toBe(page1.length);
        page1.forEach((res, i) => {
          const { title, imapge, category, price } = getProductElements(
            items[i]
          );
          expect(title).toHaveTextContent(res.title);
          expect(category).toHaveTextContent(res.category);
          expect(price).toHaveTextContent(`₹ ${res.price}`);
        });
      }
      const sortBtns = getByTestId("sort-container");
      expect(sortBtns).toBeDefined();
      expect(sortBtns.children.length).toBe(2);
      expect(screen.getByTestId("low-to-high")).toBeDisabled();
      expect(screen.getByTestId("high-to-low")).not.toBeDisabled();
      await act(() => {
        fireEvent.click(screen.getByTestId("high-to-low"));
      });

      {
        await sleep(3000);
        const items = await findAllByTestId("product-item");
        expect(items.length).toBe(page1.length);
        expect(screen.getByTestId("low-to-high")).not.toBeDisabled();
        expect(screen.getByTestId("high-to-low")).toBeDisabled();
        // console.log(items, page2);
        page1HighToLow.forEach((res, i) => {
          const { title, image, category, price } = getProductElements(
            items[i]
          );
          expect(title).toHaveTextContent(res.title);
          expect(category).toHaveTextContent(res.category);
          expect(price).toHaveTextContent(`₹ ${res.price}`);
        });
      }

      global.score += 2; // home page works correctly
    });
    test.only("sort and pagination should work together", async () => {
      fetchMock
        .once(
          JSON.stringify({
            token: "Qw12la31afa13e1ds",
          })
        )
        .once(JSON.stringify({ data: page1, totalPages: 10 }))
        .once(JSON.stringify({ data: page1HighToLow, totalPages: 10 }))
        .once(JSON.stringify({ data: page2HighToLow, totalPages: 10 }));

      const history = createMemoryHistory();
      const {
        debug,
        getByTestId,
        getAllByTestId,
        findByTestId,
        findAllByTestId,
      } = render(
        <MemoryRouter history={history} initialEntries={["/login"]}>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </MemoryRouter>
      );
      {
        const form = getByTestId("login-form");
        const email = getByTestId("email-input");
        const password = getByTestId("password-input");
        const submit = getByTestId("form-submit");

        expect(form).toBeInTheDocument();
        expect(email).toBeInTheDocument();
        expect(password).toBeInTheDocument();
        expect(submit).toBeInTheDocument();

        const values = {
          email: "eve.holt@reqres.in",
          password: "cityslicka",
        };
        fireEvent.change(email, {
          target: {
            value: values.email,
          },
        });

        fireEvent.change(password, {
          target: {
            value: values.password,
          },
        });

        expect(email.value).toBe(values.email);
        expect(password.value).toBe(values.password);
        await act(() => {
          fireEvent.click(submit);
        });

        const token = await findByTestId("user-token");
        expect(token).toHaveTextContent("Qw12la31afa13e1ds");
      }
      {
        await sleep(3000);
        const items = await findAllByTestId("product-item");
        expect(items.length).toBe(page1.length);
        page1.forEach((res, i) => {
          const { title, imapge, category, price } = getProductElements(
            items[i]
          );
          expect(title).toHaveTextContent(res.title);
          expect(category).toHaveTextContent(res.category);
          expect(price).toHaveTextContent(`₹ ${res.price}`);
        });
      }
      const sortBtns = getByTestId("sort-container");
      expect(sortBtns).toBeDefined();
      expect(sortBtns.children.length).toBe(2);
      expect(screen.getByTestId("low-to-high")).toBeDisabled();
      expect(screen.getByTestId("high-to-low")).not.toBeDisabled();
      await act(() => {
        fireEvent.click(screen.getByTestId("high-to-low"));
      });
      {
        await sleep(3000);
        const items = await findAllByTestId("product-item");
        expect(items.length).toBe(page1.length);
        expect(screen.getByTestId("low-to-high")).not.toBeDisabled();
        expect(screen.getByTestId("high-to-low")).toBeDisabled();
        // console.log(items, page2);
        page1HighToLow.forEach((res, i) => {
          const { title, image, category, price } = getProductElements(
            items[i]
          );
          expect(title).toHaveTextContent(res.title);
          expect(category).toHaveTextContent(res.category);
          expect(price).toHaveTextContent(`₹ ${res.price}`);
        });
      }
      let nextPage = screen.getByTestId("next-page");
      await act(() => {
        fireEvent.click(nextPage);
      });
      {
        await sleep(3000);
        const items = await findAllByTestId("product-item");
        expect(items.length).toBe(page1.length);
        expect(screen.getByTestId("low-to-high")).not.toBeDisabled();
        expect(screen.getByTestId("high-to-low")).toBeDisabled();
        // console.log(items, page2);
        page2HighToLow.forEach((res, i) => {
          const { title, image, category, price } = getProductElements(
            items[i]
          );
          expect(title).toHaveTextContent(res.title);
          expect(category).toHaveTextContent(res.category);
          expect(price).toHaveTextContent(`₹ ${res.price}`);
        });
      }
      global.score += 3; // home page works correctly
    });
  });
});
afterAll(() => {
  console.log("Final Score is", global.score);
});
const sleep = (delay) => new Promise((res) => setTimeout(res, delay));

let page1 = [
  {
    id: 22,
    brand: "Wish Karo",
    title: "Printed Straight Kurti",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11985624/2020/6/25/2f2e3507-09e0-4330-a9c0-818583f0cdac1593065483501WishKaroGirlsMaroonSolidFitandFlareDress1.jpg",
    category: "kids",
    price: 399,
  },
  {
    id: 33,
    brand: "Fancy Mart",
    title: "Artificial flowers with pot",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/7/30/078471d8-aa80-4fe9-9831-0af81ee4e2c41564476690067-1.jpg",
    category: "homedecor",
    price: 399,
  },
  {
    id: 32,
    brand: "Fancy Mart",
    title: "Artificial Bamboo plants",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2334609/2017/12/12/11513083183045-na-881513083182960-1.jpg",
    category: "homedecor",
    price: 487,
  },
  {
    id: 15,
    brand: "Ziyaa",
    title: "A line kurta",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11056866/2019/12/9/67a0d919-cbca-4d89-a8f1-6a25c9e9305c1575891613300-Round-NeckWith--34th-Sleeve-Straight-Floral-print-Crepe-Kurt-1.jpg",
    category: "women",
    price: 499,
  },
  {
    id: 31,
    brand: "Tied Ribbons",
    title: "Set of 2 Artificial bunches",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/12/15/bbd18059-da43-425e-87e5-64f5321277f41576372604988-1.jpg",
    category: "homedecor",
    price: 597,
  },
  {
    id: 8,
    brand: "Roadster",
    title: "Men Linen Regular Fit",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11008602/2020/1/20/8b494575-e040-4560-853d-0ddb4d4a42021579510958229-Roadster-Men-Shirts-7641579510955741-1.jpg",
    category: "men",
    price: 599,
  },
  {
    id: 24,
    brand: "Style Karo",
    title: "Girls Solid Print Flared Dress",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/8/23/e4894be3-139c-4c80-aa6f-a69d09bb6df31566545182265-5.jpg",
    category: "kids",
    price: 599,
  },
  {
    id: 25,
    brand: "PSPeaches Karo",
    title: "Girls Checked Print Flared Dress",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11279500/2020/1/13/c1d506dd-3449-4967-b98e-f1745c91e4bf1578913886254-pspeaches-Girls-Yellow-Checked-Fit-and-Flare-Dress-246157891-1.jpg",
    category: "kids",
    price: 599,
  },
  {
    id: 27,
    brand: "Hell Cat Karo",
    title: "Pack of 3 Boys T-shirts",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/7/17/c36871cc-2632-423e-944c-4bc1bb55df9f1594942107913-1.jpg",
    category: "kids",
    price: 599,
  },
  {
    id: 2,
    brand: "Blackberry's",
    title: "Regukar Fit Printed Shirt",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10944602/2020/3/5/da4c1a83-987b-4afa-baad-f72039dbdedb1583385686526-Roadster-Men-Teal-Blue--Black-Regular-Fit-Printed-Casual-Shi-4.jpg",
    category: "men",
    price: 699,
  },
];
let page2 = [
  {
    id: 14,
    brand: "Max",
    title: "A line kurta",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10808284/2019/10/30/c35d059d-a357-4863-bcb1-eacd8c988fb01572422803188-AHIKA-Women-Kurtas-8841572422802083-1.jpg",
    category: "women",
    price: 699,
  },
  {
    id: 36,
    brand: "Wall Stick",
    title: "Bird nest on tree",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/8/21/6914db9e-3422-46cc-b9d9-a61e5bdfb6411597960381943-1.jpg",
    price: 699,
    category: "homedecor",
  },
  {
    id: 9,
    brand: "Park Avenue",
    title: "Men Linen Regular Fit",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2164551/2019/3/12/45950906-09a8-4e72-9717-16448ce161a41552375230864-Roadster-Men-Grey--Olive-Green-Camouflage-Print-Regular-Fit--1.jpg",
    category: "men",
    price: 799,
  },
  {
    id: 23,
    brand: "Style Karo",
    title: "Girls Print Flared Dress",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11811376/2020/4/24/d003ff16-e2b8-4e31-991a-51a9cb0a089d1587709778184StyleStoneGirlsNavyBluePrintedFitandFlareDress1.jpg",
    category: "kids",
    price: 799,
  },
  {
    id: 35,
    brand: "Random Mart",
    title: "Set of photo frames",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/6556105/2018/5/28/b5fc076f-b094-4956-8679-d962eba8eeb61527509319846-Random-Set-of-06-photo-frames-WITH-MDF-flowers-plaque-4X6-4PCS--5x7-2pcs-BLACK-2611527509319705-1.jpg",
    category: "homedecor",
    price: 799,
  },
  {
    id: 1,
    brand: "Roadster",
    title: "cotton Checked Casual Shirt",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2016/9/15/11473928353466-Roadster-Men-Black-Regular-Fit-Checked-Casual-Shirt-4501473928353310-1.jpg",
    category: "men",
    price: 844,
  },
  {
    id: 3,
    brand: "Van Heusen",
    title: "Regukar Fit Printed Shirt",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2164551/2019/3/12/45950906-09a8-4e72-9717-16448ce161a41552375230864-Roadster-Men-Grey--Olive-Green-Camouflage-Print-Regular-Fit--1.jpg",
    category: "men",
    price: 844,
  },
  {
    id: 29,
    brand: "Disney",
    title: "Boys Color Blocked T-shirt",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/7/17/c36871cc-2632-423e-944c-4bc1bb55df9f1594942107913-1.jpg",
    category: "kids",
    price: 899,
  },
  {
    id: 6,
    brand: "Allen Solly",
    title: "Checked Regular Fit Printed Shirt",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/8889511/2019/4/3/f3e974a4-1680-487f-8e9a-3a2df1b3157f1554281507539-Roadster-Men-Navy-Blue--Beige-Regular-Fit-Checked-Casual-Shi-1.jpg",
    category: "men",
    price: 999,
  },
  {
    id: 7,
    brand: "Allen Solly",
    title: "Checked Regular Fit Printed Shirt",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1862808/2019/4/15/18bcab2f-3977-4956-a32f-aaae5962cecf1555322110322-Roadster-Time-Travlr-Men-Green--Black-Regular-Fit-Checked-Ca-1.jpg",
    category: "men",
    price: 999,
  },
];
let page1HighToLow = [
  {
    id: 18,
    brand: "FabIndia",
    title: "Anarkali kurta",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11564850/2020/3/5/afd1a957-467e-4a15-abd8-994b8970f72a1583400100776-Fabindia-Women-Kurtas-3311583400099769-1.jpg",
    category: "women",
    price: 2699,
  },
  {
    id: 37,
    brand: "EximDecor Stick",
    title: "Handcrafted Leather crafted",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12640284/2020/9/29/18d30ec1-3aa8-4caf-b631-252811e1df971601360503171-EXIM-DECOR-Brown-Showpiece-5671601360502705-1.jpg",
    price: 2589,
    category: "homedecor",
  },
  {
    id: 19,
    brand: "Visudh",
    title: "Max slit kurta",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2329502/2017/12/12/11513075473636-na-1991513075473475-1.jpg",
    category: "women",
    price: 2135,
  },
  {
    id: 17,
    brand: "IndoEra",
    title: "Anarkali kurta",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/8969717/2019/3/28/e448c9a1-3a0f-40e7-b267-1bf44a44ba501553778956208-Indo-Era-Beige-Solid-Straight-Kurta-Sets-9801553778954623-1.jpg",
    category: "women",
    price: 1599,
  },
  {
    id: 34,
    brand: "Fancy Mart",
    title: "Set of 3 wall paintings",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/6/7/2685ea80-19e2-415f-a1e8-dc9a1b14ef3a1559906891935-1.jpg",
    category: "homedecor",
    price: 1599,
  },
  {
    id: 4,
    brand: "Van Heusen",
    title: "Cotton Fit Printed Shirt",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2283230/2018/2/2/11517573007171-Roadster-Men-Green-Regular-Fit-Printed-Casual-Shirt-6301517573007001-1.jpg",
    category: "men",
    price: 1500,
  },
  {
    id: 20,
    brand: "Anubhuthee",
    title: "Ethnic Embroidary Kurti",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10942392/2019/11/19/79f3d4a1-bbf3-442b-b7de-83573ebb99851574150523536-Anubhutee-Women-Kurta-Sets-1381574150520307-1.jpg",
    category: "women",
    price: 1499,
  },
  {
    id: 21,
    brand: "Max",
    title: "Printed Straight Kurti",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10942392/2019/11/19/79f3d4a1-bbf3-442b-b7de-83573ebb99851574150523536-Anubhutee-Women-Kurta-Sets-1381574150520307-1.jpg",
    category: "women",
    price: 1499,
  },
  {
    id: 38,
    brand: "Ecraft India",
    title: "Handcrafted Leather crafted",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/6698630/2018/6/9/023f7703-453d-4d60-92fb-ed99704223d11528527564425-eCraftIndia-Brass-Antique-Music-Decorative-Canon-Showpiece-4671528527564162-1.jpg",
    price: 1477,
    category: "homedecor",
  },
  {
    id: 5,
    brand: "Van Heusen",
    title: "Cotton Fit Printed Shirt",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/8889511/2019/4/3/f3e974a4-1680-487f-8e9a-3a2df1b3157f1554281507539-Roadster-Men-Navy-Blue--Beige-Regular-Fit-Checked-Casual-Shi-1.jpg",
    category: "men",
    price: 1299,
  },
];

let page2HighToLow = [
  {
    id: 30,
    brand: "Disney",
    title: "Pack of 3 Round Necked Shirts",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/7/16/913d5278-4a71-42cf-8102-dc52bb2c1ca51594850274502-1.jpg",
    category: "kids",
    price: 1299,
  },
  {
    id: 39,
    brand: "Exim India",
    title: "Hour glass",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12640286/2020/9/29/29e1abc6-a571-43a7-a09d-a9c61a5244541601360519753-EXIM-DECOR-Pink-Showpiece-6201601360519040-1.jpg",
    price: 1299,
    category: "homedecor",
  },
  {
    id: 40,
    brand: "Tied Ribbons",
    title: "Set of 3 Owl",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/12/15/777efffd-ccf5-42c9-b20f-5630d360b57f1576371164101-1.jpg",
    price: 1299,
    category: "homedecor",
  },
  {
    id: 10,
    brand: "Park Avenue",
    title: "Men Linen Regular Fit",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/6791214/2018/7/23/a194bd48-f1f1-4ce5-ab73-5feea12857f51532336453194-Roadster-Men-Blue-Regular-Fit-Solid-Casual-Shirt-89615323364-1.jpg",
    category: "men",
    price: 1099,
  },
  {
    id: 11,
    brand: "Anouk",
    title: "Men Linen Regular Fit",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/6791214/2018/7/23/a194bd48-f1f1-4ce5-ab73-5feea12857f51532336453194-Roadster-Men-Blue-Regular-Fit-Solid-Casual-Shirt-89615323364-1.jpg",
    category: "men",
    price: 1099,
  },
  {
    id: 12,
    brand: "Anouk",
    title: "Men Linen Regular Fit",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/6791214/2018/7/23/a194bd48-f1f1-4ce5-ab73-5feea12857f51532336453194-Roadster-Men-Blue-Regular-Fit-Solid-Casual-Shirt-89615323364-1.jpg",
    category: "men",
    price: 1099,
  },
  {
    id: 13,
    brand: "Ahika",
    title: "Men Linen Regular Fit",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10808284/2019/10/30/c35d059d-a357-4863-bcb1-eacd8c988fb01572422803188-AHIKA-Women-Kurtas-8841572422802083-1.jpg",
    category: "women",
    price: 1099,
  },
  {
    id: 16,
    brand: "Libas",
    title: "Anarkali kurta",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10356511/2019/8/8/a28f9ccb-c0d7-4e66-87f0-e639f157ff2d1565263388836-Libas-Women-Kurta-Sets-571565263387250-1.jpg",
    category: "women",
    price: 1019,
  },
  {
    id: 6,
    brand: "Allen Solly",
    title: "Checked Regular Fit Printed Shirt",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/8889511/2019/4/3/f3e974a4-1680-487f-8e9a-3a2df1b3157f1554281507539-Roadster-Men-Navy-Blue--Beige-Regular-Fit-Checked-Casual-Shi-1.jpg",
    category: "men",
    price: 999,
  },
  {
    id: 7,
    brand: "Allen Solly",
    title: "Checked Regular Fit Printed Shirt",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1862808/2019/4/15/18bcab2f-3977-4956-a32f-aaae5962cecf1555322110322-Roadster-Time-Travlr-Men-Green--Black-Regular-Fit-Checked-Ca-1.jpg",
    category: "men",
    price: 999,
  },
];
