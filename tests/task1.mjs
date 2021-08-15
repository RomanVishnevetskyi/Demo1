// Function
import { createChessBoard, showInfo } from "../src/task1.mjs";
// Configuration
mocha.setup("bdd");
const assert = chai.assert;
const expect = chai.expect;

//Suit

describe("createChessBoard", function () {
  it("function was call without arguments", function () {
    expect(createChessBoard()).to.deep.equal(
      showInfo(
        "failed",
        "please,check your arguments length and width must be an integer number and symbol must be a string"
      )
    );
  });

  it("function was call with not integer numbers of arguments", function () {
    expect(createChessBoard(4.6, 12.4, "*")).to.deep.equal({
      status: "failed",
      reason:
        "please,check your arguments length and width must be an integer number and symbol must be a string",
    });
  });
  it("function was call with empty string of symbol", function () {
    expect(createChessBoard(6, 12, "")).to.deep.equal(
      showInfo(
        "failed",
        "please,check your arguments, incorrect arguments  symbol length must be equals 1"
      )
    );
  });
  it("function was call with symbol.length >1", function () {
    expect(createChessBoard(6, 12, "***")).to.deep.equal(
      showInfo(
        "failed",
        "please,check your arguments, incorrect arguments  symbol length must be equals 1"
      )
    );
  });
  it("function was call with negative numbers numbers of arguments", function () {
    expect(createChessBoard(-5, 12, "*")).to.deep.equal(
      showInfo(
        "failed",
        "please, check your arguments, length or width must be  more than zero but les than 20"
      )
    );
  });
  it("function has been called with incorrect value of arguments: length and width >= 20", () => {
    expect(createChessBoard(25, 25, "*")).to.deep.equal(
      showInfo(
        "failed",
        "please, check your arguments, length or width must be  more than zero but les than 20"
      )
    );
  });
  it("function has been called with correct arguments and returns string", () => {
    expect(createChessBoard(5, 5, "*")).to.be.an("string");
  });
  it("function has been called with correct arguments and returns string with length>0", () => {
    expect(createChessBoard(5, 5, "*")).to.not.be.empty;
  });
  it("function has been called with correct arguments and returns string", () => {
    expect(createChessBoard(5, 5, "*")).to.equal(
      "* * * * * \n * * * * *\n* * * * * \n * * * * *\n* * * * * \n"
    );
  });
});

mocha.run();
