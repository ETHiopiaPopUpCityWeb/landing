import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed z-50 w-full top-0 left-0 bg-[#fffdf7]/70 backdrop-blur-md">
      <nav className="relative flex items-center justify-between px-4 lg:mx-24 py-3 border-b lg:px-0">
        <Link
          to="/"
          className="flex items-center gap-3 text-sky-900 font-semibold text-lg lg:text-2xl hover:opacity-80 transition-opacity"
        >
          <img src="/logo3.png" alt="Logo" className="h-12 w-10" />
          <span className="hidden md:block font-bold">ETHiopia</span>
        </Link>

        <div className="flex items-center space-x-4">
          <Link
            to="https://lemonade.social/e/79ZruyB8"
            className="px-6 py-3 bg-gradient-to-br from-green-900 via-yellow-900 to-red-900  rounded-full  text-white font-medium  hover:bg-gray-800 hover:text-lime-200 transition-all duration-300"
          >
            Apply to Attend
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
