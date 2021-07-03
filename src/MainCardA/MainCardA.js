import { useEffect, useState } from "react";

function MainCardA(props) {
  const [estate, setEstate] = useState([]);

  async function fetchList() {
    const resp = await fetch(
      `https://estate-comparison.codeboot.cz/detail.php?id=${props.estateAId}`);
    const data = await resp.json();
    setEstate(data);
  }

  useEffect(() => {
    fetchList();
  }, [props.estateAId]);

  console.log(estate);

  return (
    <div className="mainCard">
      <img src={estate.images[0]} alt={estate.name} />
      <p className="mainCardTitle">{estate.name}</p>
      <div className="mainCardInfo">
        <h5>Price</h5>
        <p>{estate.prize_czk}Kč</p>
      </div>
      <div className="mainCardInfo">
        <h5>Location</h5>
        <p>{estate.locality}</p>
      </div>
      <div className="mainCardInfo">
        <h5>Floor area</h5>
        <p>{estate.building_area}m2</p>
      </div>
      <div className="mainCardInfo">
        <h5>Land area</h5>
        <p>{estate.land_area}m2</p>
      </div>
    </div>
  );
}

export default MainCardA;
