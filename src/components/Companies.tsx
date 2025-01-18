const companies = ["/2.png", "/5.jpg", "/pic1.jpg", "/pic2.jpg"];

const CompanySection = () => {
  return (
    <section className="py-4">
      <div className="max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  items-start">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex justify-center items-end py-2 bg-white rounded-lg transition-shadow"
            >
              <img
                src={company}
                alt={"Company Image"}
                className="h-14 md፡h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
