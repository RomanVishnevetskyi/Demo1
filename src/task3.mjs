export function sortTriangles(arrOfTriangles) {
  try {
    if (!Array.isArray(arrOfTriangles)) {
      return showInfo("failed", "please,check your argument, vert");
    }
    for (let i = 0; i < arrOfTriangles.length; i++) {
      let vals = Object.values(arrOfTriangles[i]);
      let keys = Object.keys(arrOfTriangles[i]);
      let sides = vals.slice(1);
      let maxSide = Math.max(...sides);
      let sidesWithoutMaxSide = sides.reduce((n, m) => n + m, 0) - maxSide;
      let nameOfTriangles = keys[1] + keys[2] + keys[3];
      if (vals[0] !== nameOfTriangles.toUpperCase()) {
        return showInfo(
          "failed",
          "please,check your argument, vertices must match with sides of triangle"
        );
      }

      if (sides.some((i) => i <= 0)) {
        return showInfo(
          "failed",
          "please,check your argument, all three sides must be more zero"
        );
      }

      if (sides.some((i) => typeof i !== "number")) {
        return showInfo(
          "failed",
          "please,check your arguments , all three sides must be a number"
        );
      }

      if (sidesWithoutMaxSide < maxSide) {
        return showInfo(
          "failed",
          "please,check your argument, one of Object is not triangle"
        );
      }
    }
    function heron(a, b, c) {
      // S=sqrt (p(p-a)(p-b)(p-c))
      //  p=(a+b+c)/2
      let p = (a + b + c) / 2;
      let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
      let cutFloat = Math.trunc(area);
      return cutFloat;
    }

    const areaOfObj = arrOfTriangles.reduce((acc, item) => {
      const side = item.vertices.toLowerCase().split("");
      acc[item.vertices] = heron(item[side[0]], item[side[1]], item[side[2]]);
      return acc;
    }, {});

    function sortAreas(obj) {
      const sortedArr = Object.entries(obj).sort((a, b) => b[1] - a[1]);
      return sortedArr.map((item) => item[0]);
    }
    return sortAreas(areaOfObj);
  } catch (err) {
    return err;
  }
}
function showInfo(status, reason) {
  return {
    status,
    reason,
  };
}
