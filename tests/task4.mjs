// Function
import { palindrome, showInfo } from "../src/task4.mjs";
// Configuration
mocha.setup("bdd");
const assert = chai.assert;
const expect = chai.expect;

//Suit

describe("Palindrome", function () {
  it('Enter correct value. Expect type of result "string"', function () {
    assert.isString(palindrome(1234437), "str");
  });
  it("Function palindrome with parameter 548258859 return 5885", function () {
    assert.equal(palindrome(548258859), 5885);
  });

  it("Enter incorrect value. ", function () {
    assert.isNotNumber(palindrome("55"), {
      status: "failed",
      reason:
        "please,check your argument, function  must accepts data type of number",
    });
  });

  it(`Failed  when field are empty`, function () {
    assert.deepEqual(palindrome(), {
      status: "failed",
      reason: "please,check your argument, function  must accept a number",
    });
  });

  it(`Failed when a submitted palindrome lower than 10!`, function () {
    assert.deepEqual(palindrome(9), {
      status: "failed",
      reason: "please,check your argument, function  must be more or equal 10",
    });
  });

  it("Failed  input number more then 9007199254740991", function () {
    assert.deepEqual(palindrome(9007199254740992), {
      status: "failed",
      reason:
        "please,check your argument, function  must be less than 9007199254740991",
    });
  });
  it(`Failed  when sending a negative number!`, function () {
    assert.deepEqual(palindrome(-5), {
      status: "failed",
      reason: "please,check your argument, function  must accept a number",
    });
  });
});

// mocha.run();
