import React from "react";

import style from "./StartGame.module.scss";

const StartGame = (props) => {
  socket.on("get sequence", ({ seq }) => {
    props.setOrder(seq);
  });

  const handleClick = () => {
    props.setUserOrder([]);
    socket.emit("start game");
    props.gameState.set("playing");
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
