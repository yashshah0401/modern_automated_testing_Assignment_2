export default function paintRequiredCalculator(area: number, coveragePerLiter: number): number {
  if (area < 0 || coveragePerLiter < 0) {
    return NaN;
  }
  if (coveragePerLiter === 0) {
    return Infinity;
  }
  return area / coveragePerLiter;
}
