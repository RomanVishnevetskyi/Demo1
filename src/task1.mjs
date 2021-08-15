export function createChessBoard(length, width, symbol) {
  try {
    if (
      !Number.isInteger(length) ||
      !Number.isInteger(width) ||
      typeof symbol !== "string"
    ) {
      return showInfo(
        "failed",
        "please,check your arguments length and width must be an integer number and symbol must be a string"
      );
    }

    if (symbol.length !== 1) {
      return showInfo(
        "failed",
        "please,check your arguments, incorrect arguments  symbol length must be equals 1"
      );
    }
    if (length <= 0 || length > 20 || width <= 0 || width > 20) {
      return showInfo(
        "failed",
        "please, check your arguments, length or width must be  more than zero but les than 20"
      );
    }
    let board = "";

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < width; j++) {
        board += i % 2 === 1 ? ` ${symbol}` : `${symbol} `;
      }
      board += "\n";
    }

    return board;
  } catch (error) {
    return error;
  }
}

// Insrtuction if incorrect data
export function showInfo(status, reason) {
  return {
    status,
    reason,
  };
}
