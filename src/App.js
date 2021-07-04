import EstateList from "./EstateList/EstateList";
import MainCardA from "./MainCards/MainCardA";
import MainCardB from "./MainCards/MainCardB";
import ShellCard from "./MainCards/ShellCard";
import {useState} from "react";
import "./App.scss";

function App() {
  const [estateA, setEstateA] = useState(null);
  const [estateB, setEstateB] = useState(null);
  const [colorA, setColorA] = useState("white");
  const [colorB, setColorB] = useState("white");


  const compare = () => {
    if (estateA.prize_czk < estateB.prize_czk) {
      setColorA("red");
      setColorB("green");
    } else {
      setColorA("green");
      setColorB("red");
    }
  }
  
  
  console.log(estateA)
  console.log(colorA)
  console.log(colorB)

  return (
    <div className="App">
      <h1 className="title">Estate Comparison</h1>
      <EstateList
        setEstateA={setEstateA}
        setEstateB={setEstateB}
        onClick={compare}
      />
      <div className="main">
        {estateA === null ? (
          <ShellCard />
        ) : (
          <MainCardA estateA={estateA} colorA={colorA} />
        )}
        {estateB === null ? (
          <ShellCard />
        ) : (
          <MainCardB estateB={estateB} colorA={colorA} />
        )}
      </div>
    </div>
  );
}

export default App;
