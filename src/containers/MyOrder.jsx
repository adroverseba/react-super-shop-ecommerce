import React, { useContext } from "react";
import { OrderItem } from "../components/OrderItem";
import "../styles/MyOrder.scss";
import { AppContext } from "../context/AppContext";

import arrowIcon from "@icons/flechita.svg";

export const MyOrder = ({ setToggleOrders }) => {
  const {
    state: { cart },
    removeFromCart,
  } = useContext(AppContext);

  let i = 0;

  const sumTotal = cart.reduce((acc, { price }) => acc + price, 0);

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img
          src={arrowIcon}
          alt="arrow"
          onClick={() => setToggleOrders(false)}
        />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {cart.map((prod, index) => (
          <OrderItem
            product={prod}
            remove={removeFromCart}
            key={++i}
            indexValue={index}
          />
        ))}
      </div>
      <div className="order">
        <p>
          <span>Total</span>
        </p>
        <p>${sumTotal}</p>
      </div>
      <button className="primary-button">Checkout</button>
    </aside>
  );
};
