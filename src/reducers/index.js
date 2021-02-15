import movieReducer from './movie';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    isLogged: loggedReducer,
    selectedMovie: movieReducer
})

export default allReducers;