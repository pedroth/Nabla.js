class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.queue = ;
    }

    isEmpty() {
        return this.head == null && this.tail == null;
    }

    add(x) {
        if(this.head == null) {
            this.head = x;
            this.tail = x;
            this.queue.push(x);
        }
        this.tail = x;

    }

    size() {
        return this.queue.length;
    }
}