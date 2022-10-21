import React, { useContext, useState } from "react";
import "../styles/Header.scss";

import { Menu } from "@components/Menu";
import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_frogshop.svg";
import ShoppingCart from "@icons/icon_shopping_cart.svg";
import { AppContext } from "../context/AppContext";
import { MyOrder } from "../containers/MyOrder";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  const {
    state: { cart },
  } = useContext(AppContext);

  const handleToggleMenues = (toggleOption) => {
    switch (toggleOption) {
      case "menu":
        setToggle(!toggle);
        setToggleOrders(false);
        setToggleMobileMenu(false);
        break;
      case "cart":
        setToggleOrders(!toggleOrders);
        setToggle(false);
        setToggleMobileMenu(false);
        break;
      case "mobileMenu":
        setToggleMobileMenu(!toggleMobileMenu);
        setToggle(false);
        setToggleOrders(false);
        break;
    }
  };
  return (
    <nav>
      <img
        src={menu}
        alt="menu"
        className="menu"
        onClick={() => handleToggleMenues("mobileMenu")}
      />
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
          <li
            className="navbar-email"
            onClick={() => handleToggleMenues("menu")}
          >
            user@example.com
          </li>
          <li
            className="navbar-shopping-cart"
            onClick={() => handleToggleMenues("cart")}
          >
            <img src={ShoppingCart} alt="shopping cart" />
            {cart.length > 0 && <div>{cart.length}</div>}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
      {toggleMobileMenu && (
        <MobileMenu setToggleMobileMenu={setToggleMobileMenu} />
      )}
    </nav>
  );
};
