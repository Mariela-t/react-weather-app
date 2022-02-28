import React, { useState } from "react";
import axios from "axios";

import "./App.css";

export default function App() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: "Sunday 10:00",
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    });
  }
  if (weatherData.ready) {
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
          <div className="Overview">
            <h1> {weatherData.city}</h1>
            <h2> Last updated: {weatherData.date} </h2>
            <h3> {weatherData.description} </h3>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="clearfix">
                <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                  className="float-left"
                />
                <div className="float-left">
                  <span className="temperature">
                    {Math.round(weatherData.temperature)}
                  </span>
                  <span className="units">
                    <a href="/" className="active">
                      °C
                    </a>
                    |<a href="/">°F</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  Humidity: <span>{weatherData.humidity}</span>%
                </li>
                <li>
                  Wind: <span>{Math.round(weatherData.wind)}</span> km/h
                </li>
              </ul>
            </div>
          </div>
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
  } else {
    const apiKey = "ef6f6066d0882b07185c06ac008e374d";
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
