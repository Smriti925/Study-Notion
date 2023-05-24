import { Route, Routes, Link, NavLink } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" component={<Home />} />
        <Route path="/login" component={<Login />} />
        <Route path="/signup" component={<Signup />} />
        <Route path="/dashboard" component={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
