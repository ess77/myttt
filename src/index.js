import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import './index.css';
import rootReducer from './reducers/rootRedux'
import Game from './containers/Game';
import Corporate from './components/Corporate';


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
        <Corporate />
    </Provider>
        , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

