import React from "react";
import BoardButtons from "./components/BoardButtons";

const App = () => {
  const seq = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const numbers = [];
  seq.forEach((n) => {
    numbers.push(<BoardButtons number={n} />);
  });
  return <article className="board">{numbers}</article>;
};

export default App;
