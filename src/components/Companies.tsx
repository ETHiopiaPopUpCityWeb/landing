const sponsers = [
  "/ethereum.png",
  "/Lisk.svg",
  "/pic20.svg",
  "/pic24.png",
  "pic22.png",
  "/pic251.png",
];
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
          <span className="text-orange-600 font-medium text-base md:text-lg uppercase tracking-wide">
            Our Sponsors
          </span>
        </div>

        {/* Sponsors */}
        <div className="grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-6  gap-6 pb-4">
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

        <div className="my-12 text-center">
          <span className="text-orange-600 font-medium uppercase tracking-wide text-base md:text-lg">
            Our Partners
          </span>
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
