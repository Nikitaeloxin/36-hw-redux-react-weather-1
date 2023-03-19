import {CHANGE_WEATHER} from "../actions/weatherAction";
const defaultState = {
    country:'',
    city:'',
    temp:'',
    pressure:'',
    sunset: ''
}
export const weatherReducer = (state=defaultState,action) => {
switch (action.type) {
    case CHANGE_WEATHER:
        return {...state,
            country: action.payload.sys.country,
            city:action.payload.name,
            temp:action.payload.main.temp,
            pressure: action.payload.main.pressure,
            sunset:action.payload.sys.sunset
        }

    default:
        return state;

}
}