import { useEffect, useState } from "react";
import { fetchweather, date } from "./common/utility";
import "./App.css";
import WeatherCard from "./components/weatherCard";

const App = () => {
  const [weather, setWeather] = useState();
  const [query, setQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const search = async (event) => {
    if (query && query.length > 3 && event.key === "Enter") {
      try {
        const data = await fetchweather(query);
        setWeather(data);
        setErrorMessage("");
        // setQuery("");
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }
  };

  useEffect(() => {
    if (query && query.length < 4) {
      setErrorMessage("Please enter more than 3 character to search");
    } else setErrorMessage("");
  }, [query]);

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
        {errorMessage && <p className="errorMessage">{errorMessage}</p>}
      </div>
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default App;
