import React from "react";

import style from "./BestMatch.module.scss";

const BestMatch = ({ time }) => {
  if (time == undefined) {
    return <></>;
  } else {
    return <p className={style.text}>Best time: {time} milliseconds</p>;
  }
};

export default BestMatch;
