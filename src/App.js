import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchWeather from "./components/pages/SearchWeather";
import NavBar from "./components/NavBar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Subscribe from "./components/pages/Subscribe";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<SearchWeather />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/subscribe" element={<Subscribe />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
