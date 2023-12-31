import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Brand = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("https://mahogany-furniture-server.vercel.app/brands")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  return (
    <section className="static min-h-screen mt-[calc(100vh)] w-full">
      <div className="flex flex-col justify-center items-center gap-3">
        <h4>Browse The Range</h4>
        <p className="text-xl text-body text-center">
          We have huge collections to decorate your rooms
        </p>
      </div>
      {!brands.length || typeof brands === "string" ? (
        <div className="min-h-screen flex justify-center items-center">
          <span className="loading loading-infinity w-40 text-primary"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 max-w-5xl mx-auto">
          {brands?.map((product) => (
            <Link
              key={product._id}
              to={`/shop/${product.brand}`}
              className="card p-0 min-w-min w-full md:w-96 mx-auto">
              <figure className="px-10 pt-10">
                <img
                  src={product?.photo}
                  alt={product.brand}
                  className="rounded-xl h-80 w-full"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{product.brand}</h2>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

Brand.propTypes = {
  products: PropTypes.array,
};

export default Brand;
