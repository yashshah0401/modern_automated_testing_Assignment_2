import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paint required calculator", () => {
  test("should return expected result", () => {
    const result = paintRequiredCalculator(50, 10);
    expect(result).toEqual(5);
  });

  test("should return 0 when area is 0", () => {
    const result = paintRequiredCalculator(0, 10);
    expect(result).toEqual(0);
  });

  test("should return Infinity when coveragePerLiter is 0", () => {
    const result = paintRequiredCalculator(50, 0);
    expect(result).toEqual(Infinity);
  });

  test("should return NaN for non-numeric inputs", () => {
    const result = paintRequiredCalculator("abc" as any, 10);
    expect(result).toBeNaN();
  });

  test("should return correct result for decimal inputs", () => {
    const result = paintRequiredCalculator(50.5, 10.1);
    expect(result).toBeCloseTo(5);
  });

  test("should return NaN for negative area", () => {
    const result = paintRequiredCalculator(-50, 10);
    expect(result).toBeNaN();
  });

  test("should return NaN for negative coveragePerLiter", () => {
    const result = paintRequiredCalculator(50, -10);
    expect(result).toBeNaN();
  });
});
