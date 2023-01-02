import "./App.css";
import TodoInput from "./Components/TodoInput";
import Counter from "./Components/Counter";
import Login from "./Components/Login";
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector((store) => store.LoginReducer.isAuth);
  return (
    <div className="App">
      {isAuth ?  <TodoInput /> : <Login />}
    </div>
  );
}

export default App;
