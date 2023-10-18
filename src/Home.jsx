import Header from "./components/Header";
import Products from "./components/Products";
import Stat from "./components/Stat";
import Brand from "./components/brand";

const Home = () => {
  return (
    <>
      <Header />
      {/* const uniqueValues = [...new Set(Object.values(obj))]; */}
      <Brand />
      <Products />
      <Stat />
    </>
  );
};

export default Home;
