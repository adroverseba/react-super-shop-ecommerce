import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import "../styles/ProductItem.scss";

import addToCartImage from "@icons/bt_add_to_cart.svg";

export const ProductItem = ({ product: { price, images, title } }) => {
  const { addToCart, state } = useContext(AppContext);

  const handleClick = (product) => {
    addToCart(product);
    console.log(state);
  };

  return (
    <div className="ProductItem">
      <img src={images[0]} />
      <div className="product-info">
        <div>
          <p>${price}</p>
          <p>{title}</p>
        </div>
        <figure onClick={() => handleClick({ price, images, title })}>
          <img src={addToCartImage} alt="" />
        </figure>
      </div>
    </div>
  );
};
