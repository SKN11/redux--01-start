import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore ,combineReducers ,applyMiddleware,compose} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import {Provider} from 'react-redux'
import resultReducer from './redux/reducer/result'
import counterReducer from './redux/reducer/counter'

const rootReducer = combineReducers({
    ctr : counterReducer,
    res : resultReducer
});

const logger = store => {
    return next => {
        return action => {    //it is ismple middleware
            console.log('[Middleware] Dispatching',action);
            const result = next(action);   // now redux takes these action to reducer
            //this is the middleware part
            console.log('[Middleware] next state',store.getState());
            return result;
        }
    }
}


//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer , composeWithDevProviderTools(applyMiddleware(logger,thunk)));


ReactDOM.render(<Provider store={store}> <App/></Provider>, document.getElementById('root'));
registerServiceWorker();
