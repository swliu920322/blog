function observable(obj) {
    if (!obj || typeof obj !== 'object') {
        return;
    }
    let keys = Object.keys(obj);
    keys.forEach(key => {
        defineReactive(obj, key, obj[key])
    })
}

function defineReactive(obj, key, val) {
    let dep = new Dep();
    Object.defineProperty(obj, key, {
        get() {
            dep.depend();
            console.log(`${key}属性被读取了`);
            return val;
        },
        set(v) {
            val = v;
            console.log(`${key}属性被修改了`);
            dep.notify()
        }
    })
}

class Dep {
    subs;

    constructor() {
        this.subs = []
    }

    addSub(sub) {
        this.subs.push(sub)
    }

    depend() {
        if (Dep.target) {
            this.addSub(Dep.target)
        }
    }

    notify() {
        this.subs.forEach(sub => {
            sub.update()
        })
    }
}

Dep.target = null