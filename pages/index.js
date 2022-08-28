import React from "react";
import {FooterBanner,Product,HeroBanner} from './../components'
export default function index() {
  return (
    <>
      <HeroBanner/>
      <div  className="products-heading">
      <h2>Best Selling products</h2>
      <p>Speaker of many varitions</p>
</div>
      <div  className="products-container">
        {["product 1", "product 2"].map((product) =>  product
        )}
      </div>
      <FooterBanner/>
    </>
  );
}
