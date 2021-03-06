import React from "react";
import "./Checkout.css";
import CheckoutItems from "./CheckoutItems";
import bookList from "../Books";
import CurrencyFormat from "react-currency-format";
import { getBasketValue } from "../Reducer";
import { useBasketState } from "../StateProvider";
import CheckoutSummary from "./CheckoutSummary";

function Checkout() {
  const [{ basket }] = useBasketState();
  const amount = getBasketValue(basket);
  const vat_amount = amount * 0.19;

  return (
    <>
      <div className="checkout__main">
        <CheckoutSummary />
        <div className="checkout__items">
          <div className="checkout__header">
            <h1>Item List</h1> <hr />
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

export default Checkout;
