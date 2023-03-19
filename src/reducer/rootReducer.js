import {combineReducers} from "@reduxjs/toolkit";
import {weatherReducer} from "./weatherReducer";
import {messageReducer} from "./messageReducer";

export const rootReducer = combineReducers({
    weather: weatherReducer,
    message: messageReducer
})