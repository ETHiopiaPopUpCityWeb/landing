import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const navlinks = [
  {
    href: "/Understand-why-ETHiopia",
    label: "Understand Why ETHiopia",
  },
  {
    href: "/blogs",
    label: "FAQs",
  },
  {
    href: "/lotto",
    label: "ETHiopia Lottery",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-2 top-0 left-0 bg-white/80 backdrop-blur-md">
      <nav className="relative max-w-[85rem] w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-0 mx-auto">
        <div className="md:col-span-3">
          <Link
            to="/"
            className="flex items-center gap-3 text-sky-900 font-semibold text-lg lg:text-2xl hover:opacity-80 transition-opacity"
          >
            <img
              src="/logo.jpg"
              alt="Logo"
              className="h-12 w-12 rounded-full"
            />
            <span className="hidden md:block font-bold">ETHiopia</span>
          </Link>
        </div>

        <div className="flex items-center gap-x-1 md:gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3 mx-2">
          <Link
            to="https://tally.so/r/3lVADW"
            className="px-6 py-3 bg-gradient-to-tr from-pink-500 to-yellow-500  rounded-full  text-white font-medium  hover:bg-gray-800 hover:text-lime-200 transition-all duration-300"
          >
            Apply to Attend
          </Link>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-2 text-gray-800 justify-end md:ml-5">
            <div className="flex gap-5 items-center">
              <a
                href="https://t.me/+AjDnr___sQNkMGNl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-900 hover:text-sky-500 transition-transform transform hover:scale-110"
              >
                <FaTelegram size={22} />
              </a>
              <a
                href="https://x.com/ethiopia____?s=21&t=-bHfXrPK9kia9yCY3hKpjQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-900 hover:text-sky-500 transition-transform transform hover:scale-110"
              >
                <FaXTwitter size={22} />
              </a>
              <a
                href="https://www.linkedin.com/company/ethiopia-eth/about/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-900 hover:text-sky-500 transition-transform transform hover:scale-110"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            {isMenuOpen ? (
              <FiX className="text-3xl" />
            ) : (
              <HiOutlineMenuAlt3 className="text-3xl" />
            )}
          </button>
        </div>

        <div
          className={`${
            isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          } md:block transition-all duration-500 ease-in-out overflow-hidden md:max-h-none md:opacity-100 basis-full grow md:w-auto md:basis-auto md:order-2 md:col-span-6`}
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-8 md:mt-0">
            {navlinks.map((item, index) => (
              <div key={index}>
                <Link
                  className={`relative font-semibold inline-block text-lg hover:text-orange-700    pb-1
                    ${
                      location.pathname === item.href
                        ? "text-gray-950 focus:outline-none before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-orange-400"
                        : "text-gray-700"
                    }`}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
