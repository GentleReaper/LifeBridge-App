import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="flex items-center justify-between px-6 py-6 lg:px-8">
        <h1 className="text-3xl font-bold">LifeBridge</h1>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-6 text-base font-semibold lg:flex">
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>

          <li className="nav-link">
            <Link to="/about">About</Link>
          </li>

          <li className="nav-link">
            <Link to="/education">Education</Link>
          </li>

          <li className="nav-link">
            <Link to="/how-it-works">How It Works</Link>
          </li>

          <li className="nav-link">
            <Link to="/stories">Stories</Link>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden transition duration-300 hover:text-blue-400 hover:scale-105"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <ul className="flex flex-col gap-5 border-t border-gray-700 px-6 py-6 text-lg font-semibold lg:hidden">
          <li className="nav-link">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>

          <li className="nav-link">
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>

          <li className="nav-link">
            <Link to="/education" onClick={() => setMenuOpen(false)}>
              Education
            </Link>
          </li>

          <li className="nav-link">
            <Link to="/how-it-works" onClick={() => setMenuOpen(false)}>
              How It Works
            </Link>
          </li>

          <li className="nav-link">
            <Link to="/stories" onClick={() => setMenuOpen(false)}>
              Stories
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
