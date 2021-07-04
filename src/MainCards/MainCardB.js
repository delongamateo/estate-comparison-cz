import { useEffect, useState } from "react";
import "./MainCard.scss";

function MainCardB(props) {
  const { images, name, prize_czk, locality, building_area, land_area } = props.estateB;

  console.log(props.estateB.images);
  

  return (
    <div className="mainCard">
      <img src={images} alt={name} className="mainImg"/> 
      <p className="mainCardTitle">{name}</p>
      <div className="mainCardInfo">
        <h5>Price</h5>
        <p>{prize_czk}Kč</p>
      </div>
      <div className="mainCardInfo">
        <h5>Location</h5>
        <p>{locality}</p>
      </div>
      <div className="mainCardInfo">
        <h5>Floor area</h5>
        <p>{building_area}m2</p>
      </div>
      <div className="mainCardInfo">
        <h5>Land area</h5>
        <p>{land_area}m2</p>
      </div>
    </div>
  );
}

export default MainCardB;
