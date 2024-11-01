class Set {
    constructor(equalityFunction = (x, y) => x === y) {
        this.equality = equalityFunction;
        this.head;
        this.tail;
    }

    isEmpty() {
        return !this.head && !this.tail;
    }

    add(x) {
        if (!this.head) {
            this.head = x;
            this.tail = new Set(this.equality);
            return this;
        }
        if(this.equality(this.head, x)) return this;
        return this.tail.add(x);
    }

    del(x) {

    }

    length() {

    }

    size() {
        
    }

    map(lambda) {

    }

    fold(initial, lambda) {

    }

    reduce(lambda, initial) {

    }

}