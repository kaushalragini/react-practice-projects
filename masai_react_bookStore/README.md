## React Mini Book Store

Create a Mini Book Store in React

## Tags

react, useState, conditional rendering, css modules, props

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ should have basic structure- 1 marks
 ✅ should change text on the button on toggle - 1marks
 ✅ should display the title as Fictional Books by default" - 1 marks
 ✅ should display all books in fiction section by default - 2 mark
 ✅ should display nonfiction book section title as Non-Fiction Books after toggling - 2 marks
 ✅ should display all books in nonfiction section after toggling- 2 mark
```

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate
- Navigate to the correct path
- Run **npm install** to install the node modules
- Run **npm test** for the test cases.

## Description

### Create a Mini Book Store

### Screenshots :

- Default Page :
  <img width="1150" alt="Screenshot 2022-07-22 at 4 10 46 PM" src="https://user-images.githubusercontent.com/86409991/180424604-0c576c9b-41df-446d-a941-4be9f575e1a0.png">
- After Toggle:
  <img width="1146" alt="Screenshot 2022-07-22 at 4 10 36 PM" src="https://user-images.githubusercontent.com/86409991/180423863-2c47496d-a267-4748-b3b6-d5990f1de4e7.png">

### Features To Build:

1. Build a mini book store with two sections (`Fictional Books` and `Non-Fiction Books`)
2. By Default it should display the `Fictional Boooks` section.
3. A button to toggle the sections should be present. (Included in the Boilerplate with `data-testid="toggle-btn"`)
   - Also two different components are provided for this feature. You have to render the suitable component according to the section you are in. (Components `Fiction.jsx` and `NonFiction.jsx` is provided in the components folder of the boilerplate)
   - Make Sure to display the name of the Section in the H1 provided in the component with `data-testid="books-container-title"`. (It is case sensitive so cross check)
4. The Button should show text `Show Non-Fiction Books` by default and should change to `Show Fictional Books` when clicked.
   - For example if your current page is Fictional Book page then Button should have text `Show Non-Fiction Books` but when your current page is Non-Fiction Book page then Button should have text `Show Fictional Books`
5. A list/array of fictional books and non fiction books are provided in the src folder of the Boilerplate as JSON Files.
   - File names for the JSON files are `fiction.json` and `nonfiction.json`. You have to import the JSON files to your Component.
6. You should be able to display the list of books as cards for the respective sections.
   - For each Book-Card use `BookCard.jsx` component given in the components folder of the Boilerplate
   - The boilerplate for `BookCard.jsx` is self explanatory and you should be able to display books details properly.
7. Use CSS Modules to style the components and App.

**Note**

- Make sure you use only the given components and dont create new Components, files, folders of your own. Changing component name, file/folder structures might result in giving you zero marks
- Do Not Remove `data-testid="xxxx"` from anywhere, these are used by testing tools to test your code, removal of this will lead to low score.
- Also make sure to cross check all the spellings and Case of Texts.
- Some important Spellings are `Fictional Books`, `Non-Fiction Books`. Use these as section names.

### Learning Objectives

1. Why and what is react?

2. Able to use CRA and run the application.

3. Basic understanding of JSX.

4. Difference between State and props.

5. Conditional rendering.

6. handling basic onClick events.

7. Lists in React

8. Difference between global CSS and module.css
