import { createStore, applyMiddleware } from 'redux';
import { createReducer } from './reducers.js';
import { configureThunk } from './middlewares';
import { basePath } from './env';
import { composeWithDevTools } from 'redux-devtools-extension';

export const configureStore = (initialState = {}) => {
    const store = createStore(createReducer(), { ...initialState }, composeWithDevTools(applyMiddleware(configureThunk(basePath))));
    return store;
};