import React from "react";
import "./Checkout.css";
import CheckoutItems from "./CheckoutItems";
import bookList from "../Books";

function Checkout() {
  return (
    <>
      <div className="checkout__main">
        <div className="checkout__summary">
          <div className="checkout__summaryBox">
            <p className="checkout__summaryHeaders">Shipping Address</p>
            <p className="checkout__summaryBody">
              Mr Mustermann, <br /> Waldenstrasse 56,
            </p>
          </div>
          <div className="checkout__summaryBox"> Payments</div>
          <div className="checkout__summaryBox checkout__boxBorder"> Price</div>
        </div>
        <div className="checkout__items">
          <div className="checkout__header">
            <h1>Item List</h1> <hr />
          </div>
          <div className="checkout__itemElements">
            {bookList.map((product) => {
              return (
                <CheckoutItems
                  key={product.id}
                  title={product.title}
                  price={product.price}
                  rating={product.rating}
                  image={product.image}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
