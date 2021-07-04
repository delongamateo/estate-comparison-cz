
import "./MainCard.scss";

function MainCardA(props) {
  const { images, name, prize_czk, locality, building_area, land_area } = props.estateA;

  props.setPrizeA(prize_czk);
  props.setFloorAreaA(building_area);
  props.setLandAreaA(land_area);


  return (
    <div className="mainCard">
      <img src={images[0]} alt={name} className="mainImg" />
      <p className="mainCardTitle">{name}</p>
      <div
        className="mainCardInfo"
        style={{ backgroundColor: props.backgroundColorPrizeA }}
      >
        <h5>Price</h5>
        <p>{prize_czk}Kč</p>
      </div>
      <div className="mainCardInfo">
        <h5>Location</h5>
        <p>{locality}</p>
      </div>
      <div
        className="mainCardInfo"
        style={{ backgroundColor: props.backgroundColorFloorA }}
      >
        <h5>Floor area</h5>
        <p>{building_area}m2</p>
      </div>
      <div
        className="mainCardInfo"
        style={{ backgroundColor: props.backgroundColorLandA }}
      >
        <h5>Land area</h5>
        <p>{land_area}m2</p>
      </div>
    </div>
  );
}

export default MainCardA;
