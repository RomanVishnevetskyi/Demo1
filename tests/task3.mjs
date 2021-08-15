// Function
import { sortTriangles } from "../src/task3.mjs";
// Configuration
mocha.setup("bdd");
const assert = chai.assert;
const expect = chai.expect;

//Suit

//тесты

describe("Triangles", function () {
  it("Function areaOfTriangles return ['ABC', 'ZXC', 'ASD']", function () {
    assert.deepEqual(
      sortTriangles([
        { vertices: "ABC", a: 10, b: 20, c: 22.36 },
        { vertices: "ZXC", z: 4.5, x: 11.79, c: 10.56 },
        { vertices: "ASD", a: 7.97, s: 3.61, d: 8 },
      ]),
      ["ABC", "ZXC", "ASD"]
    );
  });
  it("Function return  ['ABC', 'ZXC', 'ASD'] is an array", function () {
    assert.isArray(
      sortTriangles([
        { vertices: "ABC", a: 10, b: 20, c: 22.36 },
        { vertices: "ZXC", z: 4.5, x: 11.79, c: 10.56 },
        { vertices: "ASD", a: 7.97, s: 3.61, d: 8 },
      ])
    );
  });
  it("Object { vertices: 'ASD', a: 7.97, z: 3.61, d: 8 } has incorect side z ", function () {
    assert.deepEqual(
      sortTriangles([
        { vertices: "ABC", a: 10, b: 20, c: 22.36 },
        { vertices: "ZXC", z: 4.5, x: 11.79, c: 10.56 },
        { vertices: "ASD", a: 7.97, z: 3.61, d: 8 },
      ]),
      {
        status: "failed",
        reason:
          "please,check your argument, vertices must match with sides of triangle",
      }
    );
  });

  it(`Failed  when all fields are empty`, function () {
    assert.deepEqual(
      sortTriangles([
        { vertices: "ABC", a: 10, b: 20, c: 22.36 },
        { vertices: "ZXC", z: "", x: "", c: "" },
        { vertices: "ASD", a: 7.97, s: 3.61, d: 8 },
      ]),
      {
        status: "failed",
        reason: "please,check your argument, all three sides must be more zero",
      }
    );
  });

  it("The function's return array ['ABC', 'ZXC', 'ASD'] include string 'ASD'", function () {
    assert.include(
      sortTriangles([
        { vertices: "ABC", a: 10, b: 20, c: 22.36 },
        { vertices: "ZXC", z: 4.5, x: 11.79, c: 10.56 },
        { vertices: "ASD", a: 7.97, s: 3.61, d: 8 },
      ]),
      "ASD"
    );
  });

  it("Failed when one side of the triangle is greater than the sum of the other two!", function () {
    assert.deepEqual(
      sortTriangles([
        { vertices: "ABC", a: 45, b: 30, c: 9 },
        { vertices: "ZXC", z: 4.5, x: 11.79, c: 10.56 },
        { vertices: "ASD", a: 7.97, s: 3.61, d: 8 },
      ]),
      {
        status: "failed",
        reason: "please,check your argument, one of Object is not triangle",
      }
    );
  });
  it("Object { vertices: 'ASD', a: 7.97, s: 3.61, d: -2.2 } has incorrect value 'd' - negative number  ", function () {
    assert.deepEqual(
      sortTriangles([
        { vertices: "ABC", a: 32, b: 30, c: 9 },
        { vertices: "ZXC", z: 4.5, x: 11.79, c: 10.56 },
        { vertices: "ASD", a: 7.97, s: 3.61, d: -2.2 },
      ]),
      {
        status: "failed",
        reason: "please,check your argument, all three sides must be more zero",
      }
    );
  });
});

// mocha.run();
