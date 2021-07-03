import "./EstateList.scss";
import { useEffect, useState } from "react";

function EstateList(props) { 
    const [estateList, setEstateList] = useState([]);

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

    

    

    return (
      <div className="estateList">
        {estateList.map((estate, i) => (
          <div className="card" onClick={() => props.setEstateAId(estate.id)}>
            <img src={estate.images[0]} alt={estate.name} />
            <p className="name">{estate.name_extracted + " " + estate.locality}</p>
          </div>
        ))}
      </div>
    );


}

export default EstateList;