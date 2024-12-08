import HeroCard from "./HeroCard";

const Hero = () => {
  return (
    <div className="pt-20 max-h-fit bg-green-30 max-sm:w-full flex justify-center">
      <div className="max-w-[83rem] max-sm:w-full">
        <div className="flex justify-center max-sm:px-2">
          <div className="py-8 flex gap-5 max-sm:flex-col max-sm:p-[30px] justify-center items-center">
            <div className="w-1/2 max-sm:w-[100%]">
              <h1 className="text-4xl md:text-7xl font-bold leading-none text-gray-800">
                Welcome to the{" "}
                <span className="bg-gradient-to-r from-lime-800 via-yellow-700 to-red-800 bg-clip-text text-transparent font-extrabold">
                  ETHiopia
                </span>{" "}
                Pop Up
              </h1>
            </div>
            <div className="w-1/2 max-sm:w-full flex items-center justify-center h-full">
              <h4 className="max-sm:w-full w-[400px] text-lg m-auto text-gray-800">
                A groundbreaking web3-focused hub where innovation, community,
                and blockchain converge. Discover the future of decentralized
                living!
              </h4>
            </div>
          </div>
        </div>

        <div className="flex gap-9 pl-0 max-sm:p-0 max-sm:flex-col my-3">
          <div className="flex flex-col justify-center max-sm:flex-row gap-3">
            <HeroCard number={10} title="Workshops" />
            <HeroCard number={100} title="Participants" />
            <HeroCard number={50} title="Builders" />
          </div>
          <div className="flex-1 relative h-[250px] max-sm:h-[auto]">
            <div className="h-[150px] w-[150px] max-sm:w-[100px] max-sm:h-[100px] rounded-full absolute right-[5%] max-sm:top-[-25%] top-[-25%] bg-lime-300">
              <img
                src="logo.jpg"
                alt="ETHiopia Cityscape"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <img
              src="/city2.jpg"
              alt="ETHiopia Cityscape"
              className="w-full h-full object-cover rounded-l-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
