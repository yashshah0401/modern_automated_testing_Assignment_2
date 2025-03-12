import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  test("returns correct result for valid inputs", () => {
    const result = calculateCanvasSize("10", "100");
    expect(result).toEqual(1000);
  });

  test("returns NaN for non-numeric inputs", () => {
    const result = calculateCanvasSize("abc", "100");
    expect(result).toBeNaN();
  });

  test("returns NaN for empty string inputs", () => {
    const result = calculateCanvasSize("", "");
    expect(result).toBeNaN();
  });

  test("returns 0 for zero inputs", () => {
    const result = calculateCanvasSize("0", "100");
    expect(result).toEqual(0);
  });
});
