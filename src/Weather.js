import "./App.css";

export default function Weather() {
  return (
    <div className="row">
      <div className="col-6">
        <div className="clearfix weather-temperature">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="clear"
            className="float-left"
          />
          <div className="float-left">
            <strong> 13 </strong>
            <small>
              <a href="/" className="active">
                °C{" "}
              </a>
              |<a href="/">°F</a>
            </small>
          </div>
        </div>
      </div>
      <div className="col-6">
        <ul>
          <li>
            Humidity: <span> 50 </span>%
          </li>
          <li>
            Wind: <span>5</span> km/h
          </li>
        </ul>
      </div>
    </div>
  );
}
