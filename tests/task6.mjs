// Function
import { sequence, showInfo } from "../src/task6.mjs";
// Configuration
mocha.setup("bdd");
const assert = chai.assert;
const expect = chai.expect;

//Suit

describe("sequence", function () {
  it(`Show result of 3 numbers if square 36.`, function () {
    assert.equal(sequence(3, 36), "6, 7, 8");
  });
  it(`Show result of 1 numbers if square 25.`, function () {
    assert.equal(sequence(1, 25), "5");
  });
  it(`It returns  result in string .`, function () {
    assert.equal(typeof sequence(1, 25), "string");
  });

  it(`Failed  when all fields are empty`, function () {
    assert.deepEqual(sequence("", ""), {
      status: "failed",
      reason: "please,check your argument, function  arguments must be numbers",
    });
  });

  it(`Failed  when length field are empty`, function () {
    assert.deepEqual(sequence("", 36), {
      status: "failed",
      reason: "please,check your argument, function  arguments must be numbers",
    });
  });

  it(`Failed  when square field are empty`, function () {
    assert.deepEqual(sequence(5, ""), {
      status: "failed",
      reason: "please,check your argument, function  arguments must be numbers",
    });
  });

  it(`Failed incorrectly entered length and / or square.`, function () {
    assert.deepEqual(sequence("5t", 25), {
      status: "failed",
      reason: "please,check your argument, function  arguments must be numbers",
    });
  });
  it("Failed   length can't be a negative return Error ", function () {
    assert.deepEqual(sequence(-5, 256), {
      status: "failed",
      reason:
        "please,check your argument, function arguments must be greater than 0",
    });
  });
});

// mocha.run();
