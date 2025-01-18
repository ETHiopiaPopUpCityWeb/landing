import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="my-14">
      <div className="flex justify-center px-2">
        <div className="p-4 lg:p-8 py-8  lg:py-14 bg-sky-950 max-w-[83rem] rounded-3xl max-sm:w-full flex flex-col items-start gap-6 shadow-lg">
          {/* Vision Tagline */}
          <div>
            <p className="px-4 py-1 border border-yellow-400 rounded-full text-sm text-yellow-400 font-semibold tracking-wide">
              The Vision
            </p>
          </div>

          {/* Main Heading */}
          <div className="w-full">
            <h1 className="text-3xl w-full md:w-[500px] font-bold text-white">
              Ideate, Hack, and Build - Uniting Africa's Web3 Changemakers
            </h1>
          </div>

          {/* Service Cards Grid */}
          <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
            <ServiceCard
              title="01"
              description="Unite 50 of Africa's top builders and Web3 community leaders from across the continent—yes, the first reunion of West, North, East, and Southern Africa—right in the heart of Africa’s Union hub, Addis Ababa."
            />
            <ServiceCard
              title="02"
              isDark
              description="Host Ethiopia’s first Ethereum-focused event, blending a world-class hackathon with a cutting-edge, government-tech-focused conference."
            />
            <ServiceCard
              title="03"
              description="Welcome Ethiopia’s local tech community into the Ethereum ecosystem, opening doors for them to engage with its values, contribute, and innovate."
            />
            <ServiceCard
              title="04"
              description="Invite the global Web3 community to discover Ethiopia, an alternate universe where innovation meets tradition. Did you know it's 2017 in Ethiopia right now? Immerse yourself in a one-of-a-kind destination."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
