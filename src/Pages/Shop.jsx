import { Link, useLoaderData } from "react-router-dom";
import Product from "../components/Product";
import { Helmet } from "react-helmet-async";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const Shop = () => {
  const loadedProducts = useLoaderData();
  const { deletedId } = useContext(AuthContext);
  const [products, setProducts] = useState(loadedProducts);

  console.log(typeof loadedProducts, products[0]._id, deletedId);

  useEffect(() => {
    const loadData = () => {
      typeof loadedProducts === "object" &&
        setProducts(
          loadedProducts.filter((product) => product._id !== deletedId)
        );
    };

    return () => loadData();
  }, [deletedId, loadedProducts]);

  return (
    <section>
      {/* Banner Section */}
      <section>
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <img src="./src/assets/shop slider -1.png" className="w-full" />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img src="./src/assets/shop slider -2.png" className="w-full" />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img src="./src/assets/shop slider -3.png" className="w-full" />
          </div>
        </div>

        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
        </div>
      </section>

      {/* Product Section */}
      {!products?.length || typeof products === "string" ? (
        typeof products === "string" ? (
          <div className="min-h-screen flex justify-center items-center">
            <span className="loading loading-infinity w-40 text-primary"></span>
          </div>
        ) : (
          <div className="min-h-[calc(100vw/3)] flex flex-col items-center justify-center gap-5">
            <h1>Sorry! No Such Products Found.</h1>
            <p>
              Are you want to order to make the product? Contact:{" "}
              <Link to={`tel:+8801700000000`} className="text-primary">
                01700-000-000
              </Link>
            </p>
            <Link
              to={"/"}
              className="btn capitalize text-primary border-primary">
              Go to home
            </Link>
          </div>
        )
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10 max-w-5xl mx-auto">
          {products.map((product, idx) => (
            <Product key={idx} product={product} />
          ))}
        </section>
      )}

      {/* Title */}
      <Helmet>
        <title>{"Mahogany | Shop"}</title>
      </Helmet>
    </section>
  );
};

export default Shop;
