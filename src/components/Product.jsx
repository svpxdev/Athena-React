import React from "react";
import "./Product.css";
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";

function Product() {
  return (
    <div className="product__card">
      <div className="product__info">
        <p>Name of the book</p>
        <p>$ 25.65</p>
        <p>⭐⭐⭐ </p>
      </div>
      <img
        className="product__image"
        src="https://images-na.ssl-images-amazon.com/images/I/61Iz2yy2CKL.jpg"
        alt="book-cover"
      />
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
