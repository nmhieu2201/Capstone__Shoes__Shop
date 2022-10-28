import React from "react";

export default function Cart() {
  return (
    <div className="cart-shoes">
      <h4 className="cart-title container">
        Cart
        <hr />
      </h4>
      <div className="cart-form">
        <div className="container">
          <table className="table">
            <thead style={{ background: "#d9d9d9", padding: "5px 10px" }}>
              <tr
                style={{
                  color: "#000000",
                  fontSize: 20,
                  fontWeight: "400",
                  lineHeight: "24px",
                  textAlign:'center'
                }}
              >
                <td>
                  <input type="checkbox" className="check-box" />
                </td>
                <td>ID</td>
                <td>Image</td>
                <td>Name</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Total</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              <tr
                style={{
                  padding: "20px 0",
                  color: "#000000",
                  fontSize: 20,
                  fontWeight: "400",
                  lineHeight: "24px",
                  textAlign:'center'
                }}
              >
                <td>
                  <input type="checkbox" className="check-box" />
                </td>
                <td>1</td>
                <td>
                  <img
                    src="https://picsum.photos/200/300"
                    style={{ width: "100%", height: 40 }}
                    alt="..."
                  />
                </td>
                <td>Product 1</td>
                <td>1000$</td>
                <td>+ 1 -</td>
                <td>1000$</td>
                <td>
                  <button className="btn-edit">Edit</button>
                  <button className="btn-del mx-2">Delete</button>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <button className="order">Submit Order</button>
              </td>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
