// Function
import { luckyTickets, showInfo } from "../src/task5.mjs";
// Configuration
mocha.setup("bdd");
const assert = chai.assert;
const expect = chai.expect;

//Suit
describe("Lucky Tickets", function () {
  it(`Function with correct data.`, function () {
    assert.deepEqual(luckyTickets({ min: 100, max: 200 }), {
      winner: "hard",
      tickets: { simple: 0, hard: 8 },
    });
  });

  it(`Show result if winner hard.`, function () {
    assert.deepEqual(luckyTickets({ min: 455, max: 55666 }), {
      winner: "hard",
      tickets: { simple: 1983, hard: 2199 },
    });
  });

  it(`Show result if winner simple.`, function () {
    assert.deepEqual(luckyTickets({ min: 848548, max: 22 }), {
      winner: "simple",
      tickets: { simple: 48288, hard: 22182 },
    });
  });

  it(`Failed  when arguments not Obj`, function () {
    assert.isObject(luckyTickets(""), {
      status: "failed",
      reason: "please,check your argument, arguments must be an object",
    });
  });
  it(`Failed  when one of the fields is a negative number`, function () {
    assert.deepEqual(luckyTickets({ min: -5, max: 5 }), {
      status: "failed",
      reason:
        "please,check your argument, min or max must be integer number and  more then zero but less then 999999",
    });
  });
  it(`Failed  when min field is empty`, function () {
    assert.deepEqual(luckyTickets({ min: null, max: 6 }), {
      status: "failed",
      reason:
        "please,check your argument, min or max must be integer number and  more then zero but less then 999999",
    });
  });
  it(`Failed  when max field is empty`, function () {
    assert.deepEqual(luckyTickets({ min: 8, max: null }), {
      status: "failed",
      reason:
        "please,check your argument, min or max must be integer number and  more then zero but less then 999999",
    });
  });

  it(`Failed  when the maximum value more then 999999.`, function () {
    assert.deepEqual(luckyTickets({ min: 1, max: 1000000 }), {
      status: "failed",
      reason:
        "please,check your argument, min or max must be integer number and  more then zero but less then 999999",
    });
  });
});

// mocha.run();
