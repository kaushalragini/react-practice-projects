// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Routes/AllRoutes";
function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
