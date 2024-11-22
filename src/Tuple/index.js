export class Tuple {
    constructor(head, tail) {
        this.head = head;
        this.tail = tail;
    }

    isEmpty() {
        return this.head == null && this.tail == null;
    }

    equals(tuple) {
        if (!(tuple instanceof Tuple)) return false;
        if (this.size() !== tuple.size()) return false;
        if (this.isEmpty() && tuple.isEmpty()) return true;
        const equalsOrSame = (a, b) => a === b || (typeof a?.equals === 'function' && a.equals(b));
        return equalsOrSame(this.head, tuple.head) && this.tail.equals(tuple.tail);
    }

    size() {
        if (this.isEmpty()) return 0;
        return 1 + this.tail.size();
    }

    add(x) {
        if (this.isEmpty()) return new Tuple(x, new Tuple());
        return new Tuple(this.head, this.tail.add(x));
    }

    map(lambda) {
        if (this.isEmpty()) return this;
        return new Tuple(lambda(this.head), this.tail.map(lambda));
    }

    fold(initialValue, reducer) {
        if (this.isEmpty()) return initialValue;
        return this.tail.fold(reducer(initialValue, this.head), reducer);
    }

    filter(predicate) {
        if (this.isEmpty()) return this;
        if (predicate(this.head))
            return new Tuple(this.head, this.tail.filter(predicate));
        return this.tail.filter(predicate);
    }

    zip(tuple) {
        if(this.isEmpty()) return this;

    }

    toArray() {
        if (this.isEmpty()) return [];
        return [this.head, ...this.tail.toArray()];
    }

    toString() {
        return `[${this.toArray()}]`;
    }

    static of(...array) {
        let tuple = new Tuple();
        array.forEach(x => tuple = tuple.add(x));
        return tuple;
    }

    static fromArray(array) {
        let tuple = new Tuple();
        array.forEach(x => tuple = tuple.add(x));
        return tuple;
    }

}