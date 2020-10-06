import React from "react";
import "./Home.css";
import Product from "./Product";
import bookList from "../Books";

function Home() {
  return (
    <>
      <section id="heroSection">
        <div className="home__heroSection">
          <h1>Welcome to the bookstore </h1>
        </div>
      </section>

      <div className="home__products">
        {bookList.map((product) => {
          return (
            <Product
              key={product.id}
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
