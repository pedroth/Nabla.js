import { expect, test } from "bun:test";
import { Set } from './index.js';
import { Tuple } from "../Tuple/index.js";

test("Set creation and equality", () => {
    const setA = Set.of(1, 2, 3);
    const setB = Set.of(3, 2, 2, 1, 1, 1);
    expect(setA.equals(setB)).toBe(true);
    expect(Set.of(2, 1).equals(setA)).toBe(false);
});


test("Set of sets", () => {
    const setA = new Set()
        .add(Set.of(1, 2, 3))
        .add(Set.of("a", "b", "c"))
        .add(Set.of(true, false));
    const setB = new Set()
        .add(Set.of(1, 2, 3))
        .add(Set.of(true, false));
    expect(setB.isSubSet(setA)).toBe(true);
    expect(setA.equals(setA)).toBe(true);
    expect(setA.equals(setB)).toBe(false);
})

test("is empty", () => {
    expect(new Set().isEmpty()).toBe(true);
    expect(Set.of("a", "b").isEmpty()).toBe(false);
});

test("size", () => {
    expect(new Set().size()).toBe(0);
    expect(Set.of("a", "b").size()).toBe(2);
});

test("union", () => {
    const union = Set.of("a", "b").union(Set.of("a", "c", "d"));
    const expectedUnion = Set.of("a", "b", "c", "d");
    expect(union.equals(expectedUnion)).toBe(true);
});

test("intersection", () => {
    let intersection = Set.of("a", "b", "c").intersection(Set.of("a", "c", "d"));
    let expectedIntersection = Set.of("c", "a");
    expect(intersection.equals(expectedIntersection)).toBe(true);
    intersection = Set.of(2, 4, 6).intersection(Set.of(1, 3, 5));
    expect(intersection.isEmpty()).toBe(true);
});

test("map", () => {
    expect(
        Set
            .range(0, 10)
            .map(x => x * x)
            .toArray()
    ).toEqual(
        [...Array(10)]
            .map((x, i) => i)
            .map(x => x * x)
    )
})

test("filter", () => {
    expect(
        Set
            .range(0, 10)
            .filter(x => x % 2 === 0)
            .toArray()
    )
        .toEqual(
            [...Array(10)]
                .map((x, i) => i)
                .filter(x => x % 2 === 0)
        )
})

test("cartesian product", () => {
    const expectedBinary = Set.of(Tuple.of(0, 0), Tuple.of(0, 1), Tuple.of(1, 0), Tuple.of(1, 1));
    const expectedTernary = Set.of(
        Tuple.of(0, 0, 0),
        Tuple.of(0, 0, 1),
        Tuple.of(0, 1, 0),
        Tuple.of(0, 1, 1),
        Tuple.of(1, 0, 0),
        Tuple.of(1, 0, 1),
        Tuple.of(1, 1, 0),
        Tuple.of(1, 1, 1),
    )
    const s = Set.of(0, 1);
    expect(s.prod(s).equals(expectedBinary)).toBe(true);
    expect(s.prod(s).prod(s).equals(expectedTernary)).toBe(true);
})

test("is subset", () => {
    expect(Set.of("a", "b").isSubSet(Set.of("a", "b", "c"))).toBe(true);
    expect(Set.of("a", "d").isSubSet(Set.of("a", "b", "c"))).toBe(false);
});
