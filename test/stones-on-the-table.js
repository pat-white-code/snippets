const {assert} = require("chai");
// const solve = require('../codewars/stonesOnTheTable');
const solve = require('../codewars/simpleTimeDifference');

// describe("Stones on the table",()=>{
//   it("example tests",()=>{
//     assert.strictEqual( solve("RRGGBB"), 3 );
//     assert.strictEqual( solve("RGBRGB"), 0 );
//     assert.strictEqual( solve("BGRBBGGBRRR"), 4 );
//     assert.strictEqual( solve("GBBBGGRRGRB"), 4 );
//     assert.strictEqual( solve("GBRGGRBBBBRRGGGB"), 7 );
//   });
// });

describe("simpleTimeDifference", ()=> {
  it('works', ()=> {
    assert.strictEqual(solve(["23:00","04:22","18:05","06:24"]), "11:40")
  })
})