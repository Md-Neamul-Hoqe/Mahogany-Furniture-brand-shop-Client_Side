import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { MdFavoriteBorder, MdShare } from "react-icons/md";
import { TbArrowsLeftRight } from "react-icons/tb";
import { Helmet } from "react-helmet-async";

const Product = ({ product }) => {
  console.log(product._id);
  const { theme } = useContext(AuthContext);
  return (
    <div className="hero min-h-min">
      <div className="hero-overlay hidden bg-opacity-70 z-50 h-full flex-col items-center justify-center">
        <button className="btn px-5 rounded-none capitalize text-primary font-semibold leading-loose">
          Add to cart
        </button>
        <div className="flex justify-center gap-2 text-white py-10">
          <Link className="flex items-center gap-1 font-semibold leading-loose">
            <MdShare />
            Share
          </Link>
          <Link className="flex items-center gap-1 font-semibold leading-loose">
            <TbArrowsLeftRight />
            Compare
          </Link>
          <Link className="flex items-center gap-1 font-semibold leading-loose">
            <MdFavoriteBorder />
            Like
          </Link>
        </div>
        <div>
          <Link
            to={`/productDetails/${product._id}`}
            product={product}
            className="btn px-5 rounded-none capitalize text-primary font-semibold leading-loose">
            Details
          </Link>
          <Link
            to={`/updateProduct/${product._id}`}
            product={product}
            className="btn px-5 rounded-none capitalize text-primary font-semibold leading-loose">
            Update
          </Link>
        </div>
      </div>

      <div className="card card-compact p-0 min-w-min bg-gray-100 rounded-none">
        <figure>
          <img
            src={product?.description?.photo}
            alt={product?.subtitle}
            className="rounded-none"
          />
        </figure>
        <div className="card-body text-start">
          <h5 className={`${theme ? "text-white" : "text-dark"}`}>
            {product.title}
          </h5>
          <small className="text-sub-title">{product?.subtitle}</small>
          <p className="flex justify-between items-end gap-2">
            <span className="text-xl">Tk {product?.price?.new}</span>
            <span className="text-body line-through">
              Tk {product?.price?.old}
            </span>
          </p>
        </div>
      </div>
      <Helmet>
        <title>{`Mahogany | ${product.title}`}</title>
      </Helmet>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
