import { combineReducers } from 'redux';
import authReducer from './authReducer';

/**
 * Reducers are pure functions that define HOW the app state changes.
 * To deal with reducer complexity, we chunk them down in multiple, simpler reducers and later, we combine them with a Redux helper function called combineReducers.
 */
export default combineReducers({
    auth: authReducer,
})
