import EstateList from "./EstateList/EstateList";
import MainCardA from "./MainCards/MainCardA";
import MainCardB from "./MainCards/MainCardB";
import ShellCard from "./MainCards/ShellCard";
import {useState} from "react";
import "./App.scss";

function App() {
  const [estateA, setEstateA] = useState(null);
  const [estateB, setEstateB] = useState(null);
  const [prizeA, setprizeA] = useState(0);
  const [prizeB, setprizeB] = useState(0);
  const [floorAreaA, setFloorAreaA] = useState(0);
  const [floorAreaB, setFloorAreaB] = useState(0);
  const [landAreaA, setLandAreaA] = useState(0);
  const [landAreaB, setLandAreaB] = useState(0);
 

  return (
    <div className="App">
      <h1 className="title">Estate Comparison</h1>
      <EstateList setEstateA={setEstateA} setEstateB={setEstateB} />
      <div className="main">
        {estateA === null ? (
          <ShellCard />
        ) : (
          <MainCardA
            estateA={estateA}
            setPrizeA={setprizeA}
            setFloorAreaA={setFloorAreaA}
            setLandAreaA={setLandAreaA}
            backgroundColorPrizeA={prizeA > prizeB ? "red" : "green"}
            backgroundColorFloorA={floorAreaA < floorAreaB ? "red" : "green"}
            backgroundColorLandA={landAreaA < landAreaB ? "red" : "green"}
          />
        )}
        {estateB === null ? (
          <ShellCard />
        ) : (
          <MainCardB
            estateB={estateB}
            setPrizeB={setprizeB}
            setFloorAreaB={setFloorAreaB}
            setLandAreaB={setLandAreaB}
            backgroundColorPrizeB={prizeA < prizeB ? "red" : "green"}
            backgroundColorFloorB={floorAreaA > floorAreaB ? "red" : "green"}
            backgroundColorLandB={landAreaA > landAreaB ? "red" : "green"}
          />
        )}
      </div>
    </div>
  );
}

export default App;
