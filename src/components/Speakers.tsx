// import { FaLinkedin } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";

const speakersData = [
  {
    name: "Samuel Arogbonlo",
    role: "Senior Blockchain Infrastructure Engineer",
    image: "/sp1.png",
    description:
      "Talks: Beyond Validators: Non-Traditional Infrastructure Roles In Ethereum",
  },
  {
    name: "Isaac Newton Acquah",
    role: "National Project Coordinator, International Trade Centre, Tech Sector Ghana FTW DOA Founding Member, The Innovation Spark Founder",
    image: "/sp2.png",
    description:
      "A Government Built on Trust: How Blockchain Can Redefine Governance in Africa",
  },
  {
    name: "Hugo Mathecowsk",
    role: "Founder at Tool for the Commons, a55",
    image: "/sp3.png",
    description:
      "From geopolitics of nation states to technopolitics of network states - how humanity is transitioning from maps printers and guns to software, crypto and smart contracts to govern its civilization.",
  },
  {
    name: "@PauChan23",
    role: "Developer Relations @Wormhole",
    image: "/sp4.png",
    description: "Builder Residency Speaker",
  },

  {
    name: "Clement Petrona ",
    // role: "Developer Relations @Wormhole",
    image: "/cle.jpg",

    description:
      "Singularity net, ETHICAL AI DEVELOPMENT & THE SINGULARITY NET AI MARKETPLACE",
  },

  {
    name: "Santiago",
    image: "/san.jpg",
    // role: "Developer Relations @Wormhole",
    description: "About Lisk ecosystem",
  },

  {
    name: "Daniel Aseffa ",
    // role: "Developer Relations @Wormhole",
    image: "/dan.png",
    description: "Economic Laws and policies regarding blockchain, Crypto, AI",
  },

  {
    name: "Simon",
    // role: "Blockchain Enthusiast",
    description: "Setting the tone in tech for human ideologies",
  },
  {
    name: "Abena ",
    // role: "Developer Relations @Wormhole",
    description: "ETH-Acra",
  },
  {
    name: "Samuel Arogbonolo",
    // role: "Developer Relations @Wormhole",
    description:
      "Beyond Validators, Non-Traditional Infrastructure Roles In Ethereum",
  },

  {
    name: "Ayo",
    // role: "Developer Relations @Wormhole",
    description: "Web3 Bridge",
  },

  {
    name: "Bekka",
    // role: "Developer Relations @Wormhole",
    description: "Polkadot",
  },

  {
    name: "Una Wang ",
    // role: "Developer Relations @Wormhole",
    description:
      "Solar punk, Lunar punk, Zuitzerland, Towards post-capitalism solarpunk city & place-making - Self-owned houses onchain, Solar Punk/Lunar Punk + Zuitzerland",
  },
];

const Speakers = () => {
  return (
    <div className="max-w-[85rem] px-6 pb-16 mx-auto text-center">
      <div className="max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold md:text-5xl text-sky-900">
          Our Speakers
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Inspiring Speakers at the ETHiopia Conference
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {speakersData.map((speaker, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center bg-white shadow-sm rounded-2xl p-6 border border-gray-200/80 hover:shadow-md transition-all"
          >
            <img
              className="rounded-full w-24 h-24 border-4 border-orange-400"
              src={speaker?.image || "/user.jpg"}
              alt={speaker.name}
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              {speaker.name}
            </h3>
            <p className="text-xs text-sky-900 font-medium">{speaker?.role}</p>
            <p className="mt-3 text-gray-500 text-sm">{speaker.description}</p>
            {/* <div className="mt-4 flex space-x-4">
              <a
                className="text-gray-500 hover:text-sky-500 transition"
                href="#"
              >
                <FaXTwitter className="size-4" />
              </a>

              <a
                className="text-gray-500 hover:text-sky-500 transition"
                href="#"
              >
                <FaLinkedin className="size-4" />
              </a>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
