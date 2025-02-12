import About from "../components/About";
import CompanyLogos from "../components/Companies";
import Ecommerce from "../components/Ecommerce";
import Events from "../components/event/Events";
import Hero from "../components/Hero";
// import MainEvent from "../components/MainEvent";
import Media from "../components/Media";
import Services from "../components/Services";
import Speakers from "../components/Speakers";
import Voluteer from "../components/Voluteer";

const HomePage = () => {
  return (
    <div className="w-full">
      {/* <MainEvent /> */}
      <Hero />
      <CompanyLogos />
      <Services />
      <Speakers />
      <About />
      <Media />
      <Events />
      <Ecommerce />
      <Voluteer />
      {/* <Gallery /> */}
    </div>
  );
};

export default HomePage;
