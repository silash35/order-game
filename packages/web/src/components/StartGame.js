import React from "react";
import style from "./StartGame.module.scss";

const StartGame = (props) => {
  const handleClick = () => {
    props.setUserOrder([]);

    fetch("/api/order")
      .then((res) => res.json())
      .then((res) => {
        props.setOrder(res.randomSequence);
        props.gameState.set("playing");
      });
  };

  let text;
  switch (props.gameState.value) {
    case "victory":
      text = "You Win! Play Again?";
      break;
    case "lost":
      text = "You Lose. Play Again?";
      break;
    default:
      text = "Start Game";
      break;
  }

  return (
    <button onClick={handleClick} className={style.button}>
      {text}
    </button>
  );
};

export default StartGame;
