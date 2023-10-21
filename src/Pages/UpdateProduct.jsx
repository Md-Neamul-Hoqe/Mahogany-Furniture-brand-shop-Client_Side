import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const product = useLoaderData();

  // console.log(product);

  const handleUpdateProduct = (e) => {
    e.preventDefault();

    const Form = e.target;

    const title = Form.title.value;
    const subtitle = Form.subtitle.value;
    const brand = Form.brand.value;
    const type = Form.type.value;
    const tags = Form.tags.value;
    const details = Form.details.value;
    const photo = Form.photo.value;

    const price = Form.price.value;
    const ratings = Form.ratings.value;
    const images = Form.images.value;

    const furnitureInfo = {
      id: product._id,
      title,
      subtitle,
      brand,
      type,
      tags: tags.split(","),
      price: {
        old:
          product?.price?.new === price
            ? product?.price?.old
            : product?.price?.new,
        new: price,
      },
      ratings,
      description: { text: details, images: images.split(","), photo: photo },
      status: "New",
    };

    // console.log(furnitureInfo);

    fetch(`https://mahogany-furniture-server.vercel.app/products`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(furnitureInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "The product updated successfully.",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        }
      });
  };

  return (
    <div className="hero min-h-screen bg-transparent">
      {typeof product === "string" ? (
        <div className="min-h-screen flex justify-center items-center">
          <span className="loading loading-infinity w-40 text-primary"></span>
        </div>
      ) : (
        <div className="hero-content">
          <div className="card w-full max-w-4xl bg-transparent">
            <form onSubmit={handleUpdateProduct} className="card-body bg-gray">
              <div className="text-center my-5">
                <h4>Update The Product: {product.title} </h4>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex max-lg:flex-col gap-6">
                  <div className="form-control flex-1">
                    <label className="label">
                      <h4 className="label-text">Title</h4>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Product Title"
                      name="title"
                      className="input input-bordered"
                      required
                      defaultValue={product.title}
                    />
                  </div>
                  <div className="form-control flex-1">
                    <label className="label">
                      <h4 className="label-text">Sub Title</h4>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Product Sub Title"
                      name="subtitle"
                      className="input input-bordered"
                      defaultValue={product.subtitle}
                      required
                    />
                  </div>
                </div>
                <div className="flex max-lg:flex-col gap-6">
                  <div className="form-control flex-1">
                    <label className="label">
                      <h4 className="label-text">Brand</h4>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Product Brand"
                      name="brand"
                      className="input input-bordered"
                      required
                      defaultValue={product.brand}
                    />
                  </div>

                  <div className="form-control flex-1">
                    <label className="label">
                      <h4 className="label-text">Type</h4>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Product Type"
                      name="type"
                      className="input input-bordered"
                      required
                      defaultValue={product.type}
                    />
                  </div>
                </div>

                <div className="flex max-lg:flex-col gap-6">
                  <div className="form-control flex-1">
                    <label className="label">
                      <h4 className="label-text">Price</h4>
                    </label>
                    <input
                      type="number"
                      min={0}
                      placeholder="Enter Price (in number)"
                      name="price"
                      className="input input-bordered"
                      defaultValue={product?.price?.new}
                      required
                    />
                  </div>

                  <div className="form-control flex-1">
                    <label className="label">
                      <h4 className="label-text">Ratings</h4>
                    </label>
                    <input
                      type="number"
                      min={0}
                      max={5}
                      placeholder="Enter Ratings 0 to 5"
                      name="ratings"
                      className="input input-bordered"
                      defaultValue={product?.ratings}
                      required
                    />
                  </div>
                </div>
                <div className="flex max-lg:flex-col gap-6">
                  <div className="form-control flex-1">
                    <label className="label">
                      <h4 className="label-text">tags</h4>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Product tags"
                      name="tags"
                      className="input input-bordered"
                      required
                      defaultValue={product.tags}
                    />
                  </div>

                  <div className="form-control flex-1">
                    <label className="label">
                      <h4 className="label-text">Details</h4>
                    </label>
                    <textarea
                      type="text"
                      placeholder="Enter Product Details"
                      name="details"
                      className="textarea textarea-bordered"
                      required
                      defaultValue={product?.description?.text}
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <h4 className="label-text">Photo for poster</h4>
                  </label>
                  <input
                    type="url"
                    placeholder="Enter Photo URL"
                    name="photo"
                    className="input input-bordered"
                    defaultValue={product?.description?.photo}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <h4 className="label-text">Photos for details</h4>
                  </label>
                  <input
                    type="url"
                    placeholder="Enter Photo URLs (' , ' separated)"
                    defaultValue={JSON.parse(
                      JSON.stringify(product?.description?.images)
                    )}
                    name="images"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <button
                    type="submit"
                    className="btn rounded-[5px] border-primary text-primary bg-white capitalize font-rancho text-2xl">
                    Add Product
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
      <Helmet>
        <title>{`Mahogany | Update ${product.title}`}</title>
      </Helmet>
    </div>
  );
};

UpdateProduct.propTypes = {
  product: PropTypes.object,
};

export default UpdateProduct;
