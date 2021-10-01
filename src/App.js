import axios from "axios";
import React, { useEffect, useState } from "react";
import CoinList from "./components/CoinList";
import MyCoin from "./components/MyCoin";
import "./style/App.css";

const API = "https://api.coingecko.com/api/v3/";

function App() {
  const [coinDatas, setCoinDatas] = useState([]);
  const [presentCoin, setPresentCoin] = useState("");

  async function getCoinDatas() {
    const { data: datas } = await axios.get(API + "coins/list");
    const extractedDatas = [];
    for (let i = 0; i < 100; i++) {
      const rand_0_9000 = Math.floor(Math.random() * 9000);
      extractedDatas.push(datas[rand_0_9000]);
    }
    setCoinDatas(extractedDatas);
    console.log(extractedDatas);
  }

  useEffect(() => {
    getCoinDatas();
  }, []);

  return (
    <div className="App">
      <MyCoin
        presentCoin={presentCoin}
        API={API}
        setPresentCoin={setPresentCoin}
      ></MyCoin>
      <CoinList
        coinDatas={coinDatas}
        setPresentCoin={setPresentCoin}
      ></CoinList>
    </div>
  );
}

export default App;
