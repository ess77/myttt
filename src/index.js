import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import { createStore } from 'redux'
import { applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/index'
import Game from './containers/Game';


// const middleware = ({ coco }) => (fifi) => (dede) => {
//     console.log('start', dede);
//     const returnedValue = fifi(dede);
//     console.log('end', dede);
//     return returnedValue;
// };

// const myStore = createStore(
//     rootReducer,
//     applyMiddleware(middleware)
// );


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

ReactDOM.render(
    // <Provider store={myStore}><Game />
    <Provider store={createStoreWithMiddleware(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <Game />
    </Provider>
        , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

