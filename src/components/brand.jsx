import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Brand = ({ products }) => {
  return (
    <section className="static min-h-screen mt-[calc(100vh)] w-full">
      <div className="flex flex-col justify-center items-center gap-3">
        <h4>Browse The Range</h4>
        <p className="text-xl text-body">
          We have huge collections to decorate your rooms
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 max-w-5xl mx-auto">
        {products?.map((product) => (
          <Link
            key={product._id}
            to={`/productDetails/${product._id}`}
            className="card p-0 min-w-min w-96">
            <figure className="px-10 pt-10">
              <img
                src="./src/assets/images/Dining-1.png"
                alt={product.brand}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{product.brand}</h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

Brand.propTypes = {
  products: PropTypes.array,
};

export default Brand;
