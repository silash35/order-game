import React from "react";

import style from "./Board.module.scss";
import BoardButtons from "./BoardButtons";
import StartGame from "./StartGame";

const Board = () => {
  const [order, setOrder] = React.useState([]);
  const [gameState, setGameState] = React.useState("default"); // default, playing, victory or lost

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
    return (
      <article className={style.board}>
        {order.map((n) => {
          return <BoardButtons number={n} key={n} />;
        })}
      </article>
    );
  } else {
    return (
      <article className={style.board}>
        <StartGame
          gameState={{ value: gameState, set: setGameState }}
          setOrder={setOrder}
        />
      </article>
    );
  }
};

export default Board;
