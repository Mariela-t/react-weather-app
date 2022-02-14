import Weather from "./Weather";
import Overview from "./Overview";
import "./App.css";

function App() {
  return (
    <div className="boxWrapper">
      <div className="box">
        <form className="mb-4">
          <input
            type="search"
            placeholder="Enter city..."
            className="form-control mb-3"
            autoComplete="off"
          />
          <input type="submit" value="Search" className="button" />
        </form>
        <Overview />
        <Weather />
      </div>
      <span>
        {" "}
        <a
          href="https://github.com/Mariela-t/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code{" "}
        </a>{" "}
        by Mariela Tinoco Rojas{" "}
      </span>
    </div>
  );
}

export default App;
