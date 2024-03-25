import React from "react";

function ListCard(props) {
  return (
    <li>
      <img src={props.image} alt="Profile" />
      <div className="card">
        <h3 className="text-name">{props.name}</h3>
        <span className="text-age">{props.age}</span>
      </div>
    </li>
  );
}

export default ListCard;
