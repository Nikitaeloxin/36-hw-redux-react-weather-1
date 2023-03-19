import {CHANGE_MESSAGE} from "../actions/messageAction";

const defaultState = ''

export const messageReducer=(state=defaultState,action)=>{
    switch (action.type) {
        case CHANGE_MESSAGE:
            return action.payload
        default:
            return state;

    }
}