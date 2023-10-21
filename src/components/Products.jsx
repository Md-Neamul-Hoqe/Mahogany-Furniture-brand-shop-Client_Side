import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Product from "./Product";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const Products = () => {
  const { products} = useContext(AuthContext);

  return (
    <section>
      <h4>Our Products</h4>
      {!products?.length || typeof products === "string" ? (
        <div className="min-h-screen flex justify-center items-center">
          <span className="loading loading-infinity w-40 text-primary"></span>
          {!products?.length && (
            <>
              <br />
              <details>
                <summary>For developers:</summary>
                {products}
              </details>
            </>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-10 max-w-5xl mx-auto">
          {products.slice(0, 8).map((product, idx) => (
            <Product
              key={idx}
              product={typeof product === "object" ? product : {}}
            />
          ))}
        </div>
      )}
      <div className="justify-center flex">
        <Link
          to="/shop"
          className="btn px-10 capitalize text-primary border-primary rounded-none">
          Show More
        </Link>
      </div>
    </section>
  );
};

Products.propTypes = {
  products: PropTypes.array,
};

export default Products;
