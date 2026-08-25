import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center py-10">
      <h1 className="text-5xl font-bold">LifeBridge</h1>
      <ul className="flex space-x-5 text-lg font-semibold">
        <li className="transition-colors duration-300 hover:text-blue-400">
          <Link to="/">Home</Link>
        </li>
        <li className="transition-colors duration-300 hover:text-blue-400">
          <Link to="/about">About</Link>
        </li>
        <li className="transition-colors duration-300 hover:text-blue-400">
          <Link to="/education">Education</Link>
        </li>
        <li className="transition-colors duration-300 hover:text-blue-400">
          <Link to="/how-it-works">How It Works</Link>
        </li>
        <li className="transition-colors duration-300 hover:text-blue-400">
          <Link to="/stories">Stories</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
