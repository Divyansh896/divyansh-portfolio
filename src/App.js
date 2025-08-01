import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Footer from './Footer';
import Projects from './Projects';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
