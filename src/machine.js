const machine = (dispatch, state, result) => {
  let boxesLeft = [];
  for (const key in state) {
    if (key !== "currentPlayer" && state[key] === "unselected")
      boxesLeft.push(key);
  }

  if (result === "") {
    let random = Math.floor(Math.random() * boxesLeft.length + 1);
    //   state[`box${random}`] === SBT || state[`box${random}`] === SBF;
    // while (isSelected) {
    //   random = Math.floor(Math.random() * 9 + 1);
    //   isSelected =
    //     state[`box${random}`] === SBT || state[`box${random}`] === SBF;
    // }
    // if (!isSelected) {
    dispatch({ box: `box${random}`, result: result });
  }
};

export default machine;
