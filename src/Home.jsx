import { Helmet } from "react-helmet-async";
import Header from "./components/Header";
import Products from "./components/Products";
import Stat from "./components/Stat";
import Brand from "./components/brand";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const products = useLoaderData();

  return (
    <>
      <Header />
      <Brand />
      <Products products={products} />
      <Stat />
      <Helmet>
        <title>{"Mahogany | Decorate your house as you choose."}</title>
      </Helmet>
    </>
  );
};

export default Home;
