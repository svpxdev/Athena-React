import React from "react";
import "./Home.css";
import Product from "./Product";
import bookList from "../Books";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import { useBasketState } from "../StateProvider";
import Reducer from "../Reducer";

function Home() {
  return (
    <>
      <section id="heroSection">
        <div className="home__heroSection">
          <h1> Welcome to Athena </h1>
        </div>
      </section>

      <div className="home__products">
        {bookList.map((product, i) => {
          return (
            <Product
              key={product.id.toString()}
              id={product.id}
              title={product.title}
              price={product.price}
              rating={product.rating}
              image={product.image}
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;
