import React from "react";
import "./Checkout.css";
import CheckoutItems from "./CheckoutItems";
import bookList from "../Books";
import { useBasketState } from "../StateProvider";

function Orders() {
  const [{ basket }] = useBasketState();

  return (
    <>
      <div className="checkout__main">
        <div className="checkout__items">
          <div className="checkout__header">
            <h1>Your Item List</h1> <hr />
          </div>
          <div className="checkout__itemElements">
            {basket?.length === 0 ? (
              <h3>Your Basket is Empty</h3>
            ) : (
              basket?.map((product, i) => {
                return (
                  <CheckoutItems
                    key={i}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    rating={product.rating}
                    image={product.image}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Orders;
