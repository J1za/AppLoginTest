import { LOGGED_IN, LOGGED_OUT } from '../types/auth';

const initialState = {
    isLogged: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGGED_IN:
            return {
                ...state,
                isLogged: true,
            };
        case LOGGED_OUT: {
            return {
                ...state,
                isLogged: false,
            };
        }
        default:
            return state;
    }
};