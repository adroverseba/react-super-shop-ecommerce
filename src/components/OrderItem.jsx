import React from "react";
import "../styles/OrderItem.scss";

import closeIcon from "@icons/icon_close.png";

export const OrderItem = ({
  product: { image, name, price },
  remove,
  indexValue,
}) => {
  return (
    <div className="OrderItem">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <p>{name}</p>
      <p>${price}</p>
      <img src={closeIcon} alt="close" onClick={() => remove(indexValue)} />
    </div>
  );
};
