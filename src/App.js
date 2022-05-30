import { useState } from "react";
import { fetchweather, date } from "./common/utility";
import "./App.css";
import WeatherCard from "./components/weatherCard";

const App = () => {
  const [weather, setWeather] = useState();
  const [query, setQuery] = useState("");

  const search = async (event) => {
    if ((query && query.Length > 3) || event.key === "Enter") {
      try {
        const data = await fetchweather(query);
        setWeather(data);
        // setQuery("");
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }
  };

  return (
    <div className="App">
      <div className="header">
        <div>{date}</div>
        <div>
          <input
            placeholder="city"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={search}
          />
        </div>
      </div>
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default App;
