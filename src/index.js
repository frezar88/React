import './index.css';
import state, { subscribe } from './redux/state';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addNewMessage, addPost, checkValueTextArea, updateNowPostText } from './redux/state';



 let reRenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} addNewMessage={addNewMessage} updateNowPostText={updateNowPostText} checkValueTextArea={checkValueTextArea} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
reRenderEntireTree(state);

subscribe(reRenderEntireTree);


reportWebVitals();
