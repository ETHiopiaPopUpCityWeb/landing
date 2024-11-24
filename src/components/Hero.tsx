import HeroCard from "./HeroCard";

const Hero = () => {
  return (
    <div className="pt-20 max-h-fit bg-green-30 max-sm:w-full flex justify-center">
      <div className="max-w-[83rem] max-sm:w-full">
        <div className="flex justify-center max-sm:px-2">
          <div className="py-8 flex gap-5 max-sm:flex-col max-sm:p-[30px] justify-center items-center">
            <div className="w-1/2 max-sm:w-[100%]">
              <h1 className="text-[52px] max-sm:text-2xl font-semibold  leading-none">
               Lorem ipsum, dolor sit amet consectetur.
              </h1>
            </div>
            <div className="w-1/2 max-sm:w-full flex items-center justify-center h-full">
              <h4 className="max-sm:w-full w-[400px] text-sm m-auto">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos nihil est, soluta accusantium repudiandae repellendus.
              </h4>
            </div>
          </div>
        </div>

        <div className="flex gap-9 pl-0 max-sm:p-0 max-sm:flex-col my-3">
          <div className="flex flex-col justify-center max-sm:flex-row gap-3">
            <HeroCard number={23} title="Lorem" />
            <HeroCard number={2000} title="Lorem" />
            <HeroCard number={21000} title="Lorem" />
          </div>
          <div className="flex-1 relative h-[250px]  max-sm:h-[auto]">
            <div className="h-[120px] w-[120px] max-sm:w-[100px] max-sm:h-[100px] rounded-full absolute right-[5%] max-sm:top-[-25%] top-[-25%] bg-yellow-300">
              
            </div>
            <img
              src="https://placehold.co/600x400"
              alt="Event"
              className="w-full h-full object-cover rounded-l-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;