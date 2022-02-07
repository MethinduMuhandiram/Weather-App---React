import React, { useState, useEffect } from "react";
import "./SearchWeather.css";

function SearchWeather() {
  const [city, setCity] = useState("City");
  const [input, setInput] = useState("");
  const [temp, setTemp] = useState("Temperature");
  const [descr, setDescr] = useState("Description");
  const [tempMin, setTempMin] = useState("Temp-min");
  const [tempMax, setTempMax] = useState("Temp-max");
  const [weatherIcon, setWeatherIcon] = useState("13n");

  const api_key = "889219a3a6ee186918d53b7bad5dc740";

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTemp(data.main.temp);
        setDescr(data.weather[0].description);
        setTempMin(data.main.temp_min);
        setTempMax(data.main.temp_max);
        setWeatherIcon(data.weather[0].icon);
      });
  }, [city]);

  function inputChangeHandler(event) {
    setInput(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    setCity(input);
  }

  return (
    <div>
      <div className="container mt-5" id="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card text-white text-center border-0">
              <img
                src={`https://source.unsplash.com/random/600x900/?${descr}`}
                className="card-img"
                alt="card-img"
              />
              <div className="card-img-overlay">
                <form onSubmit={submitHandler}>
                  <div className="input-group mb-4 w-75 m-auto mt-2">
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search City"
                      aria-label="Search City"
                      aria-describedby="basic-addon2"
                      value={input}
                      onChange={inputChangeHandler}
                      required
                    />
                    <button
                      className="btn btn-light btn-outline-primary"
                      type="submit"
                      id="button-addon2"
                      value={city}
                    >
                      <i className="fas fa-search-location"></i>
                    </button>
                  </div>
                </form>
                <div className="bg-dark opacity-75 py-3">
                  <h2 className="card-title">{city}</h2>
                  <p className="card-text lead">{new Date().toDateString()}</p>
                  <hr />

                  <h1 className="fw-bolder mb-3">
                    {(temp - 273.15).toFixed(2)} &deg;C
                  </h1>
                  <img
                    src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
                    className="weather-icon"
                    alt="card-img"
                  />
                  <p className="lead fw-bolder">{descr}</p>
                  <p className="lead">
                    min: {(tempMin - 273.15).toFixed(2)} &deg;C | max:{" "}
                    {(tempMax - 273.15).toFixed(2)} &deg;C
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchWeather;
