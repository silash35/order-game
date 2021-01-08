import React from "react";
import StartGame from "./StartGame";
import BoardButtons from "./BoardButtons";
import style from "./Board.module.scss";

const Board = () => {
  const [seq, setSeq] = React.useState(false);
  const [userSeq, setUserSeq] = React.useState([]);
  const buttons = [];

  if (seq === false) {
    buttons.push(<StartGame setSeq={setSeq} />);
  } else {
    seq.forEach((n) => {
      buttons.push(
        <BoardButtons
          number={n}
          userSeq={{ value: userSeq, set: setUserSeq }}
          setSeq={setSeq}
        />
      );
    });
  }

  return <article className={style.board}>{buttons}</article>;
};

export default Board;
