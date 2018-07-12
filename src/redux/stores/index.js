import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import catfishReducer from '../reducers/';

export default createStore(
    combineReducers({ catfish: catfishReducer }),
    applyMiddleware(
        promise(),
        createLogger()
    )
);
