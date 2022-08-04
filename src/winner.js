const winner = (state, result, setresult) => {
  const winningBoxes = [
    ["box1", "box2", "box3"],
    ["box1", "box4", "box7"],
    ["box1", "box5", "box9"],
    ["box3", "box6", "box9"],
    ["box7", "box8", "box9"],
    ["box3", "box5", "box7"],
    ["box2", "box5", "box8"],
    ["box4", "box5", "box6"],
  ];
  const SBT = "selected_by_true";
  const SBF = "selected_by_false";
  const UNSELECTED = "unselected";

  if (result == "")
    winningBoxes.forEach((item) => {
      if (
        state[item[0]] === SBT &&
        state[item[1]] === SBT &&
        state[item[2]] === SBT
      ) {
        setresult("Player X won");
      }
      if (
        state[item[0]] === SBF &&
        state[item[1]] === SBF &&
        state[item[2]] === SBF
      ) {
        setresult("Player O won");
      }
    });
  if (
    state.box1 !== UNSELECTED &&
    state.box2 !== UNSELECTED &&
    state.box3 !== UNSELECTED &&
    state.box4 !== UNSELECTED &&
    state.box5 !== UNSELECTED &&
    state.box6 !== UNSELECTED &&
    state.box7 !== UNSELECTED &&
    state.box8 !== UNSELECTED &&
    state.box9 !== UNSELECTED &&
    result === ""
  ) {
    setresult("It's draw. Reset to rematch.");
  }
};

export default winner;
