import React from 'react';
import {useDispatch} from "react-redux";
import {fetchWeather} from "../actions/weatherAction";

const Form = () => {
    const dispatch = useDispatch();

    const handleClickGetWeather = e => {
        e.preventDefault();
        const city = e.currentTarget.city.value;
        dispatch(fetchWeather(city))
    }
    return (
        <form onSubmit={handleClickGetWeather}>
            <input type='text' name='city' placeholder='City'/>
            <button type='submit'>Get weather</button>
        </form>

    );
}

export default Form;