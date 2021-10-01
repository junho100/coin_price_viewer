import React from "react";
import "../style/MyCoin.css";
/* 코인 데이터 props로 넘어오면 랜더링 구현*/
function MyCoin(props) {
  if (props.presentCoin === "") {
    return <div className="MyCoin">empty!</div>;
  } else {
    if (props.isLoading) {
      return (
        <div className="MyCoin loading">
          <h1>Loading....</h1>
        </div>
      );
    } else {
      return <div className="MyCoin"></div>;
    }
  }
}

export default MyCoin;
