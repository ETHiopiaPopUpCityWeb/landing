import { dropDownContent3 } from "../constants";
import DropDown from "./DropDown";

const Hackthon = () => {
  return (
    <>
      <div className="mb-8">
        <img
          src="/hacks.webp"
          alt="ETHiopia Pop-up City"
          className="w-full h-96 object-cover rounded-lg shadow-md mb-6"
        />
        <h3 className="text-2xl font-extrabold text-sky-800 mb-4">
          ETHiopia: Hackathon Week
        </h3>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          During this 5-day hackathon, you will:{" "}
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-8">
          <li className="mb-2">
            <strong>Work on real-world blockchain projects </strong>
          </li>
          <li className="mb-2">
            <strong>
              Learn Solidity (for those who are not comfortable with it. Yet){" "}
            </strong>
          </li>
          <li className="mb-2">
            <strong>Innovate together, from ideation to creation</strong>
          </li>
          <li className="mb-2">
            <strong>Build a stronger network in the Ethereum ecosystem</strong>
          </li>
        </ul>
        <strong className="block text-gray-700 text-base mb-2">
          📆 February 10th–February 14th, 2025
        </strong>

        <div>
          <span className="text-gray-700 font-bold">👋 Apply: </span>
          <a
            href="https://lu.ma/20nminfw"
            className="inline-block text-blue-600 text-base font-semibold underline hover:text-blue-800 transition-colors"
          >
            {" "}
            https://lu.ma/20nminfw
          </a>
        </div>
      </div>

      <div className="border-t pt-6">
        <DropDown data={dropDownContent3} />
      </div>
    </>
  );
};

export default Hackthon;
