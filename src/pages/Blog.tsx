import BuilderResidency from "../components/BuilderResidency";
import Confrence from "../components/Confrence";
import ETHiopiaBlog from "../components/ETHiopiaBlog";
import Hackthon from "../components/Hackthon";

const Blog = () => {
  return (
    <div className="px-4 py-32 max-w-4xl mx-auto">
      <div className="mb-8">
        <h3 className="text-2xl lg:text-3xl font-bold text-sky-800 mb-4">
          What are you doing in January & February?
        </h3>
        <h5 className="text-lg text-gray-700 mb-4">
          What if we told you that you could join a pop-up city, a builder
          residency, a hackathon, AND a conference, all happening in Addis
          Ababa, Ethiopia?
        </h5>
        <p className="text-gray-600 text-base leading-relaxed p-4 bg-orange-100 border-l-4 border-orange-500 mb-4">
          This is more than just an event—it’s a global experience. Come connect
          with visionaries from across the world, live with like-minded
          changemakers, and collaborate on groundbreaking projects that could
          change lives and communities.
        </p>
      </div>

      <ul className="list-disc list-inside text-gray-700 mb-8">
        <li className="mb-2">
          <strong>January 21st–February 21st:</strong> Pop Up City (
          <a
            href="https://tally.so/r/3lVADW"
            className="text-blue-600 underline"
          >
            https://tally.so/r/3lVADW
          </a>
          )
        </li>
        <li className="mb-2">
          <strong>January 27th–February 17th:</strong> IRL Builder Residency (
          <a
            href="https://tally.so/r/3qjPD7"
            className="text-blue-600 underline"
          >
            https://tally.so/r/3qjPD7
          </a>
          )
        </li>
        <li className="mb-2">
          <strong>February 10th–14th:</strong> Hackathon Week (
          <a href="https://lu.ma/20nminfw" className="text-blue-600 underline">
            https://lu.ma/20nminfw
          </a>
          )
        </li>
        <li>
          <strong>February 15th & 16th:</strong> 1st ETH Conference (
          <a href="https://lu.ma/hvmpj8k5" className="text-blue-600 underline">
            https://lu.ma/hvmpj8k5
          </a>
          )
        </li>
      </ul>

      <ETHiopiaBlog />
      <BuilderResidency />
      <Hackthon />
      <Confrence />

      <div>
        <p className="text-2xl font-bold text-gray-800 my-10">
          And you, what are you doing in January and February?
        </p>
      </div>
    </div>
  );
};

export default Blog;
