export class Pair {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    left() {
        return this.x;
    }

    right() {
        return this.y;
    }

    isEmpty() {
        return this.x == null && this.y == null;
    }

    equals(pair) {
        if (!(pair instanceof Pair)) return false;
        return this.x === pair.left() || this.x?.equals && this.x.equals()
            && this.y === pair.right();
    }

    map(f) {
        return new Pair(f(this.x), f(this.y));
    }

    fold(acc, f) {
        return f(f(acc, this.x), this.y);
    }

    filter(predicate) {
        return predicate(this.x) && predicate(this.y) ? new Pair(this.x, this.y) : new Pair();
    }

    toArray() {
        return [this.x, this.y];
    }

    static of(x, y) {
        return new Pair(x, y);
    }
}
