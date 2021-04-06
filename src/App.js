import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Profile from './components/Profail/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';





const App = (props) => {
  
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Route /* exact */ path='/Dialogs' render={() => <Dialogs dialogsData={props.dialogsData} messageData={props.messageData }/>} />
          <Route /* exact */ path='/Profile' render={() => < Profile postData={props.postData} />} />
          <Route /* exact */ path='/News' render={() => < News />} />
          <Route /* exact */ path='/Music' render={() => < Music />} />
        
        </div>
      </div>
    </Router>
  );
}

export default App;
