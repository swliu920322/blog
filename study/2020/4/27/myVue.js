// var car = {
//     brand: 'BMW',
//     price: 3000
// }
// let val = 4000;

// let car = {};
// let val = 3000;
// Object.defineProperty(car, 'price', {
//     get() {
//         console.log('price属性被读取了');
//         return val;
//     },
//     set(v) {
//         console.log('price属性被修改了');
//         val = v
//     }
// })
//
// car.price = 2000
// car.price

// function observable(obj) {
//     if(!obj || typeof obj !== 'object') {
//         return;
//     }
//     let keys = Object.keys(obj);
//     keys.forEach(key => {
//         defineReactive(obj, key, obj[key])
//     })
//     return obj
// }

// function defineReactive(obj, key, val) {
//     Object.defineProperty(obj, key, {
//         get() {
//             console.log(`${key}属性被读取了`)
//             return val;
//         },
//         set(v) {
//             console.log(`${key}属性被修改了`)
//             val = v
//         }
//     })
// }

let car = observable({
    brand: 'BMW',
    price: 3000
})

car.brand
car.price
car.brand = 'benci'
car.price = 1000



function observable(obj) {
    if(!obj || typeof obj !== 'object') {
        return;
    }
    let keys = Object.keys(obj);
    keys.forEach(key => {
        defineReactive(obj, key, obj[key])
    })
    return obj
}

function defineReactive(obj, key, val) {
    class Dep {
        constructor() {
            this.subs = []
        }
        // 增加订阅者
        addSub(sub) {
            this.subs.push(sub)
        }
        // 判断是否增加订阅者
        depend() {
            console.log(Dep)
            if (Dep.target) {
                this.addSub(Dep.target);
            }
        }
        // 通知订阅者更新
        notify() {
            this.subs.forEach(sub => sub.update())
        }
    }
    Dep.target = null;
    let dep = new Dep();
    Object.defineProperty(obj, key, {
        get() {
            dep.depend();
            console.log(`${key}属性被读取了`)
            return val;
        },
        set(v) {
            val = v;
            console.log(`${key}属性被修改了`);
            dep.notify()
        }
    })
}


class Watch{
    // vm vue实例对象
    // exp node节点v-model 或者v-on指令的属性值
    // cb watch 绑定的更新函数
    constructor(vm, exp, cb) {
        this.vm = vm;
        this.exp = exp;
        this.cb = cb;
        this.val = this.get();
    }
    update() {
        let val = this.vm.data[this.exp];
        let oldVal = this.val;
        if (val !== oldVal) {
            this.val = oldVal;
            this.cb.call(this.vm, value, oldVal)
        }

    }
    get() {
        Dep.target = this; // 缓存自己
        let value = this.vm.data[this.exp]; // 强制执行监听器的get函数
        Dep.target = null; // 释放自己
        return value
    }

}