import React, { useEffect, useState } from "react";
import CoinList from "./components/CoinList";
import MyCoin from "./components/MyCoin";
import "./style/App.css";

const API = "https://api.coingecko.com/api/v3/";

function App() {
  const [presentCoin, setPresentCoin] = useState("");

  return (
    <div className="App">
      <MyCoin
        presentCoin={presentCoin}
        setPresentCoin={setPresentCoin}
      ></MyCoin>
      <CoinList setPresentCoin={setPresentCoin}></CoinList>
    </div>
  );
}

export default App;
