import axios from "axios";
import React, { useEffect, useState } from "react";
import "../style/CoinList.css";
import Coin from "./Coin";

const API = "https://api.coingecko.com/api/v3/";

function CoinList(props) {
  const [coinDatas, setCoinDatas] = useState([]);

  async function getCoinDatas() {
    const { data: datas } = await axios.get(API + "coins/list");
    const extractedDatas = [];
    for (let i = 0; i < 100; i++) {
      const rand_0_9000 = Math.floor(Math.random() * 9000);
      extractedDatas.push(datas[rand_0_9000]);
    }
    setCoinDatas(extractedDatas);
  }

  useEffect(() => {
    getCoinDatas();
  }, []);

  return (
    <ul className="CoinList">
      {coinDatas.map((coinData) => {
        return (
          <Coin
            key={coinData.id}
            id={coinData.id}
            name={coinData.name}
            symbol={coinData.symbol}
            setPresentCoin={props.setPresentCoin}
          ></Coin>
        );
      })}
    </ul>
  );
}

export default React.memo(CoinList);
