import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Profile from './components/Profail/Profile';
import Dialogs from './components/Dialogs/Dialogs';


const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className='app-wrapper-content'>
        <Dialogs />
        {/* <Profile /> */}
      </div>

    </div>
  );
}

export default App;
