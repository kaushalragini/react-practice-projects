## React Groceries List

### Submission Instructions [Please note]

#### Maximum Marks - 15

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work.
- Do not push node_modules and package_lock.json to github.

```
✅ able to submit the app - 1 mark ( minimum score )
✅ should have the heading as Groceries - 1 mark.
✅ should display all Products. - 2 mark.
✅ Check all properties of the product are displayed - 2 marks
✅ Add to Cart button should be visible by default - 1 mark.
✅ onclicking Add to Cart button quantity should be incremented by 1 and CartButtons should be rendered(+ and - button) - 3 mark.
✅ increment and decrement quantity buttons should work" - 2 marks.
✅ if quantity goes below 1 Add to Cart button should be visible and decrement and increment buttons should not be visible - 3 marks

```

### Installation

- you can use any node version that works for you ( 14+ ).
- please make sure you do not push package-lock.json.

```

npm install

// run locally
npm run start

```

- the system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
  try to keep one submission at a time

## Problem

### folder structure

- public
- src
  - Components
    - GroceryDetails.jsx
    - GroceryItem.jsx
    - CartButton.jsx
  - App.jsx
  - data.json
- package.json
- README.md
- cypress
  - e2e
    - spec.cy.js (you can find the test file )

### You haven't taught cypress to run the testcases locally , you can see the passed/ failed test cases and test errors on CP itself.

### Description

Create a react application which resembles the following image

![](https://i.imgur.com/dQraLlC.png)

- You have to build a Products display page and each product can have an increment and decrement buttons to change the quantity.
- The products data is given in the data.json under src folder.
- You are given three components
- ### GroceryDetails
  - this component should have the following requirements
  - `h1` tag with `Groceries` as title
  - a `div` tag with `data-cy= container` ( data-cy is similar to id / classname which we give to any of the tags)
  - the above container should contain all the product details displayed as cards
- ### GroceryItem
  - This components should accept each product details (title,mrp,sellingprice,imgUrl) as props
  - a `div` tag with `classname = grocery_card`
  - The above div should contain all the properties of given product (title, mrp, sellingPrice,discount,imgURL)
  - Each card should have `Add to Cart` button with `data-cy=add_to_cart` by default
- ### CartButton
  - a `div` tag with `className = change_quantity_container`
  - the above `div` should have
    - increment button (with textcontent as `+`) with `data-cy = inc_btn`
    - decrement button (with textcontent as `-`) with `data-cy = dec_btn`
    - a `p` tag with `className=quantity` to display the quantity

### Features to implement

- By default all the product cards should have `Add to Cart` button
- onclicking `Add to Cart` button conditionally render the `CartButton` component with quantity as `1`
- You can increment or decrement the quantity by clicking `+`, `-` buttons
- If the quantity goes beyond 1 bring the `Add to Cart` back and `CartButton` component should not be visible.
- refer this for better understanding https://www.jiomart.com/all-topdeals

#### **Note**

- Make sure you use only the given components and dont create new Components, files, folders of your own. Changing component name, file/folder structures might result in giving you zero marks
- Do Not Remove `data-cy="xxxx"` from anywhere, these are used by testing tools to test your code, removal of this will lead to low score.
- Also make sure to cross check all the spellings and Case of Texts.

### General Guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time
