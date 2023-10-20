import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Providers/AuthProviders";

const CartDetails = () => {
  const { cart, handleRemoveFromCart } = useContext(AuthContext);
  console.log(cart);
  const total = cart?.map((product) => product?.price?.new * product?.quantity);
  return (
    <>
      <section>
        <div
          className="hero min-h-fit top-16 px-14"
          style={{
            backgroundImage: 'url("https://i.ibb.co/Q9hThXf/banner-shop.png")',
            backgroundOrigin: "center",
            backgroundSize: "100vw",
          }}>
          <div className="hero-content w-full flex-col lg:flex-row min-h-[312px]">
            <aside className="card">
              <div className="card-body">
                <img src="/logo.svg" alt="Logo" className="w-14 mx-auto" />
                <h2 className="text-title">Cart</h2>
                <div className="text-sm breadcrumbs">
                  <ul>
                    <li>
                      <a className="text-title font-medium">Home</a>
                    </li>
                    <li className="font-light">Cart</li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-3 gap-5 p-20">
        <table className="w-full col-span-2">
          <thead className="bg-primary-light h-14">
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Qty</th>
              <th>SubTotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="max-xl:flex-col min-h-[calc(100vh/3)]">
            {cart?.length ? (
              cart?.map((product, idx) => (
                <tr key={product._id}>
                  <td className="py-5">
                    <img
                      className="w-20"
                      src={product?.description?.photo}
                      alt={product?.title}
                    />
                  </td>
                  <td>TK. {product?.price?.new}</td>
                  <td>{product?.quantity}</td>
                  <td>TK. {total[idx]}</td>
                  <td
                    onClick={() => handleRemoveFromCart(product._id)}
                    className="text-primary">
                    delete
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="border min-h-[calc(100vh/3)] text-center">
                  <h3>Your Cart Is Empty.</h3>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="bg-primary-light px-5 text-center py-20">
          <h5 className="whitespace-nowrap">Cart Totals</h5>
          {/* <h5>
            Subtotal <span className="text-body">price</span>
          </h5> */}
          <h5 className="flex justify-between px-10 my-10">
            Total{" "}
            <span className="text-primary">
              TK. {total.reduce((total, current) => total + current, 0)}
            </span>
          </h5>
          <button className="btn btn-outline capitalize btn-lg btn-wide">
            Check Out
          </button>
        </div>
      </section>
      <Helmet>
        <title>{"Mahogany | Shopping Cart"}</title>
      </Helmet>
    </>
  );
};

export default CartDetails;
