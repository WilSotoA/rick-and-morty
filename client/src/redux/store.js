import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunk)) // esta línea es para poder hacer peticiones a un server
);
export default store;