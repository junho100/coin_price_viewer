import React, { useState, useEffect } from "react";
import "../style/Coin.css";

function Coin(props) {
  const tmp = props.symbol.toUpperCase();
  return (
    <div
      className="Coin"
      onClick={() => {
        props.setPresentCoin(props.id);
      }}
    >
      <ul>
        <li className="_name">{props.name}</li>
        <li className="_symbol">{tmp}</li>
      </ul>
    </div>
  );
}

export default Coin;
