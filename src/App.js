import EstateList from "./EstateList/EstateList";
import MainCardA from "./MainCards/MainCardA";
import MainCardB from "./MainCards/MainCardB";
import ShellCard from "./MainCards/ShellCard";
import { useState } from "react";
import "./App.scss";

function App() {
  /* saving selected estates data */
  const [estateA, setEstateA] = useState(null);
  const [estateB, setEstateB] = useState(null);
 
  console.log(estateA);
  console.log(estateB);

  return (
    <div className="App">
      <h1 className="title">Estate Comparison</h1>
      <EstateList setEstateA={setEstateA} setEstateB={setEstateB} />
      <div className="main">
        {estateA === null ? (
          /* displaying empty card till estate is selected */
          <ShellCard />
        ) : (
          <MainCardA
            /* passing needed props */
            estateA={estateA}
            /* logic for comparing values of components and changing bg color */
            backgroundColorPrizeA={
              +estateA?.prize_czk > +estateB?.prize_czk ? "red" : "green"
            }
            backgroundColorFloorA={
              +estateA?.building_area < +estateB?.building_area
                ? "red"
                : "green"
            }
            backgroundColorLandA={
              +estateA?.land_area < +estateB?.land_area ? "red" : "green"
            }
          />
        )}
        {estateB === null ? (
          <ShellCard />
        ) : (
          <MainCardB
            estateB={estateB}
            backgroundColorPrizeB={
              +estateA?.prize_czk < +estateB?.prize_czk ? "red" : "green"
            }
            backgroundColorFloorB={
              +estateA?.building_area > +estateB?.building_area
                ? "red"
                : "green"
            }
            backgroundColorLandB={
              +estateA?.land_area > +estateB?.land_area ? "red" : "green"
            }
          />
        )}
      </div>
    </div>
  );
}

export default App;
