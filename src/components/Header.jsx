import React, { useContext, useState } from "react";
import "../styles/Header.scss";

import { Menu } from "@components/Menu";
import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import ShoppingCart from "@icons/icon_shopping_cart.svg";
import { AppContext } from "../context/AppContext";
import { MyOrder } from "../containers/MyOrder";

export const Header = () => {
  const [Toggle, setToggle] = useState(false);
  const [ToggleOrders, setToggleOrders] = useState(false);

  const {
    state: { cart },
  } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!Toggle);
  };
  return (
    <nav>
      <img src={menu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            platzi@example.com
          </li>
          <li
            className="navbar-shopping-cart"
            onClick={() => setToggleOrders(!ToggleOrders)}
          >
            <img src={ShoppingCart} alt="shopping cart" />
            {cart.length > 0 && <div>{cart.length}</div>}
          </li>
        </ul>
      </div>
      {Toggle && <Menu />}
      {ToggleOrders && <MyOrder />}
    </nav>
  );
};
