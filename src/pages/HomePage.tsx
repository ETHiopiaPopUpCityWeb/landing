import About from "../components/About";
import Ecommerce from "../components/Ecommerce";
import Events from "../components/event/Events";
import Hero from "../components/Hero";
// import MainEvent from "../components/MainEvent";
import Media from "../components/Media";
import Services from "../components/Services";


const HomePage = () => {


  return (
    <div className="w-full">
      {/* <MainEvent /> */}
      <Hero />
      <Services />
      <About />
      <Media />
      <Events />
      <Ecommerce />
      {/* <Gallery /> */}
    </div>
  );
};

export default HomePage;
