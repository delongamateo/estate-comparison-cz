import "./EstateList.scss";
import { useEffect, useState } from "react";

function EstateList(props) { 
    const [estateList, setEstateList] = useState([]);
    const [side, setSide] = useState(1);
    

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

    console.log(estateList)
    console.log(side)

    return (
      <div
        className="estateList"
        onClick={() => {
          if (side === 1) {
            setSide(2);
          } else {
            setSide(1);
          }
        }}
      >
        {estateList.map((estate, i) => (
          <div
            className="card"
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