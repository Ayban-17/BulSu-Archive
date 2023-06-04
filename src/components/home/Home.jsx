import Header from "./header/Header";
import Hero from "./hero/Hero";
import Holdings from "./holdings/Holdings";
import Features from "./features/Features";
import MostViewed from "./MostViewed/MostViewed";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Holdings />
      <Features />
      <MostViewed />
    </div>
  );
};

export default Home;
