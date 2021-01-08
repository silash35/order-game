import React from "react";
import style from "./StartGame.module.scss";

const StartGame = (props) => {
  const handleClick = () => {
    fetch("/api/order")
      .then((res) => res.json())
      .then((res) => {
        props.setSeq(res.randomSequence);
      });
  };

  return (
    <button onClick={handleClick} className={style.button}>
      Start Game
    </button>
  );
};

export default StartGame;
