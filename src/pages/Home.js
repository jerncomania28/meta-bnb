//components
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import Ribbon from "../components/Ribbon";
import Inspiration from "../components/Inspiration";

const Home = () => {
  return (
    <div className="w-full relative">
      <Navigation />
      <HeroSection />
      <Ribbon />
      <Inspiration />
      <Footer />
    </div>
  );
};

export default Home;
