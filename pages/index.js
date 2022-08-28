import React from "react";
import product from "../sanity_buy-now/schemas/product";

export default function index() {
  return (
    <>
      HeroBanner
      <h2>Best Selling products</h2>
      <p>Speaker of many varitions</p>
      <div>
        {["product 1", "product 2"].map((product) =>  product
        )}
      </div>
      Footer
    </>
  );
}
