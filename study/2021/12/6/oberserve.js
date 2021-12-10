class Observable {
    events = [];
    subscribes = [];
    errorFunc = [];
    completeFunc = []
    isComplete = false;
    timer = null;
    hasSubscribe = true;
    constructor(eventFunc) {
        this.events.push(eventFunc)
    }

    subscribe(subFunc) {
        if (typeof subFunc === 'function') {
            this.subscribes.push(subFunc);
        } else if (typeof subFunc === 'object') {
            subFunc.next && this.subscribes.push(subFunc.next);
            subFunc.error && this.errorFunc.push(subFunc.error)
            subFunc.complete && this.completeFunc.push(subFunc.complete)
        }
        if (this.timer) {
            clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
            this.events.forEach(i => {
                i(this)
            })
        })
    }

    next(val) {
        if (!this.isComplete && this.hasSubscribe) {
            this.subscribes.forEach(i => {
                i(val)
            })
        }
    }

    complete() {
        this.completeFunc.forEach(i => i())
        this.isComplete = true
    }
    unsubscribe() {
        this.hasSubscribe = false
    }
}

const observable = new Observable(sub => {
    sub.next(1);
    sub.next(2);
    sub.next(3);
    setTimeout(() => {
        sub.next(4)
    }, 1000)
    // sub.complete()
})

observable.subscribe({
    next(val) {
        console.log('got val' + val)
    },
    complete() {
        console.log('done');
    }
})

observable.subscribe({
    next(val) {
        console.log('aaaa val' + val)
    },
    complete() {
        console.log('doaaane');
    }
})
