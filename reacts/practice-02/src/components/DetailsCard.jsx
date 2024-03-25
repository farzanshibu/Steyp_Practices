import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import location from "../assets/images/place.svg";
import styles from "./detailscard.module.css";

function DetailsCard() {
  const [place, setPlace] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://traveller.talrop.works/api/v1/places/view/${id}`)
      .then(function (response) {
        setPlace(response.data.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <h1 className="loading">Loading ...</h1>;
  if (place.length === 0) return <h1 className="no-data">No Data ...</h1>;

  return (
    <div className={styles.containerDetails}>
      <h1>{place.name}</h1>
      <div className={styles.categories}>
        <span>{place.category_name}</span>
        <img src={location} alt="location icon" />
        <small>{place.location}</small>
      </div>
      <div className={styles.gallery}>
        <img src={place.image} className={styles.feature} alt="Featured Gallery" />
        {place.gallery.map((image) => (
          <img key={image.id} src={image.image} alt="Gallery" />
        ))}
      </div>
      <h3>Place Details</h3>
      <p>{place.description}</p>
    </div>
  );
}

export default DetailsCard;
