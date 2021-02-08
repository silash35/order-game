import React from "react";

import BestMatch from "../BestMatch";
import BoardButtons from "../BoardButtons";
import StartGame from "../StartGame";
import style from "./Board.module.scss";

const Board = () => {
  // States
  const [order, setOrder] = React.useState([]);
  const [gameState, setGameState] = React.useState("default"); // default, playing, victory or lost
  const [time, setTime] = React.useState(undefined);

  // Socket events
  socket.on("sequence", ({ seq }) => {
    setOrder(seq);
  });

  socket.on("best match", ({ fastestTime }) => {
    setTime(fastestTime);
  });

  socket.on("game changed", ({ isOrdered, isComplete }) => {
    if (isOrdered) {
      if (isComplete) {
        setGameState("victory");
      }
    } else {
      setGameState("lost");
    }
  });

  // Render
  if (gameState == "playing") {
    var buttons = order.map((n) => {
      return <BoardButtons number={n} key={n} />;
    });
  } else {
    var buttons = (
      <StartGame gameState={{ value: gameState, set: setGameState }} />
    );
  }

  return (
    <>
      <BestMatch time={time} />
      <article className={style.board}>{buttons}</article>
    </>
  );
};

export default Board;
