import React from "react";
import ellipseDark from "./ellipseDark.png";
import crossDark from "./crossDark.png";

const Box = ({ boxNumber, state, dispatch, result }) => {
  let style_true = {
    backgroundColor: "#4EF421", //green
  };
  let style_false = {
    backgroundColor: "#FFA600",
  };
  return (
    <div
      className="box"
      style={
        state[boxNumber] !== "unselected"
          ? state[boxNumber] === "selected_by_true"
            ? style_true
            : style_false
          : {}
      }
      onClick={() => {
        if (state.currentPlayer && result === "") {
          dispatch({ box: boxNumber, result: result });
        }
      }}
    >
      {state[boxNumber] !== "unselected" ? (
        state[boxNumber] === "selected_by_true" ? (
          <img src={crossDark} alt="" />
        ) : (
          <img src={ellipseDark} alt="" />
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default Box;
