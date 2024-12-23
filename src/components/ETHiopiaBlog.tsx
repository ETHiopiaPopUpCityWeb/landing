import { dropDownContent } from "../constants";
import DropDown from "./DropDown";

const ETHiopiaBlog = () => {
  return (
    <>
      <div className="mb-10">
        {/* Image Section */}
        <img
          src="/city2.jpg"
          alt="ETHiopia Pop-up City"
          className="w-full h-96 object-cover rounded-lg mb-8 transition-transform duration-300"
        />

        {/* Content Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-extrabold text-sky-800">
            ETHiopia: Pop-up City
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            First stop: our Pop-Up City! A month of coworking and building with
            Africa's web3 changemakers to create momentum for Ethereum and
            innovation across Africa while embracing Ethiopia’s rich culture.
          </p>

          <div className="space-y-2">
            <strong className="block text-gray-800 text-base">
              📆 January 21st–February 21st, 2025
            </strong>
            <div>
              <span className="text-gray-700 font-bold ">👋 Apply: </span>
              <a
                href="https://tally.so/r/3lVADW"
                className="inline-block text-blue-600 text-base font-semibold underline hover:text-blue-800 transition-colors"
              >
                {" "}
                https://tally.so/r/3lVADW
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider and Dropdown Section */}
      <div className="border-t border-gray-300 pt-6">
        <DropDown data={dropDownContent} />
      </div>
    </>
  );
};

export default ETHiopiaBlog;
