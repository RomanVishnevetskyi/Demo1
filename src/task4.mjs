export function palindrome(p) {
  try {
    if (typeof p !== "number") {
      return showInfo(
        "failed",
        "please,check your argument, function  must accept a number"
      );
    }

    if (p < 0) {
      return showInfo(
        "failed",
        "please,check your argument, function  must accept a number"
      );
    }

    if (!Number.isInteger(p)) {
      return showInfo(
        "failed",
        "please,check your argument, function  must be an integer number"
      );
    }

    if (p < 10) {
      return showInfo(
        "failed",
        "please,check your argument, function  must be more or equal 10"
      );
    }
    if (p > 9007199254740991) {
      return showInfo(
        "failed",
        "please,check your argument, function  must be less than 9007199254740991"
      );
    }
    p = p.toString();

    for (let i = 0; i < p.length; i++) {
      for (let j = 0; j < p.length; j++) {
        let pal = p.slice(i, j + i + 1); // get part of the number
        let palReverse = pal.split("").reverse().join(""); //reverse the part of the number

        if (pal == palReverse && pal.length > 1) {
          return pal;
        }
      }
    }
    return 0;
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
