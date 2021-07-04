import EstateList from "./EstateList/EstateList";
import MainCardA from "./MainCards/MainCardA";
import MainCardB from "./MainCards/MainCardB";
import {useState} from "react";
import "./App.scss";

function App() {
  const [estateA, setEstateA] = useState({});
  const [estateB, setEstateB] = useState({});
  const [colorA, setColorA] = useState("green");
  const [colorB, setColorB] = useState("green");


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
      <EstateList setEstateA={setEstateA} setEstateB={setEstateB} onClick={compare}/>
      <div className="main">
        <MainCardA estateA={estateA} colorA={colorA}/>
        <MainCardB estateB={estateB} />
      </div>
    </div>
  );
}

export default App;
