import React from "react";
import style from "./BoardButtons.module.scss";

const BoardButtons = (props) => {
  const [status, setStatus] = React.useState("none"); // loading, none, right or wrong

  fetch("/api/order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: "[8,2,4,5,6]",
  });

  const handleClick = () => {
    console.log(props.number);
    setStatus("right");
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
