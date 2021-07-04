
import "./MainCard.scss";

function MainCardB(props) {
  const { images, name, prize_czk, locality, building_area, land_area } = props.estateB;

  props.setPrizeB(prize_czk);
  props.setFloorAreaB(building_area);
  props.setLandAreaB(land_area);

  return (
    <div className="mainCard">
      <img src={images[0]} alt={name} className="mainImg" />
      <p className="mainCardTitle">{name}</p>
      <div
        className="mainCardInfo"
        style={{ backgroundColor: props.backgroundColorPrizeB }}
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
        style={{ backgroundColor: props.backgroundColorFloorB }}
      >
        <h5>Floor area</h5>
        <p>{building_area}m2</p>
      </div>
      <div
        className="mainCardInfo"
        style={{ backgroundColor: props.backgroundColorLandB }}
      >
        <h5>Land area</h5>
        <p>{land_area}m2</p>
      </div>
    </div>
  );
}

export default MainCardB;
