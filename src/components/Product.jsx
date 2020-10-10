import React from "react";
import "./Product.css";
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import { useBasketState } from "../StateProvider";
import Reducer from "../Reducer";

function Product(props) {
  const [{ basket }, dispatch] = useBasketState();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating
      }
    });
  };

  return (
    <div className="product__card">
      <div className="product__info">
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
      </div>
      <img className="product__image" src={props.image} alt="book-cover" />
      <div className="product__button">
        {/* <a href="/checkout">
          <AddCircleOutlineRoundedIcon className="product__buttonOptions" />
        </a> */}
        <a onClick={addToBasket}>
          <AddCircleOutlineRoundedIcon className="product__buttonOptions" />
        </a>
      </div>
    </div>
  );
}

export default Product;
