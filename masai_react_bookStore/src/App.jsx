import { useState } from "react";
import Fiction from "./components/Fiction";
import NonFiction from "./components/NonFiction";
// import data from './fiction.json'
// import data from './nonfiction.json'
function App() {

  const [toggle, setToggle] = useState(true)
  // create a variable
  // if variable === true show fiction
  // if variable === false shoe non-fiction

  const clickHandler = () => {
    if (toggle === true) { setToggle(false) }
    else {
      setToggle(true)
    }
  }
  return (
    <div>
      <h1>Mini Book Store</h1>

      <button onClick={clickHandler} data-testid="toggle-btn">{toggle ? "Show Non-Fiction Books" : "Show Fictional Books"}</button>

      <div data-testid="conditional-container">
        {/* Render either Fiction or NonFiction Based on the Condition */}
        {/* <Fiction /> */}

        {/* <NonFiction /> */}
        {
          toggle ? <Fiction /> : <NonFiction />
        }


      </div>
    </div>
  );
}

export default App;
