import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import './Searchbox.css';

export default function Searchbox({updateInfo}) {

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let getWeatherinfo = async () => {
        try {
            let response = await fetch(`${import.meta.env.VITE_BASE_URL}?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`);
            let jsonResponse = await response.json();

            if (!jsonResponse || (jsonResponse.cod && Number(jsonResponse.cod) !== 200)) {
                throw new Error(jsonResponse.message || 'Failed to fetch weather');
            }

            let result = {
                city: city,
                temp: jsonResponse?.main?.temp,
                tempMin: jsonResponse?.main?.temp_min,
                tempMax: jsonResponse?.main?.temp_max,
                humidity: jsonResponse?.main?.humidity,
                feelslike: jsonResponse?.main?.feels_like,
                weather: jsonResponse?.weather?.[0]?.description,
            };

            console.log('fetched weather result:', result);
            return result;
        } catch (error) {
            throw error;
        }
    }; 


    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log("Form submitted with city: ", city);
            setCity("");
            let newInfo = await getWeatherinfo();
            updateInfo(newInfo);
        } catch (error) {
            setError(true);
        }   
    };


    let handleChange = (event) => {
        setCity(event.target.value);
    };


    return(
    <div className='Searchbox'>
        <form onSubmit={handleSubmit}>
            <span>
                <TextField id="outlined-basic" label="City Name" variant="outlined" value={city} onChange={handleChange} />
                <br /> <br />
                <Button type="submit" variant="outlined">Search</Button>
                {error && <Alert severity="info">Sorry🙃 no such city found!</Alert>}
            </span>
        </form>
    </div>
    );
}