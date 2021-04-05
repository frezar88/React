import './App.css';
import NavBar from './components/Header';
import Header from './components/NavBar';
import Profile from './components/Profile';


function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <Profile />
    </div>
  );
}

export default App;
