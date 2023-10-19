import { Helmet } from "react-helmet-async";
import Header from "./components/Header";
import Products from "./components/Products";
import Stat from "./components/Stat";
import Brand from "./components/brand";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const products = useLoaderData();
  const [theUniqueBrandedProducts, setTheUniqueBrandedProducts] = useState([]);

  useEffect(() => {
    const uniqueBrandedProducts = [];
    const uniqueBrands = [];

    /* Find unique branded products */
    products.forEach((product) => {
      const theBrand = product.brand;

      /* get the product which brand is not in theBrand */
      if (!uniqueBrands.includes(theBrand)) {
        /* update brands */
        uniqueBrands.push(theBrand);

        /* update products */
        uniqueBrandedProducts.push(product);
      }
    });

    setTheUniqueBrandedProducts(uniqueBrandedProducts);
  }, [products]);

  return (
    <>
      <Header />
      <Brand products={theUniqueBrandedProducts} />
      <Products products={products} />
      <Stat />
      <Helmet>
        <title>{'Mahogany | Decorate your house as you choose.'}</title>
      </Helmet>
    </>
  );
};

export default Home;
