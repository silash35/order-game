import React from "react";

import style from "./Board.module.scss";
import BoardButtons from "./BoardButtons";
import StartGame from "./StartGame";

const Board = () => {
  const [order, setOrder] = React.useState([]);
  const [gameState, setGameState] = React.useState("default"); // default, playing, victory or lost

  const buttons = [];
  if (gameState == "playing") {
    order.forEach((n) => {
      buttons.push(<BoardButtons number={n} setGameState={setGameState} />);
    });
  } else {
    buttons.push(
      <StartGame
        gameState={{ value: gameState, set: setGameState }}
        setOrder={setOrder}
      />
    );
  }

  return <article className={style.board}>{buttons}</article>;
};

export default Board;
