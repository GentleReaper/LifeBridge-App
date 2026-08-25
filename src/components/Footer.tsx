import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-auto bg-gray-900 text-white">
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
          <h3 className="mb-5 text-lg font-semibold text-white">Contact Us</h3>

          <div className="space-y-2 text-gray-300">
            <p>Email: lifebridge@example.com</p>
            <p>Phone: +254 700 000 000</p>
            <p>Kenya</p>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="#"
              className="rounded-md border border-gray-700 px-3 py-2 text-sm text-gray-300 transition-all duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
            >
              Facebook
            </a>

            <a
              href="#"
              className="rounded-md border border-gray-700 px-3 py-2 text-sm text-gray-300 transition-all duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
            >
              Twitter
            </a>

            <a
              href="#"
              className="rounded-md border border-gray-700 px-3 py-2 text-sm text-gray-300 transition-all duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
            >
              Instagram
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
