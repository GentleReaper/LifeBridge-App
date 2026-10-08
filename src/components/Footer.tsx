import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="mt-auto bg-gray-900 text-white px-7">
      <div
        className="mx-auto grid max-w-7xl grid-cols-1 gap-10
       px-6 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8 text-lg"
      >
        <div>
          <h3 className="mb-5 text-xl font-bold text-white">LifeBridge</h3>

          <p className="max-w-sm leading-7 text-gray-300">
            Connecting generous donors with those in need. Together, we can give
            the gift of life.
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">Quick Links</h3>

          <ul className="space-y-3">
            <li>
              <Link
                to="/"
                className="text-gray-300 transition-colors duration-300 hover:text-blue-400"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="text-gray-300 transition-colors duration-300 hover:text-blue-400"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                to="/how-it-works"
                className="text-gray-300 transition-colors duration-300 hover:text-blue-400"
              >
                How It Works
              </Link>
            </li>

            <li>
              <Link
                to="/education"
                className="text-gray-300 transition-colors duration-300 hover:text-blue-400"
              >
                Education
              </Link>
            </li>

            <li>
              <Link
                to="/stories"
                className="text-gray-300 transition-colors duration-300 hover:text-blue-400"
              >
                Stories
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">
            Get Involved
          </h3>

          <ul className="space-y-3">
            <li>
              <Link
                to="/donor-registration"
                className="text-gray-300 transition-colors duration-300 hover:text-blue-400"
              >
                Become a Donor
              </Link>
            </li>

            <li>
              <Link
                to="/recipient"
                className="text-gray-300 transition-colors duration-300 hover:text-blue-400"
              >
                Become a Recipient
              </Link>
            </li>

            <li>
              <Link
                to="/submit-story"
                className="text-gray-300 transition-colors duration-300 hover:text-blue-400"
              >
                Share Your Story
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-semibold text-white  transition-colors duration-300 hover:text-blue-400">
            <Link to="/contact">Contact Us</Link>
          </h3>

          <div className="space-y-2 text-gray-300">
            <p>Email: lifebridge@example.com</p>
            <p>Phone: +254 700 000 000</p>
            <p>Kenya</p>
          </div>

          <div className="mt-10 flex justify-evenly">
            <a
              href="https://www.facebook.com/LifeBridge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="foot-icon" />
            </a>

            <a
              href="https://twitter.com/LifeBridge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="foot-icon" />
            </a>

            <a
              href="https://www.instagram.com/LifeBridge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="foot-icon" />
            </a>
            <a
              href="https://www.youtube.com/LifeBridge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="foot-icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 text-center sm:flex-row sm:text-left lg:px-8">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} LifeBridge. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <Link
              to="/privacy"
              className="text-sm text-gray-400 transition-colors duration-300 hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-sm text-gray-400 transition-colors duration-300 hover:text-white"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
