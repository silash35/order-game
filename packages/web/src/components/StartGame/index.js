import React from "react";

import style from "./StartGame.module.scss";

const StartGame = ({ gameState }) => {
  const handleClick = () => {
    socket.emit("game started");
    gameState.set("playing");
  };

  let text;
  switch (gameState.value) {
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
