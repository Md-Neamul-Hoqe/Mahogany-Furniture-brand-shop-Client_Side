import Cart from "../components/Cart";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();

  const {
    title,
    subtitle,
    price,
    ratings,
    description,
    type,
    quantity,
    tags,
    brand,
  } = product;

  //
  //
  // https://i.ibb.co/VTBqTTx/blog.png

  // 
  // https://i.ibb.co/z5KD6Z1/furniture.png
  // https://i.ibb.co/L0VhH8G/furniture-1.png
  // https://i.ibb.co/2jRVqjx/Image-living-room.png
  //
  //
  //
  // https://i.ibb.co/n85Lc3k/bedroom.png
  // https://i.ibb.co/ZxRH3yj/lolioto.png
  // https://i.ibb.co/my2JrY2/syltherine.png
  // https://i.ibb.co/XSbgmTK/Outdoor-sofa-set-1.png
  // https://i.ibb.co/vqCn804/Outdoor-sofa-set-2.png
  // https://i.ibb.co/JF9hSd7/recent-Post.png
  // https://i.ibb.co/gWw47V4/recent-Post-1.png
  //
  //

  return (
    <div className="relative">
      <Cart />
      <section className="text-sm breadcrumbs w-full text-body py-10 px-40 bg-primary-light mb-10">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Shop</a>
          </li>
          <li className="text-title">
            <span className="text-body text-3xl mx-2">|</span> {title}
          </li>
        </ul>
      </section>
      <section className="flex items-start gap-10">
        <div className="flex flex-1 gap-5">
          <div className="flex flex-col gap-5">
            {description?.images.map((image, idx) => {
              <img key={idx} src={image} alt={title} />;
            })}
          </div>
          <div>
            <img src={description?.photo} alt={title} />
          </div>
        </div>
        <div className="flex flex-1 flex-col items-start justify-start gap-5">
          <h3>{title}</h3>
          <p className="text-2xl text-sub-title">TK. {price?.new}</p>
          <div>
            <div className="rating rating-md" defaultChecked={ratings}>
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>{" "}
            | <span>5 Customers Review</span>
          </div>
          <p>
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>
          <div>
            <p>Size</p>
            <div>
              <button
                className={`btn bg-primary-light"
                }`}>
                L
              </button>
              <button
                className={`btn bg-primary"
                }`}>
                XL
              </button>
              <button
                className={`btn bg-primary-light"
                }`}>
                XS
              </button>
            </div>
          </div>

          <div className="">
            <input
              type="number"
              placeholder="Qty"
              min={0}
              max={quantity}
              className="input input-bordered input-lg max-w-[100px] text-xl"
            />
            <input
              type="button"
              value="Add to cart"
              className="input input-bordered input-lg text-xl mx-10"
            />
            <input
              type="button"
              value="+ Compare"
              className="input input-bordered input-lg text-xl"
            />
          </div>

          <hr className="w-full my-5" />

          <table>
            <tbody>
              <tr>
                <td>SKU</td>
                <td>:</td>
                <td> SS0001</td>
              </tr>
              <tr>
                <td>Type</td>
                <td>:</td>
                <td> {type}</td>
              </tr>
              <tr>
                <td>Brand</td>
                <td>:</td>
                <td> {brand}</td>
              </tr>
              <tr>
                <td>Tags</td>
                <td>:</td>
                <td> {tags.join(", ")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="border-t-2 w-full flex flex-col items-center gap-5 pt-10 mt-10">
        <h2 className="text-title">Description</h2>
        <div className="flex flex-wrap justify-around gap-6">
          {description?.images.map((image, idx) => (
            <img key={idx} src={image} alt={subtitle} />
          ))}
        </div>
        <p className="text-body mb-5">
          {description?.text} Setting the bar as one of the loudest speakers in
          its class, the Kilburn is a compact, stout-hearted hero with a
          well-balanced audio which boasts a clear midrange and extended highs
          for a sound.
        </p>
      </section>
      <Helmet>
        <title>{`Mahogany | Details - ${title}`}</title>
      </Helmet>
    </div>
  );
};

export default ProductDetails;
