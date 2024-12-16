import { sum } from './index.js';
import { test } from 'node:test';
import assert from 'node:assert';

test('sum function test', () => {
  // Test case 1: sum of positive numbers
  assert.strictEqual(sum(1, 2), 3, 'sum of 1 and 2 should be 3');

  // Test case 2: sum of negative numbers
  assert.strictEqual(sum(-1, -2), -3, 'sum of -1 and -2 should be -3');

  // Test case 3: sum of positive and negative numbers
  assert.strictEqual(sum(1, -2), -1, 'sum of 1 and -2 should be -1');

  // Test case 4: sum with zero
  assert.strictEqual(sum(0, 5), 5, 'sum of 0 and 5 should be 5');
  assert.strictEqual(sum(5, 0), 5, 'sum of 5 and 0 should be 5');
});
