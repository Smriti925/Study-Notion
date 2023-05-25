import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-gray-800 text-gray-300">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <div className="flex flex-grow justify-center items-center">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/signup"
            element={<Signup setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
