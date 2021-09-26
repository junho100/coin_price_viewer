import axios from "axios";
import React, { useEffect, useState } from "react";
import CoinList from "./components/CoinList";
import MyCoin from "./components/MyCoin";
import "./style/App.css";

const API = "https://api.coingecko.com/api/v3/";

function App() {
  const [coinDatas, setCoinDatas] = useState([]);

  async function getCoinDatas() {
    const { data: datas } = await axios.get(API + "coins/list");
    const extractedDatas = datas.slice(0, 30);
    setCoinDatas(extractedDatas);
    console.log(extractedDatas);
  }

  useEffect(() => {
    getCoinDatas();
  }, []);

  return (
    <div className="App">
      <CoinList coinDatas={coinDatas}></CoinList>
      <MyCoin></MyCoin>
    </div>
  );
}

export default App;
