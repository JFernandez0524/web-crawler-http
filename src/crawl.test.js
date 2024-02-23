import { expect, test } from '@jest/globals';
import { normalizeURL } from './crawl';

test('test normalize function', () => {
  const input = '';
  const actual = normalizeURL(input);
  const expected = 'Hello';
  expect(actual).toEqual(expected);
});
