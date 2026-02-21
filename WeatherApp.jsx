
import { useState } from "react";
import Search from "./Search";
import Xerox from "./Xerox";

function WeatherApp(){
    let[weather,setWeather]=useState({
              city:"Delhi",
  temp:24.5,
  tempMin:25.0,
  tempMax:25.0,
  feelsLike:20,
  weather:"haze",
  humidity:25.9
    })

    let update=(newInfo)=>{
        setWeather(newInfo);
    }
    return(
        <>
        <h1>Weather App</h1>
        <Search update={update} />
        <br /><br />
        <Xerox info={weather} />
        </>
    )
}
export default WeatherApp;