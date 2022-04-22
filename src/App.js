import "./App.css";
import icon from "./Group.png";
import cross from "./cross.png";
import crossDark from "./crossDark.png";
import ellipse from "./Ellipse.png";
import ellipseDark from "./ellipseDark.png";
import React, { useReducer, useState } from "react";
import importedReducer from "./reducer";
import winner from "./winner";

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
  let style_true = {
    backgroundColor: "#4EF421", //green
  };
  let style_false = {
    backgroundColor: "#FFA600",
  };

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
            {/* //box1------------- */}
            <div
              className="box"
              style={
                state.box1 !== "unselected"
                  ? state.box1 === "selected_by_true"
                    ? style_true
                    : style_false
                  : {}
              }
              onClick={() => dispatch({ box: "box1", result: result })}
            >
              {state.box1 !== "unselected" ? (
                state.box1 === "selected_by_true" ? (
                  <img src={crossDark} alt="" />
                ) : (
                  <img src={ellipseDark} alt="" />
                )
              ) : (
                ""
              )}
            </div>{" "}
            {/* //box2-------------------------- */}
            <div
              className="box"
              style={
                state.box2 !== "unselected"
                  ? state.box2 === "selected_by_true"
                    ? style_true
                    : style_false
                  : {}
              }
              onClick={() => dispatch({ box: "box2", result: result })}
            >
              {state.box2 !== "unselected" ? (
                state.box2 === "selected_by_true" ? (
                  <img src={crossDark} alt="" />
                ) : (
                  <img src={ellipseDark} alt="" />
                )
              ) : (
                ""
              )}
            </div>
            {/* box3------------------ */}
            <div
              className="box"
              style={
                state.box3 !== "unselected"
                  ? state.box3 === "selected_by_true"
                    ? style_true
                    : style_false
                  : {}
              }
              onClick={() => dispatch({ box: "box3", result: result })}
            >
              {state.box3 !== "unselected" ? (
                state.box3 === "selected_by_true" ? (
                  <img src={crossDark} alt="" />
                ) : (
                  <img src={ellipseDark} alt="" />
                )
              ) : (
                ""
              )}
            </div>
            {/* box4--------------- */}
            <div
              className="box"
              style={
                state.box4 !== "unselected"
                  ? state.box4 === "selected_by_true"
                    ? style_true
                    : style_false
                  : {}
              }
              onClick={() => dispatch({ box: "box4", result: result })}
            >
              {state.box4 !== "unselected" ? (
                state.box4 === "selected_by_true" ? (
                  <img src={crossDark} alt="" />
                ) : (
                  <img src={ellipseDark} alt="" />
                )
              ) : (
                ""
              )}
            </div>
            {/* box5--------------- */}
            <div
              className="box"
              style={
                state.box5 !== "unselected"
                  ? state.box5 === "selected_by_true"
                    ? style_true
                    : style_false
                  : {}
              }
              onClick={() => dispatch({ box: "box5", result: result })}
            >
              {state.box5 !== "unselected" ? (
                state.box5 === "selected_by_true" ? (
                  <img src={crossDark} alt="" />
                ) : (
                  <img src={ellipseDark} alt="" />
                )
              ) : (
                ""
              )}
            </div>
            {/* box6--------------- */}
            <div
              className="box"
              style={
                state.box6 !== "unselected"
                  ? state.box6 === "selected_by_true"
                    ? style_true
                    : style_false
                  : {}
              }
              onClick={() => dispatch({ box: "box6", result: result })}
            >
              {state.box6 !== "unselected" ? (
                state.box6 === "selected_by_true" ? (
                  <img src={crossDark} alt="" />
                ) : (
                  <img src={ellipseDark} alt="" />
                )
              ) : (
                ""
              )}
            </div>
            {/* box7--------------- */}
            <div
              className="box"
              style={
                state.box7 !== "unselected"
                  ? state.box7 === "selected_by_true"
                    ? style_true
                    : style_false
                  : {}
              }
              onClick={() => dispatch({ box: "box7", result: result })}
            >
              {state.box7 !== "unselected" ? (
                state.box7 === "selected_by_true" ? (
                  <img src={crossDark} alt="" />
                ) : (
                  <img src={ellipseDark} alt="" />
                )
              ) : (
                ""
              )}
            </div>
            {/* box8--------------- */}
            <div
              className="box"
              style={
                state.box8 !== "unselected"
                  ? state.box8 === "selected_by_true"
                    ? style_true
                    : style_false
                  : {}
              }
              onClick={() => dispatch({ box: "box8", result: result })}
            >
              {state.box8 !== "unselected" ? (
                state.box8 === "selected_by_true" ? (
                  <img src={crossDark} alt="" />
                ) : (
                  <img src={ellipseDark} alt="" />
                )
              ) : (
                ""
              )}
            </div>
            {/* box9--------------- */}
            <div
              className="box"
              style={
                state.box9 !== "unselected"
                  ? state.box9 === "selected_by_true"
                    ? style_true
                    : style_false
                  : {}
              }
              onClick={() => dispatch({ box: "box9", result: result })}
            >
              {state.box9 !== "unselected" ? (
                state.box9 === "selected_by_true" ? (
                  <img src={crossDark} alt="" />
                ) : (
                  <img src={ellipseDark} alt="" />
                )
              ) : (
                ""
              )}
            </div>
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
