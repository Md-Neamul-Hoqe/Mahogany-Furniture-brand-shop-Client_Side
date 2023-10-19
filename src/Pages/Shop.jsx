import { Link, useLoaderData } from "react-router-dom";
import Product from "../components/Product";
import { Helmet } from "react-helmet-async";

const Shop = () => {
  const products = useLoaderData();

  console.log(products);
  return (
    <section>
      {/* Banner Section */}
      <section>
        <div
          className="hero min-h-fit top-16 px-14"
          style={{
            backgroundImage: 'url("https://i.ibb.co/Q9hThXf/banner-shop.png")',
            backgroundOrigin: "center",
            backgroundSize: "100vw",
          }}>
          <div className="hero-content w-full flex-col lg:flex-row min-h-[312px]">
            {/* right side */}
            <aside className="card">
              <div className="card-body">
                <h2 className="text-title">Shop</h2>
                <div className="text-sm breadcrumbs">
                  <ul>
                    <li>
                      <a className="text-title font-medium">Home</a>
                    </li>
                    <li className="font-light">Shop</li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Product Section */}
      {products.length ? (
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10 max-w-5xl mx-auto">
          {products.map((product, idx) => (
            <Product key={idx} product={product} />
          ))}
        </section>
      ) : (
        <div className="min-h-[calc(100vw/3)] flex flex-col items-center justify-center gap-5">
          <h1>Sorry! No Such Products Found.</h1>
          <p>
            Are you want to order to make the product? Contact:{" "}
            <Link to={`tel:+8801700000000`} className="text-primary">
              01700-000-000
            </Link>
          </p>
          <Link to={"/"} className="btn capitalize text-primary border-primary">Go to home</Link>
        </div>
      )}

      {/* Title */}
      <Helmet>
        <title>{"Mahogany | Shop"}</title>
      </Helmet>
    </section>
  );
};

export default Shop;
