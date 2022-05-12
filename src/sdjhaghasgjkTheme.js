import React, { useContext, useState } from "react";

const themes = {
  purple: {
    name: "1",
    background: "#8636A6"
  },
  red: {
    name: "2",
    background: "#DA1A31"
  },
  blue: {
    name: "3",
    background: "#6870EE"
  },
  orange: {
    name: "4",
    background: "#EE8068"
  },
  light: {
    name: "6",
    background: "#EEEDED"
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
  }
  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme }}>
        <button
          style={{ background: theme.background }}
          onClick={() => toggleTheme()}
        ></button>
      </ThemeContext.Provider>
    </div>
  );
}

export default Theme;
