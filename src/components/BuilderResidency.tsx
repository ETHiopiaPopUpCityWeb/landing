import { dropDownContent2 } from "../constants";
import DropDown from "./DropDown";

const BuilderResidency = () => {
  return (
    <>
      <div className="mb-8">
        <img
          src="/res.jpg"
          alt="ETHiopia Pop-up City"
          className="w-full h-96 object-cover rounded-lg shadow-md mb-6"
        />
        <h3 className="text-2xl font-extrabold text-sky-800 mb-4">
          ETHiopia: Builder Residency
        </h3>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          The Pop-up City is a great way to connect. But what if you also joined
          our Builder Residency? A month of collaboration, ideation, and project
          development with top Web3 innovators. Working with global partners in
          a unique residency tailored to Africa’s challenges and opportunities.
        </p>
        <strong className="block text-gray-700 text-base mb-2">
          📆 January 27th–February 17th, 2025
        </strong>
        <div>
          <span className="text-gray-700 font-bold">👋 Apply: </span>
          <a
            href="https://tally.so/r/3qjPD7"
            className="inline-block text-blue-600 text-base font-semibold underline hover:text-blue-800 transition-colors"
          >
            {" "}
            https://tally.so/r/3qjPD7
          </a>
        </div>
      </div>
      <ul className="list-disc list-inside text-gray-700 mb-8">
        <li className="mb-2">
          <strong>Collaboration </strong>
        </li>
        <li className="mb-2">
          <strong>Skill development </strong>
        </li>
        <li className="mb-2">
          <strong>
            Creating transformative solutions for real-world challenges{" "}
          </strong>
        </li>
      </ul>
      <div className="border-t pt-6">
        <DropDown data={dropDownContent2} />
      </div>
    </>
  );
};

export default BuilderResidency;
