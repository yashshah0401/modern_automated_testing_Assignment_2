# SENG8120 Modern Automated Testing

## Overview
This repository contains two utility functions:
1. **calculateCanvasSize** - Calculates the canvas size based on length and width.
2. **paintRequiredCalculator** - Determines the amount of paint required based on area and coverage per liter.

## Installation
Ensure you have **Node.js** and **npm** installed.

Clone the repository:
```sh
git clone git@github.com:yashshah0401/modern_automated_testing_Assignment_2.git
cd <repository-folder>
```

Install dependencies:
```sh
npm install
```

## Running the Code
To execute the functions manually, create a script (e.g., `index.ts`) and import the functions:
```ts
import calculateCanvasSize from "./calculateCanvasSize/calculateCanvasSize";
import paintRequiredCalculator from "./paintRequiredCalculator/paintRequiredCalculator";

console.log(calculateCanvasSize("10", "100")); // Output: 1000
console.log(paintRequiredCalculator(50, 10)); // Output: 5
```

Then compile and run it using:
```sh
ts-node index.ts
```

## Running Tests
Run unit tests using Jest:
```sh
npm test
```

## Test Cases
### `calculateCanvasSize.test.ts`
- Returns correct result for valid inputs.
- Returns NaN for non-numeric or empty string inputs.
- Handles zero and large numeric inputs correctly.

### `paintRequiredCalculator.test.ts`
- Returns correct result for valid inputs.
- Handles edge cases like zero area, zero coverage, and negative values.
- Works with decimal values.
