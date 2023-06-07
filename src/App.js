import "./App.css";
import Chessboard from "chessboardjsx";
import React, { useState } from "react";

function App() {
  const [fen, setFen] = useState("start");

  return (
    <div className="App">
      <div className="Board">
        <Chessboard position={fen} onPieceClick={onPieceClick}></Chessboard>
      </div>
    </div>
  );
}

function onPieceClick(event) {
  console.log(event);
}

export default App;
