import axios from "axios";

export const date = new Date().toDateString();

const API_KEY = "d6c58b1fd7d174483c0d5969d14bf803";
const URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchweather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });
  return data;
};
