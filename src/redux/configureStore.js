import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';

import thunk from 'redux-thunk';
import { covidReducer } from './data/covid';

const reducer = combineReducers({
  covidReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
