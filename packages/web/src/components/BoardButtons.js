import React from "react";

import style from "./BoardButtons.module.scss";

const BoardButtons = (props) => {
  const [status, setStatus] = React.useState("none"); // loading, none, right or wrong

  socket.on("game changed", ({ lastNumber, isOrdered, isComplete }) => {
    if (lastNumber == props.number) {
      if (isOrdered) {
        setStatus("right");
        if (isComplete) {
          props.setGameState("victory");
        }
      } else {
        setStatus("wrong");
        props.setGameState("lost");
      }
    }
  });

  const handleClick = () => {
    setStatus("loading");

    socket.emit("number pressed", props.number);
  };

  return (
    <button
      onClick={handleClick}
      className={style.button + " " + style[status]}
    >
      {props.number}
    </button>
  );
};

export default BoardButtons;
