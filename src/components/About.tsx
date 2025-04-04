const About = () => {
  return (
    <section className="py-10 relative">
      <div className="w-full max-w-[83rem] px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
          <div className="relative flex items-end">
            <img
              className="lg:mx-0 mx-auto rounded-3xl object-cover h-80 lg:w-[38rem] lg:h-[25rem]"
              src="/au3.jpg"
              alt="about Us image"
            />
          </div>

          <div className="flex-col h-full justify-center items-start  gap-5 inline-flex">
            <div className="flex-col justify-end items-start gap-4 flex">
              <h2 className="text-4xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Why{" "}
                <span className="bg-gradient-to-tl from-pink-500 to-yellow-500  bg-clip-text text-transparent font-extrabold">
                  Ethiopia
                </span>{" "}
              </h2>

              <p className="text-gray-700 font-normal leading-relaxed text-base lg:text-xl">
                The Ethiopian government has launched "
                <a
                  href="https://www.fanabc.com/english/pm-abiy-launches-construction-of-addis-tomorrow-special-economic-zone/"
                  className="border-b text-indigo-500"
                >
                  Addis Tomorrow,
                </a>
                " a smart city initiative, alongside special economic zones
                (SEZs) in the capital. These SEZs will feature sub- zones for
                international trade, education, finance, business, and housing.
                Additionally, major tech-focused projects, including the luxury
                Mohamadia Village by billionaire Sheikh Mohamed Hussein Al
                Amoudi, offer significant opportunities to{" "}
                <a href="/" className="border-b text-indigo-500">
                  integrate Web3 solutions.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
