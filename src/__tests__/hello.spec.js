const hello = require("../hello");

describe("hello", () => {
  it('says "Hello!"', () => {
    expect(hello()).toBe("Hello!");
  });
});
