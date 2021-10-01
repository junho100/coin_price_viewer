import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/MyCoin.css";
/* 코인 데이터 props로 넘어오면 랜더링 구현*/
function MyCoin(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState({});

  async function getPresentCoinData() {
    const {
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
    return <div className="MyCoin">empty!</div>;
  } else {
    if (isLoading) {
      return <div className="MyCoin">loading....</div>;
    } else {
      return (
        <div className="MyCoin">
          <ul id="coin_wrapper">
            <li>
              <img src={coinData.src} alt="#"></img>
            </li>
            <li>{coinData.name}</li>
            <li>{coinData.symbol}</li>
            <li>{coinData.description}</li>
            <li>{coinData.market_data}</li>
            <li>{coinData.name}</li>
          </ul>
        </div>
      );
    }
  }
}
export default MyCoin;
