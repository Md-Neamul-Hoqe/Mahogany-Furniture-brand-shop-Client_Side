import { BsBagX } from "react-icons/bs";
import { RiCloseCircleFill } from "react-icons/ri";

const Cart = () => {
  return (
    <div className="absolute -top-20 right-0 max-w-md w-[500px] flex flex-col bg-white px-5 border shadow-lg z-50 opacity-0">
      <div className="flex justify-between items-center">
        <h2 className="border-b-2 py-10">Shopping Cart</h2>{" "}
        <span>
          <BsBagX className="text-2xl" />
        </span>
      </div>
      <table className="mt-10 w-full">
        <tbody>
          <tr className="align-middle">
            <td>
              <img src="" alt="product icon" />
            </td>
            <td>
              <h5>title</h5>
              <br />
              <h5>
                <span>1</span> x <span className="text-primary">TK price</span>
              </h5>
            </td>
            <td>
              <button>
                <RiCloseCircleFill className="text-2xl text-body" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <div className="w-full flex justify-between border-b-2 border-sub-heading py-5">
          <h5>Subtotal</h5>
          <h5 className="text-primary">TK total</h5>
        </div>
        <div className="flex justify-between py-10">
          <button className="btn rounded-2xl btn-outline">Cart</button>
          <button className="btn rounded-2xl btn-outline">Checkout</button>
          <button className="btn rounded-2xl btn-outline">Comparison</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
