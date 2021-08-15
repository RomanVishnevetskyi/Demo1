export function envelopAnalys(envelop1, envelop2) {
  try {
    if (
      typeof envelop1 !== "object" ||
      envelop1 === null ||
      typeof envelop1 !== "object" ||
      envelop2 === null
    ) {
      return showInfo(
        "failed",
        "please,check your arguments, function  must accepts two objects"
      );
    }
    if (
      !isFinite(envelop1.height) ||
      !isFinite(envelop1.width) ||
      !isFinite(envelop2.height) ||
      !isFinite(envelop2.width)
    ) {
      return showInfo(
        "failed",
        "please,check your arguments, one of four sides is not float number"
      );
    }
    if (
      envelop1.height <= 0 ||
      envelop1.width <= 0 ||
      envelop1.height > 1000000 ||
      envelop1.width > 1000000 ||
      envelop2.height <= 0 ||
      envelop2.width <= 0 ||
      envelop2.height > 1000000 ||
      envelop2.width > 1000000
    ) {
      return showInfo(
        "failed",
        "please,check your arguments, value shoud be more than zero but less than 1000000"
      );
    }

    if (
      (envelop1.height < envelop2.height && envelop1.width < envelop2.width) ||
      (envelop1.height < envelop2.width && envelop1.width < envelop2.height)
    ) {
      return 1;
    } else if (
      (envelop1.height > envelop2.height && envelop1.width > envelop2.width) ||
      (envelop1.height > envelop2.width && envelop1.width > envelop2.height)
    ) {
      return 2;
    } else {
      return 0;
    }
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
