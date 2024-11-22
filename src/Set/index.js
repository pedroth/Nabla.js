import { Tuple } from "../Tuple/index.js";

export class Set {
    constructor(equalityFunction = (x, y) => x === y || (x?.equals && x.equals(y))) {
        this.equality = equalityFunction;
        this.head;
        this.tail;
    }

    isEmpty() {
        return this.head == null && this.tail == null; // == on purpose
    }

    add(x) {
        if (this.head == null) {
            this.head = x;
            this.tail = new Set(this.equality);
            return this;
        }
        if (this.equality(this.head, x)) return this;
        this.tail = this.tail.add(x);
        return this;
    }

    union(set) {
        if (set.isEmpty()) return this;
        return this.add(set.head).union(set.tail);
    }

    intersection(set) {
        return this.filter(x => set.contains(x));
    }

    prod(set) {
        if (this.isEmpty()) return this;
        if (set.isEmpty()) return set;
        return this.map(x => {
            return set.map(y => {
                if (x instanceof Tuple && y instanceof Tuple) {
                    return x.join(y)
                }
                if (x instanceof Tuple && !(y instanceof Tuple)) {
                    return x.add(y)
                }
                return Tuple.of(x, y)
            })
        }).flatMap(x => x);
    }

    filter(predicate) {
        if (this.isEmpty()) return this;
        if (predicate(this.head)) return new Set(this.equality)
            .add(this.head)
            .union(this.tail.filter(predicate));
        return this.tail.filter(predicate);
    }

    map(lambda) {
        if (this.isEmpty()) return this;
        return new Set(this.equality).add(lambda(this.head)).union(this.tail.map(lambda));
    }

    flatMap(lambda) {
        if (this.isEmpty()) return this;
        return lambda(this.head).union(this.tail.flatMap(lambda));
    }

    fold(init, folder) {
        if (this.isEmpty()) return init;
        return this.tail.fold(folder(init, this.head), folder);
    }

    contains(x) {
        if (this.isEmpty()) return false;
        if (this.equality(this.head, x)) return true;
        return this.tail.contains(x);
    }

    isSubSet(set) {
        return this.map(x => set.contains(x)).fold(true, (e, x) => e && x);
    }

    equals(set) {
        if (!(set instanceof Set)) return false;
        return this.isSubSet(set) && set.isSubSet(this);
    }

    size() {
        if (this.isEmpty()) return 0;
        return 1 + this.tail.size();
    }

    toArray() {
        if (this.isEmpty()) return [];
        return [this.head, ...this.tail.toArray()];
    }

    toString() {
        return `{${this.toArray()}}`
    }

    toLatex() {
        return `\\{${this.toArray()}\\}`
    }

    static fromArray(array) {
        const ans = new Set();
        for (let i = 0; i < array.length; i++) {
            ans.add(array[i]);
        }
        return ans;
    }

    static of(...args) {
        const ans = new Set();
        for (let i = 0; i < args.length; i++) {
            ans.add(args[i]);
        }
        return ans;
    }

    static range(init = 0, end = 0) {
        if (init + 1 > end) return new Set();
        return (new Set().add(init)).union(Set.range(init + 1, end));
    }

}
