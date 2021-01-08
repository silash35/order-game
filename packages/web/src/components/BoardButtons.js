import React from "react";
import style from "./BoardButtons.module.scss";

const BoardButtons = (props) => {
  const [status, setStatus] = React.useState("none"); // loading, none, right or wrong

  const handleClick = () => {
    setStatus("loading");

    props.userSeq.value = [].concat(props.userSeq.value, [props.number]);
    fetch("/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(props.userSeq.value),
    })
      .then((res) => res.json())
      .then(({ isOrdered }) => {
        if (isOrdered) {
          setStatus("right");
        } else {
          setStatus("wrong");
          props.setSeq(false);
        }
      });

    props.userSeq.set(props.userSeq.value);
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
