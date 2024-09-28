import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/NavBar/Navbar'
import Login from './pages/Login/Login';        
import Main from './pages/Main/Main'; 
import Home from './pages/Home/Home'; 
import Profile from './pages/Profile/Profile'; 

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </>
  )
}

const About = () => <div><h1>About Page</h1></div>;
const NotFound = () => <div>404 - Page Not Found</div>;

export default App
