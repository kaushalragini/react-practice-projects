## React-Redux-Shoe-store

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Check if Redux store is being used with the application - 1 mark
 ✅ Check if proper GET request and response is made, for getting the data  - 1 mark
 ✅ Check if the nubmer of cards displayed is 15 - 1 mark
 ✅ Check if the Card Component contains all the required information - 1 mark
 ✅ Check if the user is redirected to login page before visiting shoes/1 without authentication  - 2 marks
 ✅ Check if Filters are working by selecting single checkbox - 1 mark
 ✅ Check if Filters are working with selecting multiple checkboxes - 1 mark
 ✅ Check if the checkboxes are selected by default if the data is present on the Search Params in the URL - 1 marks
```
### Note : Submitting just the boileplate on CP will give you  `TestFailed` error , build the features one by one and submit to see the failed and passed tests.
### Testing Objectives

- Ability to set up a Redux and connect it with your React application
- Ability to use Redux, and Redux-Thunk, for storing and accessing application data, respectively
- Ability to use Authentication, for Private Routes
- Ability to get filtered data, using JSON-server

### Problem Statement

- Create the following application: Shoes Page using the boilerplate code provided in the zip file

### Getting Started

- Unzip the boilerplate file and then copy the "**contents**" of the unzipped file (`rct-211-b21-e2-evaluation`), in the Masai Folder.
- Navigate to the Masai Folder, in VS Code.
- Run the following commands inside,
  - `npm install`
  - `npm start`
  - `npm run server` -> to start the json-server
- **_Note_**:

1. Libraries needs to be installed by yourself
2. Make sure that the json-server is up and running at port 8080
3. Create a .env file. Include `REACT_APP_JSON_SERVER_PORT=8080` in it
4. Use `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}` as the json-server url

### Understanding Component Structure

- App
  - Navbar
  - MainRoutes
    - Path: “/”, Page: Shoes (Public Route)<br/> - Filter.jsx<br/> - ShoeCard.jsx
    - Path: “/login”, Page: Login (Public Route)
    - Path: “/shoes/:id”, Page: SingleShoe (Protected Route/Page, accessible after logging in)

### Redux

- Store
  - AppReducer (logic related to shoes data)
  - AuthReducer (logic related to user login/authentication)

**NOTE**: Redux is mandatory for this application

1. Use the provided ActionTypes and DO NOT change the initial state in the reducer file.
2. Some of the boilerplate is provided. You are expected to write all the other remaining parts (action-creators, reducer file logic, etc) to set up the redux store.
3. Make sure Redux is connected with your React application properly, and you have access to the Redux store data

### JSON Data:

- db.json file is included in the boilerplate zip file, with the initial shoes data. **Do not overwrite/modify this data**

### Features to build:

1. The user should be able to fetch the shoes data from the db.json file (using JSON-server, axios, Redux-thunk) and display the data when the application loads.
2. The data received from API calls should be stored in the Redux store.
3. Use the shoes data from redux store to display in the Shoes component.
4. ‘/shoes/:id’ : “SingleShoe” is a protected route. Make sure that it is accessible only after logging in, when the user clicks on the ShoeCard. Use https://reqres.in for login API.
5. Post `login`, the user should be redirected to the page, he was initially present, i.e<br/> - If the user went to the login page, from homepage(Shoes), then after successful login he should be redirected to homepage(Shoes)<br/> - If the user went to the login page, trying to access `SingleShoe`, then after successful login he should be redirected to `SingleShoe`
6. The user should be able to implement the filter functionality, based on the shoes category.<br/> - The search params should be updated with change in filter category selection.<br/> - The data should reflect the selected filters. An API call with the filter/category params should be made to GET the shoes data from db.json, using JSON-server<br/> - Also, ensure the selected filter/category persists even with page refresh.

- ![](https://i.imgur.com/pgjp8sa.png)

### To test application locally

- Go to cypress/e2e/rct-211-b21-c2.cy.js file
- ![](https://i.imgur.com/nMJCCDL.png)
- comment-out the first import line (1), and un-commnent the second data variable (lines 3 - 9)
- and run this command: `npx cypress run`
- After testing the application locally, ensure, to revert back the above changes, to it original condition, before submitting uploading the code on GitHub or submitting the link to CP platform.

### Important Instructions:

- Do not remove `data-testid=’xxx’` from anywhere inside the code. They are the test inputs, removing them, may lead to low scores.
- Do not change the current folder structure, and names of components provided.
- Only use the data present in the db.json file, and do not modify the data in the json file.

#### General Instructions

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- So we request you to read the problem carefully and debug before itself
- We also request you to not to just submit it last minute
- Try to keep one submission at a time
