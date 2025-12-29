import React, { useState } from 'react';
import Searchbox from './Searchbox.jsx';
import Infobox from './Infobox.jsx';
import './Weatherapp.css';


export default function Weatherapp() {

    const [weatherInfo, setwaetherInfo] = useState({
        city: "Your City",
        temp: 0,
        tempMin: 0,
        tempMax: 0,
        humidity: 0,
        feelslike: 0,
        weather: "cold"
    });

    let updateInfo = (newInfo) => {
        setwaetherInfo(newInfo);
    }



    return(
        <div className='Weatherapp'>
            <h3><i>Weather App</i></h3>
            <Searchbox updateInfo={updateInfo} />
            <Infobox info={weatherInfo} />
            <h4><i>Made with ❤️ By <a href="https://www.linkedin.com/in/abhijeet-dhokne-8644a32b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_ap">@abhijeetdhokne</a></i></h4>
        </div>
    );
}