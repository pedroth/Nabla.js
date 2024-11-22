import { expect, test } from "bun:test";
import { Tuple } from './index.js';

test('Tuple creation', () => {
    const tuple = Tuple.of(2, 3, "a");
    expect(tuple.toArray()).toEqual([2, 3, "a"]);
    expect(tuple.head).toBe(2);
    expect(tuple.tail.head).toBe(3);
    expect(tuple.tail.tail.head).toBe("a");
});

test('isEmpty', () => {
    expect(Tuple.of().isEmpty()).toBe(true);
    expect(Tuple.of(1, 2).isEmpty()).toBe(false);
});

test('equals', () => {
    expect(Tuple.of(1, 2, 3, 4, 5).equals(Tuple.of(1, 2, 3, 4, 5))).toBe(true);
    expect(Tuple.of("a", "b", "c").equals(Tuple.of("a", "b", "d"))).toBe(false);
});

test('Tuple map', () => {
    expect(Tuple.of(1, 2, 3).map(x => x * x).toArray()).toEqual([1, 4, 9])
});

test('Tuple fold', () => {
    expect(Tuple.of(1, 2, 3).fold(0, (e, x) => e + x)).toEqual(1 + 2 + 3)
});

test("Tuple size", () => {
    expect(Tuple.of(1, 2, 3).size()).toBe(3);
})

test('Tuple filter', () => {
    expect(
        Tuple
            .of(1, 2, 3, 4, 5, 6, 7, 8, 9)
            .filter(x => x % 2 === 1)
            .equals(Tuple.of(1, 3, 5, 7, 9)))
        .toBe(true);
});

test('Tuple zip', () => {
    expect(
        Tuple.of("a", "b", "c")
            .zip(Tuple.of(1, 2, 3))
            .map(x => x.left() + x.right())
            .toArray()
    ).toEqual(["a1", "b2", "c3"])
});

test("Tuple union", () => {
    expect(
        Tuple.of(false, true).union(Tuple.of(1, 2, 3)).toArray()
    ).toEqual([false, true, 1, 2, 3])
})

