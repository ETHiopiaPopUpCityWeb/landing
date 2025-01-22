const sponsers = ["/ethereum.png", "/Lisk.svg"];
const partners = [
  "/2.png",
  "/5.jpg",
  "/pic1.jpg",
  "/pic2.jpg",
  "/MGS.jpg",
  "/nounsdao.png",
  "/safaridao.png",
  "/Women Tech Makers.jpg",
  "/Xerxis.JPG",
];

const CompanyLogos = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="text-orange-600 font-medium uppercase tracking-wide">
            Our Partners
          </span>
          <h1 className="mt-2 text-4xl font-bold text-sky-900">
            We work with the best partners
          </h1>
        </div>

        {/* Sponsors */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6 items-center justify-center mb-12 w-full mx-auto">
          {sponsers.map((company) => (
            <div
              key={company}
              className="flex items-center justify-center p-4 bg-white  rounded-lg"
            >
              <img
                className="max-h-20 object-contain"
                src={company}
                alt="Sponsor logo"
              />
            </div>
          ))}
        </div>

        {/* Partners */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-9 items-center justify-center w-full mx-auto">
          {partners.map((company) => (
            <div
              key={company}
              className="flex items-center justify-center p-3 bg-white  rounded-lg"
            >
              <img
                className="max-h-12 object-contain"
                src={company}
                alt="Partner logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
