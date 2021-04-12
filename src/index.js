import './index.css';
import store from './redux/redux-store';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let reRenderEntireTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
reRenderEntireTree(store.getState());


store.subscribe(()=>{
    let state=store.getState()
    reRenderEntireTree(state)
});


reportWebVitals();
