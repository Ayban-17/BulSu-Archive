import Hero from "../../components/landing_page/home/hero/Hero";
import Holdings from "../../components/landing_page/home/holdings/Holdings";
import Features from "../../components/landing_page/home/features/Features";
import MostViewed from "../../components/landing_page/home/MostViewed/MostViewed";
import Footer from "../../components/landing_page/home/footer/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Holdings />
      <Features />
      <MostViewed />
      <Footer />
    </div>
  );
};

export default Home;
