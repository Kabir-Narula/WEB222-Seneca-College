const data = require('./data');
const { observationsByGeoPrivacy } = require('./observations');

describe('Problem 02 - observationsByGeoPrivacy()', function () {
  test('should throw if geoPrivacy is not one of the expected values', function () {
    // undefined
    expect(() => observationsByGeoPrivacy(data)).toThrow();
    // number
    expect(() => observationsByGeoPrivacy(data, 3)).toThrow();
    // boolean
    expect(() => observationsByGeoPrivacy(data, true)).toThrow();
    // unknown string
    expect(() => observationsByGeoPrivacy(data, 'unknown')).toThrow();
    // spelling mistake string
    expect(() => observationsByGeoPrivacy(data, 'oppen')).toThrow();
  });

  test('should include the expected objects for a geoPrivacy = obscured', function () {
    const obscured = observationsByGeoPrivacy(data, 'obscured');

    expect(obscured.length).toBe(3);
    obscured.forEach((observation) => {
      expect(typeof observation).toBe('object');
      expect(observation.geoprivacy).toBe('obscured');
    });
  });

  test('should include the expected objects for a geoPrivacy = OBSCURED', function () {
    const obscured = observationsByGeoPrivacy(data, 'OBSCURED');

    expect(obscured.length).toBe(3);
    obscured.forEach((observation) => {
      expect(typeof observation).toBe('object');
      expect(observation.geoprivacy).toBe('obscured');
    });
  });

  test('should include the expected objects for a geoPrivacy = null', function () {
    const obscured = observationsByGeoPrivacy(data, null);

    expect(obscured.length).toBe(7);
    obscured.forEach((observation) => {
      expect(typeof observation).toBe('object');
      expect(observation.geoprivacy).toBe(null);
    });
  });

  test('should return expected Array if data contains strings and null', function () {
    const mixedResults = {
      results: [
        { geoprivacy: 'obscured' },
        { geoprivacy: null },
        { geoprivacy: 'open' },
        { geoprivacy: 'obscured' }
      ]
    };
    const obscured = observationsByGeoPrivacy(mixedResults, 'obscured');
    expect(obscured.length).toBe(2);
    obscured.forEach((observation) => {
      expect(typeof observation).toBe('object');
      expect(observation.geoprivacy).toBe('obscured');
    });
  });
});
