import React from "react";
import Link from "next/link";
const HeroBanner=({heroBanner})=> {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">SMALL TEXT</p>
        <h3>MID TEXT</h3>
        <h1>largeText1</h1>
        <img src="" alt="headphones" className="hero-banner-image" />

        <div>
          <Link href={`/product/id`}>
            <button type="button">Button</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, possimus.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner;
r