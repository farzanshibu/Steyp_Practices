import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import location from "../assets/images/place.svg";
import styles from "./card.module.css";

function Card() {
  const [places, setPlaces] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://traveller.talrop.works/api/v1/places/")
      .then(function (response) {
        setPlaces(response.data.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <h1 className="loading">Loading ...</h1>;
  if (places.length === 0) return <h1 className="loading">NO Data.</h1>;

  return (
    <div className={styles.items}>
      {places.map((place) => (
        <div key={place.id} className={styles.item}>
          <Link to={`/place/${place.id}`}>
            <div className={styles.top}>
              <img src={place.image} alt={place.name} />
            </div>
            <div className={styles.middle}>
              <h3>{place.name}</h3>
            </div>
            <div className={styles.bottom}>
              <img src={location} alt="location icon" />
              <span>{place.location}</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
export default Card;
