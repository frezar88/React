import './index.css';
import store from './redux/state';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';




let reRenderEntireTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <App state={state}  addPost={store.addPost.bind(store)}  addNewMessage={store.addNewMessage.bind(store)}
                 updateNowPostText={store.updateNowPostText.bind(store)} checkValueTextArea={store.checkValueTextArea.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
reRenderEntireTree(store.getState());


store.subscribe(reRenderEntireTree);


reportWebVitals();
