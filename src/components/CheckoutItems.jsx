import React from "react";
import "./CheckoutItems.css";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import DeleteIcon from "@material-ui/icons/Delete";
import { useBasketState } from "../StateProvider";
import Reducer from "../Reducer";

function CheckoutItems(props) {
  const [{ basket }, dispatch] = useBasketState();

  function removeItemfromBasket() {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: {
        id: props.id
      }
    });
  }

  return (
    <div className="checkout__card">
      <div className="checkout__info">
        <p className="product__title">{props.title}</p>
        <p className="product__price">
          $ <strong>{props.price}</strong>
        </p>
        <p>
          {Array(props.rating)
            .fill()
            .map((_) => (
              <span role="img" aria-label="Star">
                ⭐
              </span>
            ))}
        </p>
        <div className="checkout__button">
          <a onClick={removeItemfromBasket}>
            <DeleteIcon className="checkout__buttonOptions" />
          </a>
        </div>
      </div>
      <div className="checkout__imageBox">
        <img className="checkout__image" src={props.image} alt="book-cover" />
      </div>
    </div>
  );
}

export default CheckoutItems;
