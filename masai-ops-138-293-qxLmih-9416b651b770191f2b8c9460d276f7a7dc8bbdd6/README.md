# React - Fetch - Restaurants

## Submission Instructions  [Please note]

### Maximum Marks - 12

- The Submission should not contain spaces, for example `/rct-101 folder/eval` will not work
- Do not push node_modules to github
- Rubrics / Marking Scheme is below ( we will convert this back to a scale of 10 )

```
✅ Able to submit and run the application - 1 mark
✅ should render RestaurantCard.jsx correctly- 2 mark
✅ loading indicator should work - 1 mark
✅ should render Restaurants page - 3 mark
✅ Should work with pagination correctly - 2 mark
✅ should display correct data on page change - 3 marks
```

## Description

- You need to make an application which lists Restaurants from an api
- User should be able to apply pagination

## Boilerplate

- You are given a set of Components
- Rstaurants.jsx
- Restaurants.css
- RestaurantCard.jsx
- RestaurantCard.css
- LoadingIndicator.jsx
- Pagination
  - Pagination component which will have page numbers as buttons
- You are given these dummy elements (anything with data-testid you should not remove or change the attribute values)

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

- the system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time

## Requirements

- API details
- `url`: `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants`
- **query params**:
  - `page`: a number representing the page number
  - `limit`: a number representing total number of results per page
- **response**
  - `data`: array of restaurant details
  - `totalPages`: number representing no of pages
- example `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=10&page=1`
- By default when the user loads the page, the user should be shown a set of products
  - of page 1
  - 10 per page
- You cannot use JSON server
- use useEffect to display the data on the UI

- `Restaurants`

  - It should contain a LoadingIndicator component by default ( use Conditional rendering )
    - dont show any other UI when API is loading
  - You need to make an api call and fetch Restaurants data
    - you should fetch ten(10) per page
    - it shuold be page 1 by default
  - After we fetch restaurants data, hide the loading indicator
  - Display the list of RestaurantCards, and pass appropriate data
  - Display Pagination component at the bottom

  ![](https://i.imgur.com/MSaM7ic.png)

- `LoadingIndicator`

  - it has an element with the following attribute
    - `data-testid="loading-indicator"`
  - it has the text `...Loading`
  - it will be shown when the api is loading
  - Please hide all other elements in the UI when the API is loading

- `Pagination`

  - it will accept the following properties
    - **current** - a number representing the current page
    - **onChange** - a callback which will be given the new page number `(page)=>{})`
    - **total** - a number representing the total pages present in the list
  - Populate page numbers as buttons equal to the number of total pages received from the api response . (refer the image)
    -  if the total pages are 10 there should be 10 buttons from 1 to 10 written on it.
  - The border color of the active button should be in `red`
  - by default page number 1 should be the active page
  - on click of any `button` the new page number will be sent to the onChange callback.

- `RestaurantCard`
  - Component to display information of a single restaurant
  - the card should have id =`restaurant-card`
  - it should accept the following props
    - **name** - the title of the restaurant
      - `data-testid="restaurant-card-name"`
    - **type** - The type of the Restaurant
      - `data-testid="restaurant-card-type"`
    - **image** - the image url of the Restauant
      - `data-testid="restaurant-card-image"`
    - **rating** - the rating of the Restaurant
      - `data-testid="restaurant-card-rating"`
    - **number_of_votes** - votes of the Restaurant
      - `data-testid = "restaurant-card-votes"`
    - **price_starts_from** - the minimum price of the restaurant
      - `data-testid = "restaurant-card-price"`

#### **Note**

- Make sure you use only the given components and dont create new Components, files, folders of your own. Changing component name, file/folder structures might result in giving you zero marks
- Do Not Remove `data-testid="xxxx"` from anywhere, these are used by testing tools to test your code, removal of this will lead to low score.
- Also make sure to cross check all the spellings and Case of Texts.

### General Guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time
