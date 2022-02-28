import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <Weather />
      <footer className="sourceLink">
        {" "}
        <a
          href="https://github.com/Mariela-t/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code{" "}
        </a>
        by Mariela Tinoco Rojas{" "}
      </footer>
    </div>
  );
}
