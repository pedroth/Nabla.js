import { Tuple } from "../Tuple/index.js";

/**
 * L<x> -> [] | [x, L<x>]
 */
export class List {
    constructor(head, tail) {
        this.head = head;
        this.tail = tail;
    }

    isEmpty() {
        return this.head == null && this.tail == null;
    }

    size() {
        return this.isEmpty() ? 0 : 1 + this.tail.size()
    }

    get(k) {
        if (this.isEmpty()) return;
        if (k <= 0) return this.head;
        return this.tail.get(k - 1);
    }

    add(x) {
        // !! Mutation !!
        if (this.isEmpty()) {
            this.head = x;
            this.tail = new List();
            return this;
        }
        this.tail.add(x);
        return this;
    }

    pop() {
        // !! Mutation !!
        if (this.isEmpty()) return;
        if (this.tail.isEmpty()) {
            const ans = this.head;
            this.head = undefined;
            this.tail = undefined;
            return ans;
        }
        return this.tail.pop();
    }

    map(f) {
        if (this.isEmpty()) return this;
        return new List(f(this.head), this.tail.map(f))
    }

    flatMap(f = x => x) {
        if (this.isEmpty()) return this;
        return f(this.head).union(this.tail.flatMap(f));
    }

    fold(initial, f) {
        if (this.isEmpty()) return initial;
        return this.tail.fold(f(initial, this.head), f)
    }

    filter(predicate) {
        if (this.isEmpty()) return this;
        return predicate(this.head) ?
            new List(this.head, this.tail.filter(predicate)) :
            this.tail.filter(predicate);
    }

    union(list) {
        return this.isEmpty() ?
            list :
            new List(this.head, this.tail.union(list));
    }

    prod(list) {
        if(this.isEmpty()) return this;
        if(list.isEmpty()) return list;
        return this.map(x => {
            return list.map(y => {
                if (x instanceof Tuple && y instanceof Tuple) {
                    return x.join(y)
                }
                if (x instanceof Tuple && !(y instanceof Tuple)) {
                    return x.add(y)
                }
                return Tuple.of(x, y)
            })
        }).flatMap()
    }

    toArray() {
        if (this.isEmpty()) return []
        return this.tail.isEmpty() ? [this.head] : [this.head, ...this.tail.toArray()];
    }

    equals(list) {
        if (this.isEmpty() && list.isEmpty()) return true;
        return (this.head === list.head || this.head.equals(list.head)) && this.tail.equals(list.tail);
    }

    toString() {
        return `[${this.toArray()}]`
    }

    static of(...arr) {
        let ans = new List();
        arr.forEach(x => ans = ans.add(x));
        return ans;
    }

    static fromArray(arr) {
        const ans = new List();
        for (let i = 0; i < arr.length; i++) {
            ans.add(arr[i]);
        }
        return ans;
    }

    static range(init = 0, end = 0) {
        if (init + 1 > end) return new List();
        return new List().add(init).union(List.range(init + 1, end));
    }
}

