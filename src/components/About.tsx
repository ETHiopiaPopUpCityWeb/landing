import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="py-10 relative">
      <div className="w-full max-w-[83rem] px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
          <div className="relative flex items-end">
            <img
              className="lg:mx-0 mx-auto rounded-3xl object-cover h-80 lg:h-96"
              src="https://placehold.co/450x400"
              alt="about Us image"
            />

            <div className="absolute left-1/2 top-1/2 transform translate-x-[20%] -translate-y-[50%] border-4 border-white bg-neutral-800 p-6 md:p-10 text-white rounded-3xl object-cover z-20">
              <h3 className="text-5xl font-bold">
                5<span className="text-lime-400 font-normal">+</span>
              </h3>
              <p className="font-extralight text-sm text-lime-400">
                Lorem, ipsum.
              </p>
            </div>
          </div>

          <div className="flex-col h-full justify-center items-start  gap-5 inline-flex">
            <div className="flex-col justify-end items-start gap-4 flex">
              <p className="px-4 py-1 border rounded-full text-xs font-medium">
                ABOUT US
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Lorem, ipsum dolor.{" "}
                <span className="text-lime-500">Placeat</span>
              </h2>

              <p className="text-gray-600 font-light leading-relaxed text-base lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio placeat expedita aliquid et nulla eos numquam, maxime
                exercitationem beatae magnam!
              </p>
            </div>
            <Link to="/#" className="flex gap-1 items-center  font-medium">
              Learn more <GoArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
