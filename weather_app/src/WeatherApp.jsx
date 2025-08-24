import{useState} from 'react';
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css";

export default function WeatherApp() {
  let [weather, setWeather] = useState({
    city: "Delhi",
    feelsLike: 34.99,
    humidity: 69,
    temp: 30.08,
    tempMax: 30.08,
    tempMin: 30.08,
    weather: "haze",
  });

  let updateWeather = async (res)=>{
    setWeather(res);
  }
  return (
    <>
      <SearchBox updateWeather = {updateWeather}/>
      <InfoBox info = {weather}/>
    </>
  );
}
