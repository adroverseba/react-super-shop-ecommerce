import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import "../styles/ProductItem.scss";

import addToCartImage from "@icons/bt_add_to_cart.svg";

export const ProductItem = ({ product }) => {
  const { addToCart, state } = useContext(AppContext);

  const handleClick = (product) => {
    addToCart(product);
    console.log(state);
  };

  return (
    <div className="ProductItem">
      <img src={product.image} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.name}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={addToCartImage} alt="" />
        </figure>
      </div>
    </div>
  );
};
