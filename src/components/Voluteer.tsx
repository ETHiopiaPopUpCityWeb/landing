import { Link } from "react-router-dom";

const Volunteer = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-[83rem] px-4 sm:px-0 lg:px-0">
        <div className="lg:py-14 lg:px-20 p-10 rounded-2xl bg-gradient-to-r from-orange-100 via-orange-100 to-orange-100 flex items-center justify-between flex-col lg:flex-row">
          <div className="block text-center mb-5 lg:text-left lg:mb-0">
            <h2 className="font-manrope text-4xl text-orange-700 font-semibold mb-5 lg:mb-2">
              Become a Volunteer
            </h2>
            <p className="text-xl text-blue-900">
              Join us in making a difference. Volunteer with us today!
            </p>
          </div>
          <Link
            to={"https://tally.so/r/w8jBYo"}
            className="flex items-center gap-2 bg-gradient-to-tr from-pink-500 to-yellow-500 rounded-full shadow-sm text-lg text-indigo-100 font-semibold py-4 px-8 transition-all duration-500"
          >
            Volunteer Now
            <svg
              width="19"
              height="14"
              viewBox="0 0 19 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
                stroke="#fff"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
