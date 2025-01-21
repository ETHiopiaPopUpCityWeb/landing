const companies = ["/2.png", "/5.jpg", "/Lisk.svg", "/pic1.jpg", "/pic2.jpg"];

const CompanyLogos = () => {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="text-orange-600 text-center font-medium mb-4 block">
            OUR PARTNERS
          </span>
          <h1 className="text-4xl text-sky-900 text-center font-bold">
            We work with the best partners
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3  xl:grid-cols-6">
          {companies.map((company) => (
            <div key={company} className="">
              <img className="w-32 h-20" src={company} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
