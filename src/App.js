import React from "react";
import Weather from "./Weather";
import Overview from "./Overview";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="box">
        <form className="mb-4">
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control mb-3"
            autoComplete="off"
          />
          <input type="submit" value="Search" className="button" />
        </form>
        <Overview />
        <Weather />
      </div>
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
