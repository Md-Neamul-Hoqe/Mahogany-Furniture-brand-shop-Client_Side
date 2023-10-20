import { Helmet } from "react-helmet-async";
import Header from "./components/Header";
import Products from "./components/Products";
import Stat from "./components/Stat";
import Brand from "./components/brand";
import { useLoaderData } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "./Providers/AuthProviders";
import { getStoredCart } from "./js/localStorage";

const Home = () => {
  const products = useLoaderData();
  const { setCart } = useContext(AuthContext);

  useEffect(() => {
    if (products?.length) {
      /* Load Cart from LS after products load in site */

      const storedCartId = getStoredCart();
      const uniqueIds = new Set(...[storedCartId]);

      const savedCart = [];
      for (const id of uniqueIds) {
        /* Get The Bottle id From Bottles */
        const product = products?.find((product) => product._id === id);

        if (product) {
          const Qty = storedCartId.filter(
            (idInCart) => idInCart === id
          )?.length;

          product.quantity = Qty;

          savedCart.push(product);

          /* Save cart to state */
          setCart(savedCart);

          // console.log("savedCart", savedCart);
        }
      }
    }
  }, [products, setCart]);

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
