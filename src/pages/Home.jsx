import Advertisement from "../components/Advertisement";
import Banner from "../components/Banner";
import Brands from "../components/Brands";
import Reviews from "../components/Reviews";
// import BrandList from "../components/Brandlist";
import Services from "../components/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Brands></Brands>
      <Advertisement></Advertisement>
      <Services></Services>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
