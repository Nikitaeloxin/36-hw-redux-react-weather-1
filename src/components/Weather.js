import React from 'react';
import {useSelector} from "react-redux";


const Weather = () => {
    const {weather,message} = useSelector(store=>store);

    return (
        <div className='infoWeath'>
            {!message &&
                <div>
                    <p>Location: {weather.country}, {weather.city}</p>
                    <p>Temp: {weather.temp}</p>
                    <p>Pressure: {weather.pressure}</p>
                    <p>Sunset: {new Date(weather.sunset * 1000).toLocaleTimeString()}</p>
                </div>}
            <p>{message}</p>
        </div>
    );


};

export default Weather;