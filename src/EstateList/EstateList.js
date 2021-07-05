import "./EstateList.scss";
/* using hooks to feth and store data */
import { useEffect, useState } from "react";

function EstateList(props) { 
    /* storing data from api */
    const [estateList, setEstateList] = useState([]);
    /* changing side where selected estate data will be passed */
    const [side, setSide] = useState(1);
    
  /* fetching data and saving to state */
    async function fetchList() {
      const resp = await fetch(
        `https://estate-comparison.codeboot.cz/list.php?&limit=9`
      );
      const data = await resp.json();
      setEstateList(data);
    }

    useEffect(() => {
      fetchList();
    }, []);
    /* checking if side changes and the data stored in state */
    console.log(estateList)
    console.log(side)

    return (
      <div
        className="estateList"
        /* changing side logic */
        onClick={() => {
          if (side === 1) {
            setSide(2);
          } else {
            setSide(1);
          }
        }}
      >
        {estateList.map((estate, i) => (
          /* displaying list of estates */
          <div
            className="card"
            key={i}
            /* sending data to correct side logic */
            onClick={() => {
              if (side === 1) {
                props.setEstateA(estate);
              } else {
                props.setEstateB(estate);
              }
            }}
          >
            <img src={estate.images[0]} alt={estate.name} />
            <p className="name">
              {estate.name_extracted + " " + estate.locality}
            </p>
          </div>
        ))}
      </div>
    );


}

export default EstateList;