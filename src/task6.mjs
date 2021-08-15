export function sequence(rowLength, square) {
  try {
    if (typeof rowLength !== "number" || typeof square !== "number") {
      return showInfo(
        "failed",
        "please,check your argument, function  arguments must be numbers"
      );
    }
    if (!Number.isInteger(rowLength) || !Number.isInteger(square)) {
      return showInfo(
        "failed",
        "please,check your argument, function  arguments must be an integer number"
      );
    }
    if (rowLength <= 0 || square <= 0) {
      return showInfo(
        "failed",
        "please,check your argument, function arguments must be greater than 0"
      );
    }

    let rowNumber = [];
    let startNumb = Math.ceil(Math.sqrt(square));

    for (startNumb; rowNumber.length < rowLength; startNumb++) {
      rowNumber.push(startNumb);
    }
    let seq = rowNumber.join(", ");

    return seq;
  } catch (err) {
    return err;
  }
}

export function showInfo(status, reason) {
  return {
    status,
    reason,
  };
}
