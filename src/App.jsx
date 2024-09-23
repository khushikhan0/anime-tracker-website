import './App.css'
import Navbar from './components/NavBar/Navbar'
import { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
    <div>
      <Navbar />
    </div>
    <button onClick={toggleTheme}>
      Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
    </button>
    <h1 className='title dark-mode'>MyAnimeList if it Wasn't Mid</h1>
    <h4 className="about-us">
      developed by ahren agatep and khushi khan :3
      </h4>
    </div>
  )
}

export default App
