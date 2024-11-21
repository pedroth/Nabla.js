import { expect, test } from "bun:test";
import { Pair } from './index.js';

test('Pair creation', () => {
  const pair = new Pair(2, 3);
  expect(pair.toArray()).toBe([2, 3]);
  expect(pair.left()).toBe(2);
  expect(pair.right()).toBe(3);
});

test('Pair map', () => {
  const pair = new Pair(2, 3);
  const result = pair.map(x => x * x);
  expect(result.toArray()).toBe([4, 9]);
});

test('Pair fold', () => {
  const pair = new Pair(2, 3);
  const result = pair.fold(0, (acc, x) => acc + x);
  expect(result).toBe(5);
});

test('Pair filter', () => {
  const pair1 = new Pair(2, 4);
  const pair2 = new Pair(1, 3);
  expect(pair1.filter(x => x % 2 === 0).equals(pair1)).toBe(true);
  expect(pair2.filter(x => x % 2 === 0).isEmpty()).toBe(true);
});

test('isEmpty', () => {
  expect(new Pair().isEmpty()).toBe(true);
  expect(new Pair(1, null).isEmpty()).toBe(false);
  expect(new Pair(undefined, 2).isEmpty()).toBe(false);
  expect(new Pair(1, 2).isEmpty()).toBe(false);
});

test('equals returns true for pairs with the same elements', () => {
  const pair1 = new Pair(1, 'a');
  const pair2 = new Pair(1, 'a');
  const pair3 = new Pair(2, 'b');

  expect(pair1.equals(pair2)).toBe(true);
  expect(pair1.equals(pair3)).toBe(false);
  expect(pair2.equals(pair3)).toBe(false);
});

test('equals returns false for pairs with different elements', () => {
  const pair1 = new Pair(1, 'a');
  const pair2 = new Pair('a', 1);
  const pair3 = new Pair(1, 'b');

  expect(pair1.equals(pair2)).toBe(false);
  expect(pair1.equals(pair3)).toBe(false);
  expect(pair2.equals(pair3)).toBe(false);
});
