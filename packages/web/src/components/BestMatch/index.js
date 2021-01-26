import React from "react";

import style from "./BestMatch.module.scss";

const BestMatch = () => {
  const [time, setTime] = React.useState(undefined);

  socket.on("best match", ({ fastestTime }) => {
    setTime(fastestTime);
  });

  if (time == undefined) {
    return <></>;
  } else {
    return <p className={style.text}>Best time: {time} milliseconds</p>;
  }
};

export default BestMatch;
