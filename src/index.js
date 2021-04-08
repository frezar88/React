import './index.css';
import state from './redux/state';
import { reRenderEntireTree } from './render';
import reportWebVitals from './reportWebVitals';



reRenderEntireTree(state);


reportWebVitals();
