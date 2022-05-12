import React, { StrictMode, useContext } from "react";
import { createRoot } from "react-dom/client";
import { themeData } from "./theme";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const ThemeContext = React.createContext(themeData.theme1);

root.render(
  <StrictMode>
    <ThemeContext.Provider value={themeData.theme1}>
      <App theme={themeData.theme1} />
    </ThemeContext.Provider>
  </StrictMode>
);
