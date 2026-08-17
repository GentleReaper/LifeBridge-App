import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>LifeBridge</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/how-it-works">How It Works</Link>
        </li>
        <li>
          <Link to="/submit-story">Submit Story</Link>
        </li>
        <li>
          <Link to="/stories">Stories</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
