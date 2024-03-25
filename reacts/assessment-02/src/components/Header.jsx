/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./header.module.css";
import logo from "../assets/images/moke..png";
import twitter from "../assets/images/twitter.png";
import instragram from "../assets/images/instagram.png";

function Header() {
  return (
    <header>
      <div className={styles.left}>
        <h1>
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </h1>
      </div>
      <div className={styles.right}>
        <ul>
          <li>
            <a href="#">Get Signal</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Developers</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Donate</a>
          </li>
          <li>
            <a href="#">
              <img src={twitter} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={instragram} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
