import "./App.css";
import icon from "./Group.png";
import cross from "./cross.png";
import ellipse from "./Ellipse.png";
import React, { useReducer, useState } from "react";
import importedReducer from "./reducer";
import winner from "./winner";
import Box from "./Box";
import machine from "./machine";
function reducer(state, action) {
  return importedReducer(state, action);
}
function App() {
  const [result, setresult] = useState("");
  const [state, dispatch] = useReducer(reducer, {
    currentPlayer: true,
    box1: "unselected",
    box2: "unselected",
    box3: "unselected",
    box4: "unselected",
    box5: "unselected",
    box6: "unselected",
    box7: "unselected",
    box8: "unselected",
    box9: "unselected",
  });
  winner(state, result, setresult);
  let boxes = [];
  for (const key in state) {
    if (key !== "currentPlayer") boxes.push(key);
  }
  if (!state.currentPlayer && result == "") {
    machine(dispatch, state, result);
  }
  return (
    <div className="App">
      <div>
        <h1>Tic Tac Toe</h1>
        <img className="underline-icon" src={icon} alt="" />
      </div>
      <div className="tic-tac-toe">
        <div>
          <h3>
            Current player :{" "}
            {state.currentPlayer ? (
              <img className="cross" src={cross} alt="" />
            ) : (
              <img className="ellipse" src={ellipse} alt="" />
            )}
          </h3>
          <div className="tic-tac-toe-wrapper">
            {boxes.map((box) => (
              <Box
                key={box}
                boxNumber={box}
                state={state}
                dispatch={dispatch}
                result={result}
              />
            ))}
          </div>
        </div>
        <h3 className="result">{result}</h3>
        <button
          className="btn"
          onClick={() => {
            dispatch({ box: "reset" });
            setresult("");
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
