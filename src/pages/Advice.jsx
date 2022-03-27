import React, { useState, useEffect } from "react";
import { withParamsAndNavigate } from "../util/Navigate";
import axios from "axios";
import Card from "../components/Card";
import "../App.scss";
import "../components/Button.scss"
import Button from "../components/Button"
const advice="";
function Advice() {
  const [advice, setAdvice] = useState("");
  const getAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        console.log(response.data);
        setAdvice(response.data.slip);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // useEffect(() => {
  //   getAdvice();
  // }, []);

  return (
    <div className="container-card">
      <div className="card">
        <h1 className="title">Random Pieces of Life Advice</h1>
        <div className="advice-container">
          <Card className="text" {...advice} />
          <h1 className="line">☀︎</h1>
          {/* <button className="btn" onClick={(e) => getAdvice()}>
            shuffle
          </button> */}
          <Button getAdvice={getAdvice}/>  
        </div>
      </div>
      
    </div>
  );
}

export default withParamsAndNavigate(Advice);
