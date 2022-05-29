import { useState } from "react";
import { fetchweather, date } from "./common/utility";
import "./App.css";

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
      {weather && (
        <div className="result">
          <div>
            {weather.name}
            <sup>{weather.sys.country}</sup>
          </div>
          <div className="result-header">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <div className="temp">{Math.round(weather.main.temp)}&#x2103;</div>
          </div>
          <div className="info">{weather.weather[0].description}</div>
          <div className="other-info">
            <div>
              <p className="more-content">
                <strong>Sunrise: </strong>
                <span>{weather.sys.sunset}</span>
              </p>
              <p className="more-content">
                <strong>Sunset:</strong>
                <span>{weather.sys.sunrise}</span>
              </p>
              <p className="more-content">
                <strong>Humidity: </strong>
                <span>{weather.main.humidity}%</span>
              </p>
              <p className="more-content">
                <strong>Pressure: </strong>
                <span>{weather.main.pressure} mb</span>
              </p>
            </div>
            <div>
              <p className="more-content">
                <strong>Feels Like: </strong>
                <span>{Math.round(weather.main.feels_like)}&#x2103;</span>
              </p>
              <p className="more-content">
                <strong>Visibility: </strong>
                <span>{weather.visibility / 1000} km</span>
              </p>
              <p className="more-content">
                <strong>Wind: </strong>
                <span>{weather.wind.speed}km/h</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
