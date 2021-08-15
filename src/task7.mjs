export function fib(context) {
  try {
    let fibNumber = 0;
    let arr = [];
    let { min, max, length } = context;
    let newMin = min;
    let newMax = max;
    if (min > max) {
      newMin = max;
      newMax = min;
    }
    if (!checkValidFib(context)) {
      if (length) {
        let fibonacci = [0, 1];
        for (let i = 2; i < length; i++) {
          fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        }

        return fibonacci;
      } else {
        for (let i = 0; fibNumber < newMax; ++i) {
          fibNumber = fibBinet(i);
          if (fibNumber > newMax) break;
          fibNumber >= newMin ? arr.push(fibNumber) : 0;
        }

        return arr;
      }
    } else {
      return checkValidFib(context);
    }
  } catch (err) {
    return err;
  }
}

function fibBinet(number) {
  let sqrOf5 = Math.sqrt(5);
  let a = (1 + sqrOf5) / 2;
  let b = (1 - sqrOf5) / 2;

  return Math.round((Math.pow(a, number) - Math.pow(b, number)) / sqrOf5);
}

function checkValidFib(info) {
  let length = info.length;
  let max = info.max;
  let min = info.min;
  if (length) {
    if (length <= 0 || typeof length !== "number") {
      return showInfo(
        "failed",
        "please,check your argument, function arguments length must be number more then 0"
      );
    }
  } else {
    if (typeof max !== "number" || typeof min !== "number") {
      return showInfo(
        "failed",
        "please,check your argument, max and min must be a number"
      );
    }
  }
}

function showInfo(status, reason) {
  return {
    status,
    reason,
  };
}
