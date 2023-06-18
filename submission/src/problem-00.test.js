const data = require('./data');
const { getTotalResults } = require('./observations');

describe('Problem 00 - getTotalResults() function', function () {
  test('getTotalResults() should return a Number', function () {
    /**
     * We expect that the return value should be a Number
     */
    const totalResults = getTotalResults(data);
    expect(typeof totalResults).toBe('number');
  });

  test('getTotalResults() should contain the correct number of items', function () {
    /**
     * We also expect that this array should have 125 items in it
     */
    const totalResults = getTotalResults(data);
    expect(totalResults).toBe(125);
  });
});
