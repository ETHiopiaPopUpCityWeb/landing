import { FaTwitter, FaLinkedin, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-6 border-t border-gray-200">
        <div className="flex flex-wrap justify-between items-center gap-2">
          {/* Copyright Section */}
          <div>
            <p className="text-xs text-gray-600">© 2024 ETHiopia.</p>
          </div>
          {/* Navigation Links */}
          <ul className="flex flex-wrap items-center gap-4">
            <li>
              <a
                href="#"
                className="text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2"
              >
                <FaTwitter className="inline-block mr-1" />X (Twitter)
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2"
              >
                <FaLinkedin className="inline-block mr-1" />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2"
              >
                <FaTelegram className="inline-block mr-1" />
                Telegram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
