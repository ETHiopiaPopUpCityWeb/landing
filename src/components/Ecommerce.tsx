const Ecommerce = () => {
  return (
    <div>
      <section className="py-20">
        <div className="mx-auto max-w-[83rem] px-4 sm:px-0 lg:px-0">
          <div className="xl:p-16 gap-32 p-12 rounded-3xl bg-neutral-800 flex justify-between flex-col lg:flex-row">
            {/* Image Section */}
            <div className="w-full lg:w-2/6 relative">
              <img
                src="/qr.png"
                alt="CTA section"
                className="rounded-lg"
              />
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-2/3">
              <p className="px-2 py-1 border w-40 md:text-center rounded-full text-sm font-medium text-white mb-4">
                Stay Connected
              </p>
              <h2 className="font-manrope text-white text-3xl md:text-5xl  max-w-2xl text-megastorePrimary font-semibold mb-7 lg:text-left">
                Build Stronger Connections with Us
              </h2>
              <p className="text-lg text-white leading-8 mb-12 lg:text-left">
                Stay in the loop and never miss an update! Whether it’s
                exclusive deals, latest products, or special events, we’re here
                to keep you informed and engaged. Follow us on social media or
                subscribe to our newsletter to stay connected.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ecommerce;
