import React from "react";
import { AppContext } from "./Context/AppContextProvider";
import AuthContextProvider from "./Context/AuthContextProvider";

import Counter from "./Components/Counter";
function App() {
  const Countapp = React.useContext(AppContext);
  console.log(Countapp);
  const { count, clickHandler1, clickHandler2 } = Countapp;
  return (
    <div>
      <h1> count is : {count}</h1>
      <button onClick={clickHandler1}>INC</button>
      <button onClick={clickHandler2}>DEC</button>
      <AuthContextProvider>
        <Counter />
      </AuthContextProvider>
    </div>
  );
}

export default App;
