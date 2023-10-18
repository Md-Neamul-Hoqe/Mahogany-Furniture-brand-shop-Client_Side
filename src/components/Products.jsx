import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./demo.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section>
      <h4>Our Products</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10 max-w-5xl mx-auto">
        {products.slice(0, 8).map((product, idx) => (
          <Product key={idx} product={product} />
        ))}
      </div>
      <div className="justify-center flex">
        <Link
          to="/shop"
          className="btn px-10 capitalize text-primary border-primary rounded-none">
          Show More
        </Link>
      </div>
    </section>
  );
};

export default Products;
