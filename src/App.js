import { useEffect, useState } from "react";
import { fetchweather, date } from "./common/utility";
import "./App.css";
import WeatherCard from "./components/weatherCard";

const App = () => {
  const [weather, setWeather] = useState();
  const [query, setQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

//   const addEntry = () => {
//     // Parse any JSON previously stored in allEntries
//     let existingEntries = JSON.parse(localStorage.getItem("allEntries"));
//     if(existingEntries == null) existingEntries = [];
//     const entryTitle = document.getElementById("entryTitle").value;
//     const entryText = document.getElementById("entryText").value;
//     const entry = {
//         "title": entryTitle,
//         "text": entryText
//     };
//     localStorage.setItem("entry", JSON.stringify(entry));
//     // Save allEntries back to local storage
//     existingEntries.push(entry);
//     localStorage.setItem("allEntries", JSON.stringify(existingEntries));
// };

  const search = async (event) => {
    // if (query && query.length > 3 && event.key === "Enter") {
      try {
        const data = await fetchweather(query);
        setWeather(data);
        setErrorMessage("");
        // setQuery("");
      } catch (error) {
        console.error(error);
        alert(error);
      }
    // }

    let existingQuery = JSON.parse(localStorage.getItem('allItems'));
    if(existingQuery === null) existingQuery = [];
    const history = {
      "cityName" : query
    };
    localStorage.setItem('history', JSON.stringify(history));

    const array = localStorage.getItem('allItems');
    const hist = (localStorage.getItem('history'));
    console.log(existingQuery.length)
    // if(!array?.includes(hist) && existingQuery.length < 10) {
      existingQuery.push(history);
    // }
    localStorage.setItem('allItems', JSON.stringify(existingQuery));
  };

  const ar = JSON.parse(localStorage.getItem('allItems'))

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
            // onKeyPress={search}
          />
          <button onClick={search}>Search</button>
        </div>
        {ar?.slice(-10).reverse().map((item) => {
          return (
            <div onClick={()=>setQuery(item.cityName)}>{item.cityName}</div>
          )
        })}
        {errorMessage && <p className="errorMessage">{errorMessage}</p>}
      </div>
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default App;
