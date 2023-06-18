const { extractTimeZones, extractTimeZones2 } = require('./observations');
const data = require('./data');
const result0 = data.results[0];
const result1 = data.results[1];

describe('extractTimeZones() and extractTimeZones2', () => {
  [extractTimeZones, extractTimeZones2].forEach((fn) => {
    test('should return a single result', () => {
      expect(fn({ results: [result0] })).toEqual(['Pacific/Honolulu']);
    });

    test('extractTimeZones should not return duplicates', () => {
      expect(fn({ results: [result0, result0] })).toEqual(['Pacific/Honolulu']);
    });

    test('extractTimeZones should not deal properly with multiple values without duplicating', () => {
      expect(fn({ results: [result0, result0, result1, result1] })).toEqual([
        'Pacific/Honolulu',
        'America/New_York'
      ]);
    });

    test('extractTimeZones should work on real data', () => {
      expect(fn(data)).toEqual(['Pacific/Honolulu', 'America/New_York']);
    });
  });
});
