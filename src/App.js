import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Profile from './components/Profail/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';





const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Route path='/Dialogs' component={Dialogs} />
          <Route path='/Profile' component={Profile} />
          <Route path='/News' component={News} />
          <Route path='/Music' component={Music}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
