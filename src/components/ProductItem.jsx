import React, { useState } from "react";
import "../styles/ProductItem.scss";

import addToCart from "@icons/bt_add_to_cart.svg";

export const ProductItem = ({ product: { price, images, title } }) => {
  const [Cart, setCart] = useState("");

  const handleClick = () => {
    setCart("Hola Mundo");
  };

  return (
    <div className="ProductItem">
      <img src={images[0]} />
      <div className="product-info">
        <div>
          <p>${price}</p>
          <p>{title}</p>
        </div>
        <figure onClick={handleClick}>
          <img src={addToCart} alt="" />
        </figure>
        {Cart}
      </div>
    </div>
  );
};
