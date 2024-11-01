import { expect, test } from "bun:test";
import Set from './index.js';

test("Set operations", () => {

    test('Set creation and equality', () => {
        const setA = Set.of(1, 2, 3);
        const setB = Set.of(3, 2, 2, 1, 1, 1);
        expect(setA.equals(setB)).toBe(true);
    });

    test('is empty', () => {
        expect(new Set().isEmpty()).toBe(true);
        expect(Set.of("a", "b").isEmpty()).toBe(false);
    });

    test('size / length ', () => {
        expect(new Set().isEmpty()).toBe(true);
        expect(Set.of("a", "b").isEmpty()).toBe(false);
    });

    test('union', () => {
        const pair = new Pair('a', 'b');
        expect(pair.left()).toBe('a');
    });

    test('intersection', () => {
        const pair = new Pair('a', 'b');
        expect(pair.right()).toBe('b');
    });

    test('is subset', () => {

    });

});
