import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Product = ({ product }) => {
  return (
    <Link to={`/productDetails/`} className="card p-0 min-w-min">
      <figure className="p-0">
        <img
          src="./src/assets/images/Dining-1.png"
          alt="Dining"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body text-start">
        <h5>{product.title}</h5>
        <small className="text-sub-title">{product.subtitle}</small>
        <p className="flex justify-between items-end gap-2">
          <span className="text-xl">Tk {product.price.new}</span>
          <span className="text-body line-through">Tk {product.price.old}</span>
        </p>
      </div>
    </Link>
  );
};

Product.propTypes = {
  product: PropTypes.node,
};

export default Product;
