import { createStore,combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {reducer as customInputReducer} from '../components/custom-input/reducer'

export const store = createStore(combineReducers({
    username:customInputReducer("username"),
    password:customInputReducer("password")
}),composeWithDevTools());