import React from "react";
import { AContext } from "./Context/AppContextProvider";
import Counter from "./Components/Counter";
function App() {
  const { count, changeCount } = React.useContext(AContext);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => changeCount(3)}>Click</button>
      <Counter />
    </div>
  );
}

export default App;
