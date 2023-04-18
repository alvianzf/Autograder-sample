const calculate = require('./../../script');

describe('calculate', () => {
  test('calculates the area of a triangle given its height and weight', () => {
    // Define the inputs to the function
    const height = 10;
    const weight = 20;

    // Define the expected result
    const expectedResult = 100;

    // Call the function and check the result
    const result = calculate(height, weight);
    expect(result).toBe(expectedResult);
  });
});
