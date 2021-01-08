import React from "react";
import StartGame from "./StartGame";
import BoardButtons from "./BoardButtons";
import style from "./Board.module.scss";

const Board = () => {
  const [order, setOrder] = React.useState([]);
  const [userOrder, setUserOrder] = React.useState([]);
  const [gameState, setGameState] = React.useState("default"); // default, playing, victory or lost

  const buttons = [];
  if (gameState == "playing") {
    order.forEach((n) => {
      buttons.push(
        <BoardButtons
          number={n}
          userOrder={{ value: userOrder, set: setUserOrder }}
          setGameState={setGameState}
        />
      );
    });
  } else {
    buttons.push(
      <StartGame
        gameState={{ value: gameState, set: setGameState }}
        setOrder={setOrder}
        setUserOrder={setUserOrder}
      />
    );
  }

  return <article className={style.board}>{buttons}</article>;
};

export default Board;
