const R = require("../rambda")

describe("omit", () => {
  it("", () => {
    expect(
      R.omit(
        [ "a", "c" ]
      )({
        a : "foo",
        b : "bar",
        c : "baz",
      })
    ).toEqual({ b : "bar" })
  })
})
