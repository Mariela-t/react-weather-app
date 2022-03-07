import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <Weather defaultcity="New York" />
      <footer className="sourceLink">
        Open-source on{" "}
        <a
          href="https://github.com/Mariela-t/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Github{" "}
        </a>{" "}
        and hosted on
        <a
          href="https://fervent-noether-29f981.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Netlify
        </a>{" "}
        by Mariela Tinoco Rojas{" "}
      </footer>
    </div>
  );
}
