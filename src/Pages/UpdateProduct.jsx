const UpdateProduct = () => {
  const handleUpdateProduct = (e) => {
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
                    name="name"
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
                    name="chef"
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
                    name="supplier"
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
                    name="taste"
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
    </div>
  );
};

export default UpdateProduct;
