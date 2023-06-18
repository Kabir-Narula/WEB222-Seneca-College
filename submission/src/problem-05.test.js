/* eslint-disable jest/expect-expect */
const data = require('./data');
const { getObservationsByPositionalAccuracy } = require('./observations');

describe('Problem 05 - getObservationsByPositionalAccuracy() function', function () {
  function expectSuitableArray(value, expectedLength) {
    expect(Array.isArray(value)).toBe(true);
    expect(value.length).toBe(expectedLength);
  }

  test('missing options object returns same Array as original', function () {
    let results = getObservationsByPositionalAccuracy(data);
    expect(results).toEqual(data.results);
  });

  test('empty options object returns same Array as original', function () {
    let results = getObservationsByPositionalAccuracy(data, {});
    expect(results).toEqual(data.results);
  });

  test('eq value returns an Array of expected results', function () {
    let results = getObservationsByPositionalAccuracy(data, { eq: 405 });
    expectSuitableArray(results, 1);
    results.forEach((result) => expect(result.positional_accuracy).toBe(405));
  });

  test('eq with unknown value returns an empty Array', function () {
    let results = getObservationsByPositionalAccuracy(data, { eq: 406 });
    expectSuitableArray(results, 0);
  });

  test('gt value returns an Array of expected results', function () {
    let results = getObservationsByPositionalAccuracy(data, { gt: 100 });
    expectSuitableArray(results, 3);
    results.forEach((result) => expect(result.positional_accuracy).toBeGreaterThanOrEqual(100));
  });

  test('gt value larger than largest known returns an empty Array', function () {
    let results = getObservationsByPositionalAccuracy(data, { gt: 1000 });
    expectSuitableArray(results, 0);
  });

  test('lt value returns an Array of expected results', function () {
    let results = getObservationsByPositionalAccuracy(data, { lt: 100 });
    expectSuitableArray(results, 7);
    results.forEach((result) => expect(result.positional_accuracy).toBeLessThanOrEqual(100));
  });

  test('lt value smaller than smallest known returns an empty Array', function () {
    let results = getObservationsByPositionalAccuracy(data, { lt: 1 });
    expectSuitableArray(results, 0);
  });

  test('gt and lt values together return an Array of expected results', function () {
    let results = getObservationsByPositionalAccuracy(data, { gt: 100, lt: 200 });
    expectSuitableArray(results, 2);
    results.forEach((result) => {
      expect(result.positional_accuracy).toBeLessThanOrEqual(200);
      expect(result.positional_accuracy).toBeGreaterThanOrEqual(100);
    });
  });

  test('gt and lt values too close together return an empty Array', function () {
    let results = getObservationsByPositionalAccuracy(data, { gt: 100, lt: 100 });
    expectSuitableArray(results, 0);
  });

  test('eq is used over min/lt if all are present', function () {
    let results = getObservationsByPositionalAccuracy(data, { eq: 405, gt: 1, lt: 100 });
    expectSuitableArray(results, 1);
    results.forEach((result) => expect(result.positional_accuracy).toBe(405));
  });
});
