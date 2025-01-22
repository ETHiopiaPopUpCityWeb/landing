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
    <section className="py-16 ">
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
        <div className="w-full flex flex-wrap justify-center items-end gap-6 pb-4">
          {sponsers.map((company) => (
            <div
              key={company}
              className="flex items-center justify-center p-4   rounded-lg"
            >
              <img
                className="max-h-16 w-52 object-contain"
                src={company}
                alt="Sponsor logo"
              />
            </div>
          ))}
        </div>

        {/* Partners */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-9 items-center justify-center w-full mx-auto">
          {partners.map((company) => (
            <div
              key={company}
              className="flex items-center justify-center p-3   rounded-lg"
            >
              <img
                className="max-h-14 object-contain"
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
