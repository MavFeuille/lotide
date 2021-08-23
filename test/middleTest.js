const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
});

describe("#middle", () => {
  it("returns [1, 2] for []", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
});

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.equal(middle([1, 2, 3]), [2]);
  });
});

describe("#middle", () => {
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.equal(middle([1, 2, 3, 4, 5]), [3]);
  });
});

describe("#middle", () => {
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});

describe("#middle", () => {
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});


