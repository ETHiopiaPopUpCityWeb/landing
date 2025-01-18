import CompanySection from "./Companies";
import HeroCard from "./HeroCard";
import { motion } from "framer-motion";

const Hero = () => {
  const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
    },
  };

  const imageAnimation = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="pt-20 max-h-fit bg-green-30 max-sm:w-full flex justify-center max-sm:px-2">
      <motion.div
        className="max-w-[83rem] max-sm:w-full"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { duration: 1, staggerChildren: 0.2 },
          },
        }}
      >
        {/* Hero Text */}
        <motion.div className="flex justify-center" variants={textAnimation}>
          <div className="py-8 flex gap-5 max-sm:flex-col max-sm:p-[30px] justify-center items-center">
            <div className="w-1/2 max-sm:w-[100%]">
              <h1 className="text-4xl md:text-7xl font-bold leading-none text-sky-900">
                Welcome to the{" "}
                <span className="bg-gradient-to-tl from-pink-500 to-yellow-500 bg-clip-text text-transparent font-extrabold">
                  ETHiopia
                </span>{" "}
                Pop Up
              </h1>
              <CompanySection />
            </div>
            <div className="w-1/2 max-sm:w-full flex items-center justify-center h-full">
              <h4 className="max-sm:w-full max-w-lg text-base lg:text-lg m-auto text-gray-800">
                This month-long experiment is a gathering for Africa’s Web3
                builders and changemakers and every value aligned individual who
                wants to have a voice in the future of the Global Majority.
                Together, we will ideate, hack, and build the foundation of a
                continuous Ethereum movement in Ethiopia. Join us between
                January 21st - February 21st.
              </h4>
            </div>
          </div>
        </motion.div>

        {/* Hero Cards */}
        <motion.div
          className="flex gap-9 max-sm:flex-col my-3"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { duration: 0.8, staggerChildren: 0.3 },
            },
          }}
        >
          <div className="flex flex-col justify-center max-sm:flex-row gap-3 divide-y">
            <motion.div variants={cardAnimation}>
              <HeroCard number={"31 Day"} title=" Education" />
            </motion.div>
            <motion.div variants={cardAnimation}>
              <HeroCard number={"5 Day"} title="Hackathon " />
            </motion.div>
            <motion.div variants={cardAnimation}>
              <HeroCard number={"1st"} title="ETH Conference" />
            </motion.div>
          </div>

          {/* City Image */}
          <motion.div
            className="flex-1 relative h-[300px] max-sm:h-[auto]  mt-10"
            variants={imageAnimation}
          >
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
            <img
              src="/pic1.jpg"
              alt="ETHiopia Cityscape"
              className="w-full h-full object-cover rounded-l-3xl"
            />
            <img
              src="/pic2.jpg"
              alt="ETHiopia Cityscape"
              className="w-full h-full object-cover rounded-l-3xl"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
