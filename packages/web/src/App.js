import React from "react";
import StartGame from "./components/StartGame";
import BoardButtons from "./components/BoardButtons";

const App = () => {
  const [seq, setSeq] = React.useState(false);
  const buttons = [];

  if (seq === false) {
    buttons.push(<StartGame setSeq={setSeq} />);
  } else {
    seq.forEach((n) => {
      buttons.push(<BoardButtons number={n} />);
    });
  }

  return <article className="board">{buttons}</article>;
};

export default App;
