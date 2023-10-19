import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const UpdateProduct = () => {
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

    const coffeeInfo = {
      title,
      subtitle,
      brand,
      type,
      tags,
      details,
      photo,
    };

    console.log(coffeeInfo);

    fetch("http://127.0.0.1:5000/products", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(coffeeInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
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
      <div className="hero-content">
        <div className="card w-full max-w-4xl bg-transparent">
          <form onSubmit={handleUpdateProduct} className="card-body bg-gray">
            <div className="text-center">
              <h3>Update The Product: </h3>
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
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <h4 className="label-text">Photo</h4>
                </label>
                <input
                  type="url"
                  placeholder="Enter Photo URL"
                  name="photo"
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
      <Helmet>
        <title>Mahogany | Update {name | Product._id}</title>
      </Helmet>
    </div>
  );
};

export default UpdateProduct;
