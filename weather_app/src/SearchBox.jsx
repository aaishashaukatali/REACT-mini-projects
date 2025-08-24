import { useState } from "react";
import "./SearchBox.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function SearchBox({ updateWeather }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "2aef182f8ffa1f566a711a651d66f159";

  let getWeatherInfo = async (city) => {
    try {
      let format = await fetch(
        `${API_URL}?q=${city}&limit=1&appid=${API_KEY}&units=metric`
      );
      let store = await format.json();
      console.log(store);
      let res = {
        city: city,
        temp: store.main.temp,
        tempMin: store.main.temp_min,
        tempMax: store.main.temp_max,
        humidity: store.main.humidity,
        feelsLike: store.main.feels_like,
        weather: store.weather[0].description,
      };
      console.log(res);
      return res;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      let getInfo = await getWeatherInfo(city);
      updateWeather(getInfo);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="searchBox">
      <h3>Search Weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
          size="small"
        />
        <br></br>
        <br></br>
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && (
          <p style={{ color: "red" }}>
            "Sorry, you're searching for wrong destination."
          </p>
        )}
      </form>
    </div>
  );
}
