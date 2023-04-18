// Import the validate function
const validate = require('./../../script');

describe('validate', () => {
  test('returns true if the input is a number', () => {
    // Define a valid input value
    const input = 10;

    // Call the function and expect it to return true
    const result = validate(input);
    expect(result).toBe(true);
  });

  test('returns "Input can only be a number" if the input is not a number', () => {
    // Define an invalid input value
    const input = 'ten';

    // Call the function and expect it to return "Input can only be a number"
    const result = validate(input);
    expect(result).toBe('Input can only be a number');
  });
});
