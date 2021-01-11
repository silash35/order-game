import React from "react";

import style from "./BoardButtons.module.scss";

const BoardButtons = (props) => {
  const [status, setStatus] = React.useState("none"); // loading, none, right or wrong

  socket.on(`button ${props.number} pressed`, ({ state, number }) => {
    if (number == props.number) {
      setStatus(state);
      console.log("i am button " + props.number + " and my state is " + status);
    }
  });

  const handleClick = () => {
    if (status == "none") {
      setStatus("loading");
      socket.emit("number pressed", props.number);
    }
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
