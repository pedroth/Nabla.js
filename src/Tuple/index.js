export class Tuple {
    constructor(head, tail) {
        this.head = head;
        this.tail = tail;
    }

    isEmpty() {
        return this.head == null && this.tail == null;
    }

    equals(tuple) {
        if(!(tuple instanceof Tuple)) return false;
        return 
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
        return this.tail.fold(reducer(initialValue, this.head()), reducer);
    }

    toArray() {
        if (this.isEmpty()) return [];
        return [this.head, ...this.tail.toArray()];
    }

    toString() {
        return `${this.toArray()}`;
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