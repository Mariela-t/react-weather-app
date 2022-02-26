import React from "react";
import "./App.css";

export default function Weather() {
  return (
    <div className="row">
      <div className="col-6">
        <div className="clearfix">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="clear"
            className="float-left"
          />
          <div className="float-left">
            <span className="temperature">13</span>
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
            Precipitation: <span>15</span>%
          </li>
          <li>
            Humidity: <span>50</span>%
          </li>
          <li>
            Wind: <span>5</span> km/h
          </li>
        </ul>
      </div>
    </div>
  );
}
