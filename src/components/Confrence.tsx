import { dropDownContent4 } from "../constants";
import DropDown from "./DropDown";

const Confrence = () => {
  return (
    <>
      <div className="mb-8">
        <img
          src="/science.jpg"
          alt="ETHiopia Pop-up City"
          className="w-full h-96 object-cover rounded-lg shadow-md mb-6"
        />
        <h3 className="text-xl md:text-3xl font-extrabold text-sky-800 mb-4">
          ETHiopia: Conference
        </h3>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          And to wrap things up beautifully, you are invited to the first-EVER
          Ethereum conference in Ethiopia! Two days to explore decentralized
          tech, discover African innovations, and see how Africa is shaping
          Ethereum’s future.
        </p>
        <strong className="block text-gray-700 text-lg mb-2">
          📆 February 15th–February 16th, 2025
        </strong>
        <div>
          <span className="text-gray-700 font-bold">👋 Apply: </span>
          <a
            href="https://lu.ma/hvmpj8k5"
            className="inline-block text-blue-600 text-base font-semibold underline hover:text-blue-800 transition-colors"
          >
            {" "}
            https://lu.ma/hvmpj8k5
          </a>
        </div>
      </div>
      <div className="border-t pt-6">
        <DropDown data={dropDownContent4} />
      </div>
    </>
  );
};

export default Confrence;
