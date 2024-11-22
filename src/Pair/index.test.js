import { expect, test } from "bun:test";
import { Pair } from './index.js';

test('Pair creation', () => {
  const pair = new Pair(2, 3);
  expect(pair.toArray()).toEqual([2, 3]);
  expect(pair.left()).toBe(2);
  expect(pair.right()).toBe(3);
});

test('Pair map', () => {
  const pair = new Pair(2, 3);
  const result = pair.map(x => x * x);
  expect(result.equals(Pair.of(4, 9))).toBe(true);
});

test('Pair fold', () => {
  const pair = new Pair(2, 3);
  const result = pair.fold(0, (acc, x) => acc + x);
  expect(result).toBe(5);
});

test('Pair zip', () => {
  const pair1 = new Pair(2, 4);
  const pair2 = new Pair(1, 3);
  expect(
    pair1
      .zip(pair2)
      .map(x => x.left() + x.right())
      .equals(Pair.of(3, 7)))
    .toBe(true)
});

test('isEmpty', () => {
  expect(new Pair().isEmpty()).toBe(true);
  expect(new Pair(1, null).isEmpty()).toBe(false);
  expect(new Pair(undefined, 2).isEmpty()).toBe(false);
  expect(new Pair(1, 2).isEmpty()).toBe(false);
});
