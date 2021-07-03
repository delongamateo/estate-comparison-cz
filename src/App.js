import EstateList from "./EstateList/EstateList";
import MainCardA from "./MainCardA/MainCardA";
import {useState} from "react";
import "./App.scss";

function App() {
  const [estateAId, setEstateAId] = useState(0)

  console.log(estateAId)


  return (
    <div className="App">
      <h1 className="title">Estate Comparison</h1>
      <EstateList setEstateAId={setEstateAId}/>
      <MainCardA estateAId={estateAId}/>
    </div>
  );
}

export default App;
