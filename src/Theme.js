import React, { useContext, useState } from "react";

const themes = {
  light: {
    name: "6",
    background: "#eeeeee"
  },
  dark: {
    name: "5",
    background: "rgb(5, 5, 5)"
  }
};

const ThemeContext = React.createContext(themes.light);
function Theme() {
  const [cth, setCTh] = useState("6");
  const [theme, setTheme] = useState(themes.light);

  function toggleTheme() {
    setCTh(cth === "6" ? "5" : "6");
    setTheme(cth === "6" ? themes.dark : themes.light);

    document.getElementById("body").style.background = theme.background;
  }
  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme }}>
        <button
          style={{ background: theme.background }}
          onClick={() => toggleTheme()}
        >
          Change theme Switch to {cth === "6" ? "Light" : "Dark"} mode
        </button>
      </ThemeContext.Provider>
    </div>
  );
}

export default Theme;
