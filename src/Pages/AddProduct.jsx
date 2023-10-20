import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();

    const Form = e.target;

    const title = Form.title.value;
    const subtitle = Form.subtitle.value;
    const brand = Form.brand.value;
    const type = Form.type.value;
    const tags = Form.tags.value;
    const details = Form.details.value;
    const price = Form.price.value;
    const ratings = Form.ratings.value;
    const photo = Form.photo.value;
    const images = Form.images.value;

    const furnitureInfo = {
      title,
      subtitle,
      brand,
      type,
      tags: tags.split(","),
      price: { new: price },
      ratings,
      description: { text: details, images: images.split(","), photo: photo },
      status: "New",
    };

    fetch("https://mahogany-furniture-server.vercel.app/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(furnitureInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "A new product added successfully.",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        }
      })
      .catch(console.error);
  };

  return (
    <div className="hero min-h-screen bg-transparent">
      <div className="hero-content">
        <div className="card w-full max-w-4xl bg-transparent">
          <form onSubmit={handleAddProduct} className="card-body">
            <div className="text-center">
              <h3>Add New Product</h3>
            </div>
            <div className="flex flex-col gap-6 mt-10">
              <div className="flex max-lg:flex-col gap-6">
                <div className="form-control flex-1">
                  <label className="label">
                    <h4 className="label-text">Title</h4>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Title"
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
                    placeholder="Enter Sub Title"
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
                    placeholder="Enter Brand"
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
                    placeholder="Enter Type"
                    name="type"
                    className="input input-bordered"
                    required
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
                    required
                  />
                </div>
              </div>
              <div className="flex max-lg:flex-col gap-6">
                <div className="form-control flex-1">
                  <label className="label">
                    <h4 className="label-text">Tags</h4>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Tags ( ' , ' separated)"
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
                    placeholder="Enter Details"
                    name="details"
                    className="textarea textarea-bordered"
                    required
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
      <Helmet>
        <title>{"Mahogany | Add Product"}</title>
      </Helmet>
    </div>
  );
};

export default AddProduct;
