import React from "react";
import Card from "./Card";
import styles from "./listcards.module.css";

function ListCards() {
  return (
    <div className={styles.container}>
      <h1>Welcome</h1>
      <p>Explore the world around you</p>
      <Card  />
    </div>
  );
}

export default ListCards;
