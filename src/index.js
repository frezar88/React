import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
  { id: 1, message: 'Hi, how are yoy?', likesCount: 12 },
  { id: 2, message: "It's my first post", likesCount: 2 },
]
let dialogs = [
  { id: 1, name: 'Bob' },
  { id: 2, name: 'Alex' },
  { id: 3, name: 'Natasha' },
  { id: 4, name: 'Egor' },
  { id: 5, name: 'Sveta' },
  { id: 6, name: 'Dima' },
]

let message = [
  { id: 1, message: 'HI' },
  { id: 2, message: 'How are you' },
  { id: 3, message: 'Yo' },
  { id: 4, message: 'Hello' },
  { id: 5, message: 'Noob' },
  { id: 6, message: 'Hello' },
]


ReactDOM.render(
  <React.StrictMode>
    <App postData={postData} dialogsData={dialogs} messageData={message} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
