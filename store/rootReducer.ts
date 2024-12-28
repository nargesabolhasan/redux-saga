import {combineReducers} from 'redux';
import catReducer from './catSlice';

const rootReducer = combineReducers({
    cats: catReducer,
});

export default rootReducer;