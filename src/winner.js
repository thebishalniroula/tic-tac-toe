const winner = (state, result, setresult) => {
  if (
    (state.box1 === "selected_by_true" &&
      state.box2 === "selected_by_true" &&
      state.box3 === "selected_by_true") ||
    (state.box1 === "selected_by_true" &&
      state.box4 === "selected_by_true" &&
      state.box7 === "selected_by_true") ||
    (state.box1 === "selected_by_true" &&
      state.box5 === "selected_by_true" &&
      state.box9 === "selected_by_true") ||
    (state.box3 === "selected_by_true" &&
      state.box6 === "selected_by_true" &&
      state.box9 === "selected_by_true") ||
    (state.box7 === "selected_by_true" &&
      state.box8 === "selected_by_true" &&
      state.box9 === "selected_by_true") ||
    (state.box3 === "selected_by_true" &&
      state.box5 === "selected_by_true" &&
      state.box7 === "selected_by_true") ||
    (state.box2 === "selected_by_true" &&
      state.box5 === "selected_by_true" &&
      state.box8 === "selected_by_true") ||
    (state.box4 === "selected_by_true" &&
      state.box5 === "selected_by_true" &&
      state.box6 === "selected_by_true")
  ) {
    if (result === "") {
      setresult("Player X won");
    }
  } else if (
    (state.box1 === "selected_by_false" &&
      state.box2 === "selected_by_false" &&
      state.box3 === "selected_by_false") ||
    (state.box1 === "selected_by_false" &&
      state.box4 === "selected_by_false" &&
      state.box7 === "selected_by_false") ||
    (state.box1 === "selected_by_false" &&
      state.box5 === "selected_by_false" &&
      state.box9 === "selected_by_false") ||
    (state.box3 === "selected_by_false" &&
      state.box6 === "selected_by_false" &&
      state.box9 === "selected_by_false") ||
    (state.box7 === "selected_by_false" &&
      state.box8 === "selected_by_false" &&
      state.box9 === "selected_by_false") ||
    (state.box3 === "selected_by_false" &&
      state.box5 === "selected_by_false" &&
      state.box7 === "selected_by_false") ||
    (state.box2 === "selected_by_false" &&
      state.box5 === "selected_by_false" &&
      state.box8 === "selected_by_false") ||
    (state.box4 === "selected_by_false" &&
      state.box5 === "selected_by_false" &&
      state.box6 === "selected_by_false")
  ) {
    if (result === "") {
      setresult("Player O won");
    }
  } else if (
    state.box1 !== "unselected" &&
    state.box2 !== "unselected" &&
    state.box3 !== "unselected" &&
    state.box4 !== "unselected" &&
    state.box5 !== "unselected" &&
    state.box6 !== "unselected" &&
    state.box7 !== "unselected" &&
    state.box8 !== "unselected" &&
    state.box9 !== "unselected"
  ) {
    if (result === "") {
      setresult("It's draw. Reset to rematch.");
    }
  }
};

export default winner;
