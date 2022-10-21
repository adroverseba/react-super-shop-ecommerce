import React from "react";
import "@styles/MobileMenu.scss";
import close from "@icons/icon_close.png";

export const MobileMenu = ({ setToggleMobileMenu }) => {
  return (
    <div className="MobileMenu">
      <img src={close} alt="close" onClick={() => setToggleMobileMenu(false)} />
      <ul>
        <li>
          <a href="/">CATEGORIES</a>
        </li>
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
      <hr />
      <ul>
        <li>
          <a href="/">My Orders</a>
        </li>
        <li>
          <a href="/">My Account</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/" className="email">
            myemail@example.com
          </a>
        </li>
        <li>
          <a href="/" className="sign-out">
            Sign Out
          </a>
        </li>
      </ul>
    </div>
  );
};
