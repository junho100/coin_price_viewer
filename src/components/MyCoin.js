import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/MyCoin.css";
/* 코인 데이터 props로 넘어오면 랜더링 구현*/
function MyCoin(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState({});

  async function getPresentCoinData() {
    let {
      data: {
        image: { large },
        name,
        symbol,
        description: { en },
        market_data: {
          current_price: { btc },
        },
      },
    } = await axios.get(props.API + "coins/" + props.presentCoin);
    if (en.length > 500) {
      en = en.substr(0, 500) + "...";
    }
    setCoinData({
      src: large,
      name,
      symbol,
      description: en,
      market_data: btc,
    });
    setIsLoading(false);
  }

  useEffect(() => {
    setIsLoading(true);
    if (props.presentCoin !== "") {
      getPresentCoinData();
    }
  }, [props.presentCoin]);

  if (props.presentCoin === "") {
    return (
      <div className="MyCoin">
        <div className="welcome_wrapper">
          <h1 id="title">COIN PRICE VIEWER</h1>
          <p>제작자 : 백준호</p>
          <p>bemodesty306@naver.com</p>
          <p>010-5736-6500</p>
          <span>
            GITHUB :{" "}
            <a href="https://github.com/JunhoBaek" target="_blank">
              https://github.com/JunhoBaek
            </a>
          </span>
        </div>
      </div>
    );
  } else {
    if (isLoading) {
      return <div className="MyCoin loading">loading....</div>;
    } else {
      return (
        <div className="MyCoin">
          <h1
            id="header"
            onClick={() => {
              props.setPresentCoin("");
            }}
          >
            CoinPriceViewer
          </h1>
          <ul id="coin_wrapper">
            <li>
              <img src={coinData.src} alt="#"></img>
            </li>
            <li>{coinData.name}</li>
            <li>{coinData.symbol}</li>
            <li>{coinData.description}</li>
            <li>price : {coinData.market_data}btc</li>
          </ul>
        </div>
      );
    }
  }
}
export default MyCoin;
