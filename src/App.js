import axios from "axios";
import React, { useEffect, useState } from "react";

const API = "https://api.coingecko.com/api/v3/";

function App() {
  const [coinDatas, setCoinDatas] = useState([]);

  async function getCoinDatas() {
    const { data: datas } = await axios.get(API + "coins/list");
    const extractedDatas = datas.slice(0, 30);
    setCoinDatas(extractedDatas);
  }

  useEffect(() => {
    getCoinDatas();
  }, []);
  return (
    <div className="App">
      {coinDatas.map((coinData) => {
        return <li>{coinData.name}</li>;
      })}
    </div>
  );
}

export default App;
