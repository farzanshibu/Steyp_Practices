import React from "react";
import logo from "../assets/images/logo.svg";
import styles from "./header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <h1>
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
        </h1>
      </div>
      <div className={styles.right}>
        <a href="#" className={styles.button}>
          Login
        </a>
      </div>
    </div>
  );
}

export default Header;
