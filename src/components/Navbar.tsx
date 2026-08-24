import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center py-10">
      <h1 className="text-4xl font-bold">LifeBridge</h1>
      <ul className="flex space-x-4 text-lg">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/education">Education</Link>
        </li>
        <li>
          <Link to="/how-it-works">How It Works</Link>
        </li>
        <li>
          <Link to="/stories">Stories</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
