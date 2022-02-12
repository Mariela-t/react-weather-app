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
    </div>
  );
}

export default App;
