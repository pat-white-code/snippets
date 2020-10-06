const {assert} = require("chai");
const solve = require('../codewars/stonesOnTheTable');

describe("Stones on the table",()=>{
  it("example tests",()=>{
    assert.strictEqual( solve("RRGGBB"), 3 );
    assert.strictEqual( solve("RGBRGB"), 0 );
    assert.strictEqual( solve("BGRBBGGBRRR"), 4 );
    assert.strictEqual( solve("GBBBGGRRGRB"), 4 );
    assert.strictEqual( solve("GBRGGRBBBBRRGGGB"), 7 );
  });
});