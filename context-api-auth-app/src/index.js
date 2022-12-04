import { createRoot } from "react-dom/client";

import App from "./App";
import AuthContextProvider from "./ContextApi/AuthContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);

