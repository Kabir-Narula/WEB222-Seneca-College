const data = require('./data');
const { getPlaces } = require('./observations');

const places = (...ids) => ({ results: [{ place_ids: ids }] });

describe('Problem 06 - getPlaces() function', function () {
  test('should return an Array', function () {
    let result = getPlaces(places(1234));
    expect(Array.isArray(result)).toBe(true);
  });

  test('should set a key with the place_id', function () {
    let result = getPlaces(places(1234));
    expect(Object.keys(result[0])).toEqual(['1234']);
  });

  test('should set a value with the expected URL', function () {
    let result = getPlaces(places(45678));
    expect(result[0][45678]).toBe('https://www.inaturalist.org/observations?place_id=45678');
  });

  test('should work for multiple place_ids', function () {
    let result = getPlaces(places(1, 2, 3));
    expect(result[0][1]).toBe('https://www.inaturalist.org/observations?place_id=1');
    expect(result[0][2]).toBe('https://www.inaturalist.org/observations?place_id=2');
    expect(result[0][3]).toBe('https://www.inaturalist.org/observations?place_id=3');
  });

  test('should work for multiple results', function () {
    let results = getPlaces(data);
    results.forEach(function (result) {
      Object.keys(result).forEach(function (key) {
        expect(/\d+/.test(key)).toBe(true);
        expect(/https:\/\/www.inaturalist.org\/observations\?place_id=\d+/.test(result[key])).toBe(
          true
        );
      });
    });
  });
});
