// Function
import { fib } from "../src/task7.mjs";
// Configuration
mocha.setup("bdd");
const assert = chai.assert;
const expect = chai.expect;

//Suit
describe("Fibonacci number range", function () {
  it(`Show result from 1 numbers to 45.`, function () {
    assert.deepEqual(fib({ min: 1, max: 45 }), [1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });
  it("Show result with {length: 4 } return array [ 0, 1, 1, 2,]", function () {
    assert.deepEqual(fib({ length: 4 }), [0, 1, 1, 2]);
  });
  it(`Show result from 20 numbers to 300.`, function () {
    assert.deepEqual(fib({ min: 20, max: 300 }), [21, 34, 55, 89, 144, 233]);
  });
  it(`Show result from 0 numbers to 50.`, function () {
    assert.deepEqual(
      fib({ min: 0, max: 50 }),
      [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
    );
  });

  it(`Failed  when length invalid, not a number`, function () {
    assert.deepEqual(fib({ length: "er2" }), {
      status: "failed",
      reason:
        "please,check your argument, function arguments length must be number more then 0",
    });
  });
  it(`Failed  when length is negative number`, function () {
    assert.deepEqual(fib({ length: -5 }), {
      status: "failed",
      reason:
        "please,check your argument, function arguments length must be number more then 0",
    });
  });

  it(`Failed  when minimum not a number`, function () {
    assert.deepEqual(fib({ min: "5k0", max: 19 }), {
      status: "failed",
      reason: "please,check your argument, max and min must be a number",
    });
  });
  it(`Failed  when maximum not a number`, function () {
    assert.deepEqual(fib({ min: "50", max: "1r5" }), {
      status: "failed",
      reason: "please,check your argument, max and min must be a number",
    });
  });
});

// mocha.run();
