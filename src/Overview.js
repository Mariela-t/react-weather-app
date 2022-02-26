import React from "react";
import "./App.css";

export default function Overview() {
  let weatherData = {
    city: "New York",
    date: "Sunday 10:00",
    description: "Clear",
  };
  return (
    <div className="Overview">
      <h1> {weatherData.city} </h1>
      <h2> Last updated: {weatherData.date}</h2>
      <h3> {weatherData.description} </h3>
    </div>
  );
}
