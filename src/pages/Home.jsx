import Banner from "../components/Banner";
import Brands from "../components/Brands";
// import BrandList from "../components/Brandlist";
import Services from "../components/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* <BrandList></BrandList> */}
      <Brands></Brands>
      <Services></Services>
    </div>
  );
};

export default Home;
