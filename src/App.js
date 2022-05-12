import "./styles.css";
import Home from "./Home.js";
import { useState } from "react";
export default function App({ theme }) {
  const [th, setTh] = useState(theme);

  return (
    <div className="App">
      <Home theme={th} />
    </div>
  );
}
