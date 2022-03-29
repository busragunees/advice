import React, { useState, useEffect, useReducer } from "react";
import { withParamsAndNavigate } from "../util/Navigate";
import axios from "axios";
import Card from "../components/Card";
import "../App.scss";
import "../components/Button.scss";
import Button from "../components/Button";
import Typewriter from "typewriter-effect";

const advice = "";
function Advice() {
  const [wallpaper, setWallpaper] = useState("");
  const [advice, setAdvice] = useState("");
  const getAdvice = () => {
    getWallpaper();
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
  useEffect(() => {
    getAdvice();
    getWallpaper();
  }, []);

  const getWallpaper = () => {
    axios
      .get("https://api.pexels.com/v1/search", {
        headers: {
          Authorization: `563492ad6f917000010000016e78dcefe4424433a945c38427567d4a`,
        },
        params: {
          query: "sky",
          per_page: 3,
          page: Math.floor(Math.random() * 100),
        },
      })
      .then((response) => {
        console.log(response.data.photos[0].src);
        setWallpaper(response.data.photos[0].src.landscape);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${wallpaper})`,
      }}
    >
      <div className="container-card">
        <div className="card">
          <h1 className="title">Random Pieces of Life Advice</h1>
          <div className="advice-container">
            <Card className="text" {...advice} />
            <h1 className="line">☀︎</h1>
            {/* <button className="btn" onClick={(e) => getAdvice()}>
            shuffle
          </button> */}
            <Button getAdvice={getAdvice} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default withParamsAndNavigate(Advice);
