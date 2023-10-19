import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { MdFavoriteBorder, MdShare } from "react-icons/md";
import { TbArrowsLeftRight } from "react-icons/tb";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Product = ({ product }) => {
  const { theme } = useContext(AuthContext);

  const handleDeleteProduct = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://mahogany-furniture-server-7ud2cl8nd.vercel.app/products/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "The product has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="hero min-h-min">
      {/* Hover / Overlay */}
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
        <div>
          <button
            type="button"
            onClick={() => handleDeleteProduct(product._id)}
            className="btn px-5 rounded-none capitalize text-primary font-semibold leading-loose">
            Delete
          </button>
        </div>
      </div>

      {/* Product */}
      <div className="card card-compact justify-start p-0 min-w-min h-full bg-gray-100 rounded-none">
        <figure>
          <img
            src={product?.description?.photo}
            alt={product?.subtitle}
            className="rounded-none h-72 w-full"
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
