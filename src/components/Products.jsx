import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Product from "./Product";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const Products = ({ products }) => {
  const { deletedId } = useContext(AuthContext);

  const [updatedProducts, setUpdatedProducts] = useState(
    typeof products === "object" ? products : []
  );

  useEffect(() => {
    typeof products !== "string" &&
      setUpdatedProducts(
        products.filter((product) => product._id !== deletedId)
      );
  }, [deletedId, products]);

  return (
    <section>
      <h4>Our Products</h4>
      {!updatedProducts?.length || typeof updatedProducts === "string" ? (
        <div className="min-h-screen flex justify-center items-center">
          <span className="loading loading-infinity w-40 text-primary"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-10 max-w-5xl mx-auto">
          {updatedProducts.slice(0, 8).map((product, idx) => (
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
