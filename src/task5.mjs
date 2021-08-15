export function luckyTickets(context) {
  const { min, max } = context;
  let newMin = min;
  let newMax = max;
  if (min > max) {
    newMax = min;
    newMin = max;
  }
  if (typeof context !== "object") {
    return showInfo(
      "failed",
      "please,check your argument, arguments must be an object"
    );
  }
  if (
    !Number.isInteger(min) ||
    !Number.isInteger(max) ||
    min <= 0 ||
    min > 999999 ||
    max <= 0 ||
    max > 999999
  ) {
    return showInfo(
      "failed",
      "please,check your argument, min or max must be integer number and  more then zero but less then 999999"
    );
  }

  let arr = [];

  for (let i = newMin; arr.length - 1 < newMax - newMin; i++) {
    arr.push("0".repeat(6 - String(i).length) + i);
  }
  let hardScore = 0;
  let simpleScore = 0;
  for (let i = 0; i < arr.length; i++) {
    let sumOfThreeFirstNumb = arr[i]
      .split("")
      .slice(0, 3)
      .reduce((acc, current) => {
        return (acc += Number(current));
      }, 0);
    let sumOfThreeLastNumb = arr[i]
      .split("")
      .slice(3)
      .reduce((acc, current) => {
        return (acc += Number(current));
      }, 0);
    if (sumOfThreeFirstNumb === sumOfThreeLastNumb) {
      simpleScore += 1;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    let sumOfThreeFirstNumb = arr[i]
      .split("")
      .filter((i) => Number(i) % 2 === 0)
      .reduce((acc, current) => {
        return (acc += Number(current));
      }, 0);
    let sumOfThreeLastNumb = arr[i]
      .split("")
      .filter((i) => Number(i) % 2 !== 0)
      .reduce((acc, current) => {
        return (acc += Number(current));
      }, 0);
    if (sumOfThreeFirstNumb === sumOfThreeLastNumb) {
      hardScore += 1;
    }
  }
  let winner = "";
  if (simpleScore > hardScore) {
    winner = "simple";
  }
  if (hardScore > simpleScore) {
    winner = "hard";
  }
  if (hardScore === simpleScore) {
    winner = "both";
  }
  return {
    winner,
    tickets: { simple: simpleScore, hard: hardScore },
  };
}

// console.log(luckyTickets({ min: 848548, max: 22 }));

export function showInfo(status, reason) {
  return {
    status,
    reason,
  };
}
