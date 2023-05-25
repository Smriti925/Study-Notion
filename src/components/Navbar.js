import logo from "../assets/Logo.svg";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

function Navbar(props) {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex gap-8 justify-between items-center">
      <Link to="/">
        <img src={logo} alt="logo" width={160} height={32} loading="lazy" />
      </Link>

      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none focus:text-white"
        >
          <HiMenu className="h-6 w-6" />
        </button>
      </div>

      <nav className={`md:flex ${isMenuOpen ? "flex" : "hidden"}`}>
        <ul className="flex gap-8 text-white p-4 font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="flex gap-8 text-white p-4 font-medium">
        {!isLoggedIn && (
          <Link to="/login">
            <button>Log In</button>
          </Link>
        )}

        {!isLoggedIn && (
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button
              onClick={() => {
                setIsLoggedIn(!isLoggedIn);
                toast.success("Logged Out Successfully");
              }}
            >
              Log Out
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button>Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
