import React from "react";
import "../style/CoinList.css";
import Coin from "./Coin";

function CoinList(props) {
  return (
    <ul className="CoinList">
      {props.coinDatas.map((coinData) => {
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
