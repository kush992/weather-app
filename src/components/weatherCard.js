import React from "react";

const WeatherCard = ({ weather }) => {
  return (
    <div className="weather-card">
      <div>
        {weather.name} &nbsp;
        <span className="weather-card__country">{weather.sys.country}</span>
      </div>
      <div className="weather-card__header">
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />
        <div className="weather-card__temp">
          {Math.round(weather.main.temp)}&#x2103;
        </div>
      </div>
      <div className="weather-card__description">
        {weather.weather[0].description}
      </div>
      <div className="weather-card__info">
        <div>
          <p className="weather-card__detail">
            <strong>Sunrise: </strong>
            <span>{weather.sys.sunset}</span>
          </p>
          <p className="weather-card__detail">
            <strong>Sunset:</strong>
            <span>{weather.sys.sunrise}</span>
          </p>
          <p className="weather-card__detail">
            <strong>Humidity: </strong>
            <span>{weather.main.humidity}%</span>
          </p>
          <p className="weather-card__detail">
            <strong>Pressure: </strong>
            <span>{weather.main.pressure} mb</span>
          </p>
        </div>
        <div>
          <p className="weather-card__detail">
            <strong>Feels Like: </strong>
            <span>{Math.round(weather.main.feels_like)}&#x2103;</span>
          </p>
          <p className="weather-card__detail">
            <strong>Visibility: </strong>
            <span>{weather.visibility / 1000} km</span>
          </p>
          <p className="weather-card__detail">
            <strong>Wind: </strong>
            <span>{weather.wind.speed}km/h</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
