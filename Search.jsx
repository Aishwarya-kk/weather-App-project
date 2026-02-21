
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function Search({ update }){
      let[city,setCity]=useState("");
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="1031e82180981b48e6b9fba105594774";




let getwe=async()=>{
let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
let json=await response.json();

let result= {
    city:city,
    temp:json.main.temp,
    tempMin:json.main.temp_min,
    tempMax:json.main.temp_max,
    humidity:json.main.humidity,
    feels_like:json.main.feels_like,
    weather:json.weather[0].description,
}
console.log(result);
return result;
}

  
    let handle=(event)=>{
      setCity(event.target.value);
    }
    let submit=async(event)=>{
    event.preventDefault();
    console.log(city);
    setCity("");
   let newInfo=await getwe();
   update(newInfo);
    }
    return(
        <div>
        
            <form onSubmit={submit}>
    <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handle}  />
    <br /><br />
    <Button variant="contained" type="submit" >Search</Button>

    </form>
    <div>
        
    </div>
        </div>
    )
}
export default Search;