
/*
    Reducers are pure functions that define HOW the app state changes.
    The reducer function takes two parameters: the previous app state, the action being dispatched and returns the new app state.
*/

import { FETCH_USER } from '../actions/types';

/**
 * 
 * @param {*} state the previous auth state
 * @param {*} action the auth action being dispatched 
 * @returns the new auth state
 */
const authReducer = (state = null, action) => {
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false; //  somehow an empty string '' equals to false in js...
        default:
            return state;

    }
}

export default authReducer;