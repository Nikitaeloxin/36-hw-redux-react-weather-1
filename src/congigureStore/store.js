import {applyMiddleware, legacy_createStore as createStore} from "@reduxjs/toolkit";
import {thunkEnhancer} from "../middleware/thunkEnhancer";
import {rootReducer} from "../reducer/rootReducer";

const initialState = {
    weather:{
        country:'',
        city:'',
        temp:'',
        pressure:'',
        sunset: ''
    },
    message:''

}

export const store =createStore(rootReducer,initialState,applyMiddleware(thunkEnhancer));

