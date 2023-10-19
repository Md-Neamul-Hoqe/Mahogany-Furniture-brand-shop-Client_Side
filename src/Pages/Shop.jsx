import { useLoaderData } from "react-router-dom";
import Product from "../components/Product";
import { Helmet } from "react-helmet-async";

const Shop = () => {
  const products = useLoaderData();
  return (
    <section>
      <section>
        <div
          className="hero min-h-fit top-16 px-14"
          style={{
            backgroundImage: 'url("./src/assets/images/banner-shop.png")',
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

      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10 max-w-5xl mx-auto">
        {products.map((product, idx) => (
          <Product key={idx} product={product} />
        ))}
      </section>
      <Helmet>
        <title>Mahogany | Shop</title>
      </Helmet>
    </section>
  );
};

export default Shop;
