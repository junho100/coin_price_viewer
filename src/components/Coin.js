import React, { useState, useEffect } from "react";
import "../style/Coin.css";

function Coin(props) {
  return (
    <li className="Coin">
      id : {props.id}
      <br />
      name : {props.name}
      <br />
      symbol : {props.symbol}
    </li>
  );
}

export default Coin;
