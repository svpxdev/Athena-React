import React from "react";
import "./Product.css";
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";

function Product(props) {
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
        <a href="/checkout">
          <AddCircleOutlineRoundedIcon className="product__buttonOptions" />
        </a>
        <a href="/checkout">
          <ShoppingCartRoundedIcon className="product__buttonOptions" />
        </a>
      </div>
    </div>
  );
}

export default Product;
