const reducer = (state, { box, result }) => {
  switch (box) {
    case "box1":
      if (
        state.currentPlayer === true &&
        state.box1 === "unselected" &&
        result === ""
      ) {
        return {
          ...state,
          box1: "selected_by_true",
          currentPlayer: !state.currentPlayer,
        };
      } else if (
        state.currentPlayer === false &&
        state.box1 === "unselected" &&
        result === ""
      ) {
        return {
          ...state,
          box1: "selected_by_false",
          currentPlayer: !state.currentPlayer,
        };
      } else return state;

    case "box2":
      if (
        state.currentPlayer === true &&
        state.box2 === "unselected" &&
        result === ""
      ) {
        return {
          ...state,
          box2: "selected_by_true",
          currentPlayer: !state.currentPlayer,
        };
      } else if (
        state.currentPlayer === false &&
        state.box2 === "unselected" &&
        result === ""
      ) {
        return {
          ...state,
          box2: "selected_by_false",
          currentPlayer: !state.currentPlayer,
        };
      } else return state;

    case "box3":
      if (
        state.currentPlayer === true &&
        state.box3 === "unselected" &&
        result === ""
      ) {
        return {
          ...state,
          box3: "selected_by_true",
          currentPlayer: !state.currentPlayer,
        };
      } else if (
        state.currentPlayer === false &&
        state.box3 === "unselected" &&
        result === ""
      ) {
        return {
          ...state,
          box3: "selected_by_false",
          currentPlayer: !state.currentPlayer,
        };
      } else return state;

    case "box4":
      if (
        state.currentPlayer === true &&
        state.box4 === "unselected" &&
        result === ""
      ) {
        return {
          ...state,
          box4: "selected_by_true",
          currentPlayer: !state.currentPlayer,
        };
      } else if (
        state.currentPlayer === false &&
        state.box4 === "unselected" &&
        result === ""
      ) {
        return {
          ...state,
          box4: "selected_by_false",
          currentPlayer: !state.currentPlayer,
        };
      } else return state;

    case "box5":
      if (
        state.currentPlayer === true &&
        state.box5 === "unselected" &&
        result === ""
      ) {
        return {
          ...state,
          box5: "selected_by_true",
          currentPlayer: !state.currentPlayer,
        };
      } else if (
        state.currentPlayer === false &&
        state.box5 === "unselected" &&
        result === ""
      ) {
        return {
          ...state,
          box5: "selected_by_false",
          currentPlayer: !state.currentPlayer,
        };
      } else return state;

    case "box6":
      if (
        state.currentPlayer === true &&
        state.box6 === "unselected" &&
        result === ""
      ) {
        return {
          ...state,
          box6: "selected_by_true",
          currentPlayer: !state.currentPlayer,
        };
      } else if (
        state.currentPlayer === false &&
        state.box6 === "unselected" &&
        result === ""
      ) {
        return {
          ...state,
          box6: "selected_by_false",
          currentPlayer: !state.currentPlayer,
        };
      } else return state;

    case "box7":
      if (
        state.currentPlayer === true &&
        state.box7 === "unselected" &&
        result === ""
      ) {
        return {
          ...state,
          box7: "selected_by_true",
          currentPlayer: !state.currentPlayer,
        };
      } else if (
        state.currentPlayer === false &&
        state.box7 === "unselected" &&
        result === ""
      ) {
        return {
          ...state,
          box7: "selected_by_false",
          currentPlayer: !state.currentPlayer,
        };
      } else return state;

    case "box8":
      if (
        state.currentPlayer === true &&
        state.box8 === "unselected" &&
        result === ""
      ) {
        return {
          ...state,
          box8: "selected_by_true",
          currentPlayer: !state.currentPlayer,
        };
      } else if (
        state.currentPlayer === false &&
        state.box8 === "unselected" &&
        result === ""
      ) {
        return {
          ...state,
          box8: "selected_by_false",
          currentPlayer: !state.currentPlayer,
        };
      } else return state;

    case "box9":
      if (
        state.currentPlayer === true &&
        state.box9 === "unselected" &&
        result === ""
      ) {
        return {
          ...state,
          box9: "selected_by_true",
          currentPlayer: !state.currentPlayer,
        };
      } else if (
        state.currentPlayer === false &&
        state.box9 === "unselected" &&
        result === ""
      ) {
        return {
          ...state,
          box9: "selected_by_false",
          currentPlayer: !state.currentPlayer,
        };
      } else return state;

    case "reset":
      return {
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
      };

    default:
      return state;
  }
};

export default reducer;
