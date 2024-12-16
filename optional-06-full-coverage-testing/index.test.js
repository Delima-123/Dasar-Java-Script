import sum from './index.js';
import { test } from 'node:test';
import assert from 'node:assert';

test('sum function test - valid numbers', () => {
  assert.strictEqual(sum(2, 3), 5, 'Sum of 2 and 3 should be 5');
  assert.strictEqual(sum(0, 0), 0, 'Sum of 0 and 0 should be 0');
  assert.strictEqual(sum(10, 20), 30, 'Sum of 10 and 20 should be 30');
});

test('sum function test - invalid types', () => {
  assert.strictEqual(sum('2', 3), 0, 'Sum of "2" and 3 should be 0');
  assert.strictEqual(sum(2, '3'), 0, 'Sum of 2 and "3" should be 0');
  assert.strictEqual(sum('a', 'b'), 0, 'Sum of "a" and "b" should be 0');
  assert.strictEqual(sum(null, 3), 0, 'Sum of null and 3 should be 0');
  assert.strictEqual(sum(2, undefined), 0, 'Sum of 2 and undefined should be 0');
});

test('sum function test - negative numbers', () => {
  assert.strictEqual(sum(-1, 3), 0, 'Sum of -1 and 3 should be 0');
  assert.strictEqual(sum(2, -3), 0, 'Sum of 2 and -3 should be 0');
  assert.strictEqual(sum(-1, -1), 0, 'Sum of -1 and -1 should be 0');
});

test('sum function test - mixed cases', () => {
  assert.strictEqual(sum(-1, '3'), 0, 'Sum of -1 and "3" should be 0');
  assert.strictEqual(sum('a', -2), 0, 'Sum of "a" and -2 should be 0');
});
