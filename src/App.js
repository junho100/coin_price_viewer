import axios from "axios";
import React, { useEffect, useState } from "react";
import CoinList from "./components/CoinList";
import MyCoin from "./components/MyCoin";
import "./style/App.css";

const API = "https://api.coingecko.com/api/v3/";

function App() {
  const [coinDatas, setCoinDatas] = useState([]);
  const [presentCoin, setPresentCoin] = useState("");
  /* 클릭한 코인 데이터 받아오는 함수 구현*/
  const [presentCoinData, setPresentCoinData] = useState({});
  const [coinIsLoading, setCoinIsLoading] = useState(true);

  async function getCoinDatas() {
    const { data: datas } = await axios.get(API + "coins/list");
    const extractedDatas = datas.slice(1000, 1030);
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
        isLoading={coinIsLoading}
      ></MyCoin>
      <CoinList
        coinDatas={coinDatas}
        setPresentCoin={setPresentCoin}
      ></CoinList>
    </div>
  );
}

export default App;
