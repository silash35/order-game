import React from "react";
import BoardButtons from "./components/BoardButtons";

const App = () => {
  const [seq, setSeq] = React.useState(false);
  const buttons = [];

  const getSeq = () => {
    fetch("/api/order")
      .then((res) => res.json())
      .then((res) => {
        setSeq(res.randomSequence);
      });
  };

  if (seq === false) {
    buttons.push(<button onClick={getSeq}>Start Game</button>);
  } else {
    seq.forEach((n) => {
      buttons.push(<BoardButtons number={n} />);
    });
  }

  return <article className="board">{buttons}</article>;
};

export default App;
