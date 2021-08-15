// Function
import { envelopAnalys, showInfo } from "../src/task2.mjs";
// Configuration
mocha.setup("bdd");
const assert = chai.assert;
const expect = chai.expect;

//Suit

describe("envelopAnalys", function () {
  it("function was call without arguments", function () {
    expect(envelopAnalys()).to.deep.equal(
      showInfo(
        "failed",
        "please,check your arguments, function  must accepts two objects"
      )
    );
  });

  it("function was call with value < 0 or >1000000", function () {
    expect(
      envelopAnalys(
        { height: 999999999, width: 14.5 },
        { height: 4.5, width: 9.5 }
      )
    ).to.deep.equal(
      showInfo(
        "failed",
        "please,check your arguments, value shoud be more than zero but less than 1000000"
      )
    );
  });

  it("envelop1 can put in envelop2", function () {
    expect(
      envelopAnalys({ height: 5.5, width: 8.5 }, { height: 9.5, width: 15.5 })
    ).to.equal(1);
  });
  it("envelop2 can put in envelop1", function () {
    expect(
      envelopAnalys({ height: 32.5, width: 42.6 }, { height: 8.6, width: 5.2 })
    ).to.equal(2);
  });

  it("envelop1 or envelop2 cant put in each other", function () {
    expect(
      envelopAnalys({ height: 12.5, width: 12.5 }, { height: 15.3, width: 8.5 })
    ).to.equal(0);
  });
});

// mocha.run();
