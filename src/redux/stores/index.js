import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import catfishReducer from '../reducers/';

export default createStore(
    catfishReducer,
    applyMiddleware(
        promise(),
        createLogger()
    )
);
