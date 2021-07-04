import "./MainCard.scss";

function ShellCard() {


  return (
    <div className="mainCard">
      <div className="placeHolder">
        <strong>Select offer for comparison</strong>
      </div>
      <p className="mainCardTitle"></p>
      <div className="mainCardInfo">
        <h5>Price</h5>
        <p>Kč</p>
      </div>
      <div className="mainCardInfo">
        <h5>Location</h5>
        <p></p>
      </div>
      <div className="mainCardInfo">
        <h5>Floor area</h5>
        <p>m2</p>
      </div>
      <div className="mainCardInfo">
        <h5>Land area</h5>
        <p>m2</p>
      </div>
    </div>
  );
}

export default ShellCard;
