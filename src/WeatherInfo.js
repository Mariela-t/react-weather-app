import React from "react";
import FormatedDate from "./FormatedDate";
import WeatherUnits from "./WeatherUnits";

export default function WeatherInfo(props) {
  return (
    <>
      <div className="Overview">
        <h1> {props.data.city}</h1>
        <ul>
          <li>
            <FormatedDate date={props.data.date} />
          </li>
          <li>{props.data.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="float-left"
            />
            <div className="float-left">
              <WeatherUnits celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </>
  );
}
