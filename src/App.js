import "./App.css";
import Homepage from "./Components/HomePage/Homepage";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Projects from "./Components/Projects/Projects";
import ContactForm from "./Components/ContactForm/ContactForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// ✨ We move AnimatePresence *inside* a wrapper that has access to useLocation()

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-dark">
        <header className="App-header">
          <Navbar />
        </header>

        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
