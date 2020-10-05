import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <>
      <section id="heroSection">
        <div className="home__heroSection">
          <h1>Welcome to the bookstore </h1>
        </div>
      </section>
      <Product />
    </>
  );
}

export default Home;
