import React from "react";
import style from "./BoardButtons.module.scss";

const BoardButtons = (props) => {
  return <button className={style.button}>{props.number}</button>;
};

export default BoardButtons;
