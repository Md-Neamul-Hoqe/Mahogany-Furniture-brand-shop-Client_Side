const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();

    const Form = e.target;

    const name = Form.name.value;
    const chef = Form.chef.value;
    const supplier = Form.supplier.value;
    const taste = Form.taste.value;
    const category = Form.category.value;
    const details = Form.details.value;
    const photo = Form.photo.value;

    const coffeeInfo = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    console.log(coffeeInfo);

    fetch("/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(coffeeInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) alert("A new tea added.");
      });
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
                    <h4 className="label-text">Tags</h4>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Product Tags"
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
    </div>
  );
};

export default AddProduct;
