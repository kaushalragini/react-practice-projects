# React Product Listing with Auth

### Max marks - 20 marks

- The Submission should not contain spaces, for example,/js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

### Test cases

```
    ✓ able to make the submission - 1 (default)
    ✓ App loads correctly  - 1 mark
    ✓ should render pagination component - 2 marks
    ✓ Private Route component redirects user to login when visiting /dashboard page - 1 mark
  ✅ Auth Context works correctly
      ✓ values in context are correctly mapped - 1 mark
    Login APIs and functionality
      ✓ Login page works correctly with API - 2 marks
      ✓ Login page works correctly when API is mocked  - 2 marks
  ✅  ProductList component
      ✓ ProductList Components exist - 2 marks
  ✅   Home page functionality
      ✓ Home page works correctly - 2 marks
      ✓ Sort Buttons are present - 1 mark
      ✓ sort page works correctly - 2 marks
      ✓ sort and pagination should work together - 3 marks
```

## Installation

- **you may use nvm use 14, if that does not work you can try 16 or later**

```
// install npm packages
npm install

// start application locally
npm run start

// test locally
npm run test
```

## Description

- You need to make an application which lists products from an api
- User should be able to login to access the dashboard , apply pagination, and sort the results in high to low or low to high according to price.

## Boilerplate

- You are given a set of Components
- Dashboard
  - main page where you need to start working
  - will contain sort, pagination, product list
- ProductList
  - this component is imported in the ProductsPage
  - it will contain a list of ProductItems
- ProductItem
  - Component to display information of a single product
- Pagination
  - Pagination component which will have prev, next, current and total pages

## Requirements

- API details( use `Fetch`)
- `url`: `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`
- query params:
  - `page`: a number representing the page number
  - `limit`: a number representing total number of results per page(it is fixed at 10)
  - `orderBy`: order the products in ascending or descending manner, based on the price field (`asc` for ascening order `desc` for descending order)
- response
  - `data`: array of products
  - `totalPages`: number representing no of pages
- example `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=2&limit=10&orderBy=desc`
- By default when the user loads the page, the user should be shown a set of products
  - of page 1
  - 10 per page
  - sorted in low-to-high order of price of the product
- You cannot use JSON server
- use useEffect to display the data on the UI

- You are given a set of `Pages`

  - `Home`

    - you are given this already
    - it contains links to other routes
    - login, and dashboard routes

    ![](https://i.imgur.com/QrumLka.png)

  - `Login`

    - A user should be able to login from here
    - There is a form already made for you
    - You need to complete it with by using the following api
    - `POST`
    - https://reqres.in/api/login
    - DOCS: https://reqres.in/
    - You need to maintain the authentication state in context API
    - `isAuth`, and `token`
    - token - should be null by default
    - isAuth - should be false by default
    - when the user clicks on submit, the button should be disabled
    - once logged in, a user is redirected to `/dashboard` route

    ![](https://i.imgur.com/MfdPCpe.png)

- `Dashboard`

  - all the filters for pagination, sorting, , and products will be present here
  - Once logged in, a user sees the this page
  - you should have a Logout button [data-testid="logout-btn"]
  - once clicking on it, you should be logged out
  - there is an element with [data-testid="user-token"]
  - you need to display the users token here, which you got when logging in
  - `Sorting`
  - There is a div with data-testid =`sort-container`
  - There are two buttons `Sort high to low` and `Sort low to high` in the above div
  - These two buttons have the following data-testid=`high-to-low` and data-testid=`low-to-high`
  - By default, it should be in low to high order
  - if low to high is the order, then the button `Sort low to high` should be disabled
  - if high to low is the order, then the button `Sort high to low` should be disabled
  - When clicking, the order of the elements should change
  - This should also work even if you are on pages 2,3 etc
  - When the API is loading, use the `Loader` component which is supposed to show a loading indicator
  - you need to display the results using the ProductList and ProductItem components, pass the data here from the API response
  - The pagination component should be shown below this inside the container having the data attribute `[data-testid="pagination-container"]`

![](https://i.imgur.com/AUsNM71.png)

- `Components`

  - `Pagination`
    - it will accept the following properties
    - `current` - a number representing the current page
    - `onChange` - a callback which will be given the new page number `(page)=>{})`
      - it should be added to any button (like Prev, Next and current page)
    - `totalPage` - a number representing the total pages present in the list
    - by default the Prev button with `data-testid="prev-page"` should be disabled
    - the Next button with `data-testid="next-page"` should be disabled if you are on the last page
    - The current page should be shown in the button with data-testid `current-page`
    - The total pages should be shown in component, under the element with `data-testid="total-pages"`
    - When clicking you should make a new request and it should show the results in the UI
    - on click of any `button` the new page number will be sent to the onChange callback

- `ProductList`

  - this component should accept a property called `products` which is the array of products data that you retreive from the API, you should map through this and transform into components with ProductItems

- `ProductItem`

  - Component to display information of a single product
  - it should accept the following props
    - title - the title of the product
      - it should be added under the element with `data-testid="product-title"`
    - price - the price of the product
      - it should be added under the element with `data-testid="product-price"` as `₹ 500` for example ( spaces are important! )
    - category - the category that the product belongs to
      - it should be added under the element with `data-testid="product-category"`
    - image - the image url of the product
      - it should be added under the element with `data-testid="product-image"`
      - the image element should also accept the alt attribute and set it to the `title`
  - `PrivateRoute`
    - it should show the child component if user is authenticated
    - otherwise move the user to login page
    - it should work in the following manner
    ```
      <PrivateRoute>
       <Page />
      </PrivateRoute>
    ```
  - `AuthContext`
    - manage auth context here
    - The AuthContext and the Provider should be made here
    - user should be able to pass the states for
    - authentication isAuth - default value false
    - token - default value null
    - your value be passing down in the AuthContextProvider as value is { authState, ....otherFunctions }
    - authState should contain the isAuth and token
    - mandatory ^
    - create the following functions as well
    - loginUser - set auth to true and token to corresponding token
    - logoutUser - set auth to false, and token back to null
  - `Loader`
    - loading indicator

- You are given these dummy elements (anything with data-testid you should not remove or change the attribute values)

#### `AllRoutes.jsx`

- It should contain all the routes for your application

```
/ - Home
/login - Login Page
/dashboard - Dashboard - Private
```

#### **Note**

- Make sure you use only the given components and don't create new Components, files, or folders of your own. Changing the component name, and file/folder structures might result in giving you zero marks
- Do Not Remove `data-testid="xxxx"` from anywhere, these are used by testing tools to test your code, and removal of this will lead to the low score.
- Also make sure to cross-check all the spellings and Cases of Texts.

### General Guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time
