import { Helmet } from "react-helmet-async";

const CartDetails = () => {
  return (
    <div className="flex max-xl:flex-col">
      <table>
        <thead className="bg-primary-light">
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>SubTotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="" alt="product icon" />
            </td>
            <td>price</td>
            <td>quantity</td>
            <td>price * quantity</td>
            <td className="text-primary">delete</td>
          </tr>
        </tbody>
      </table>
      <div className="bg-primary-light">
        <h2>
            Cart Totals
        </h2>
        <h5>Subtotal <span className="text-body">price</span></h5>
        <h5>Total <span className="text-primary">price</span></h5>
        <button className="btn">Check Out</button>
      </div>
      <Helmet>
        <title>{'Mahogany | Shopping Cart'}</title>
      </Helmet>
    </div>
  );
};

export default CartDetails;
