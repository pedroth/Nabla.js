import { expect, test } from "bun:test";
import { List } from './index.js';
import { Tuple } from "../Tuple/index.js";

test("List creation", () => {
    expect(List.of(1, 2, 3).toArray()).toEqual([1, 2, 3]);
    expect(List.fromArray([1, 2, 3]).toArray()).toEqual([1, 2, 3])
    expect(new List(1, new List(2, new List(3, new List()))).toArray()).toEqual([1, 2, 3]);
    expect(new List().isEmpty()).toBe(true)
})

test("List size", () => {
    expect(List.of(1, 2, 3).size()).toBe(3);
    expect(new List().size()).toBe(0);
})

test("List add and pop", () => {
    const l = List.of(1, 2, 3);
    expect(l.add(4).toArray()).toEqual([1, 2, 3, 4]);
    expect(l.toArray()).toEqual([1, 2, 3, 4]);
    expect(l.pop()).toBe(4);
    expect(l.toArray()).toEqual([1, 2, 3]);
    l.pop()
    l.pop()
    l.pop()
    expect(l.pop()).toBe(undefined)
})

test("List get", () => {
    const l = List.of(1, 2, 3);
    expect(l.get(-1)).toBe(1)
    expect(l.get(0)).toBe(1)
    expect(l.get(1)).toBe(2)
    expect(l.get(2)).toBe(3)
    expect(l.get(6)).toBe(undefined)
})

test("List range", () => {
    expect(List.range(0, 10).toArray()).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
})

test("List map and reduce", () => {
    expect(
        List.of(1, 2, 3)
            .map(x => x * x)
            .fold(0, (e, x) => e + x)
    ).toBe(
        [1, 2, 3]
            .map(x => x * x)
            .reduce((e, x) => e + x, 0)
    )
})


test("List filter", () => {
    expect(
        List.range(0, 10)
            .filter(x => x % 2 === 1)
            .toArray()
    ).toEqual(
        [1, 3, 5, 7, 9]
    )
})

test("List union/concat", () => {
    expect(List.of(1,2,3).union(List.of(4,5,6)).union(List.of(7,8,9)).toArray())
        .toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
})


test("", () => {
    const expectedBinary = List.of(Tuple.of(0, 0), Tuple.of(0, 1), Tuple.of(1, 0), Tuple.of(1, 1));
    const expectedTernary = List.of(
        Tuple.of(0, 0, 0),
        Tuple.of(0, 0, 1),
        Tuple.of(0, 1, 0),
        Tuple.of(0, 1, 1),
        Tuple.of(1, 0, 0),
        Tuple.of(1, 0, 1),
        Tuple.of(1, 1, 0),
        Tuple.of(1, 1, 1),
    )
    const l = List.of(0, 1);
    expect(l.prod(l).equals(expectedBinary)).toBe(true);
    expect(l.prod(l).prod(l).equals(expectedTernary)).toBe(true);
})