
import './index.css';
//import {store} from "./redux/state";
import store from './redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";

//let rerender = (state)=>{
    ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
    <App  dispatch={store.dispatch.bind(store)} store={store} />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

//}
/*rerender(store.getState());
store.subscribe(()=> {
    let state = store.getState();
    rerender(state);
});*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
