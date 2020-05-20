class Watcher {
    constructor(vm, exp, cb) {
        this.vm = vm;
        this.exp = exp;
        this.cb = cb;
        this.value = this.get();  // 将自己添加到订阅器的操作
    }

    get() {
        Dep.target = this;  // 缓存自己
        let value = this.vm.data[this.exp]  // 强制执行监听器里的get函数
        Dep.target = null;  // 释放自己
        return value;
    }

    update() {
        let value = this.vm.data[this.exp];
        let oldVal = this.value;
        if (value !== oldVal) {
            this.value = value;
            this.cb.call(this.vm, value, oldVal);
        }
    }

}


// vue双向绑定原理
// 通过Object.defeinPropty 对数据源的get set进行拦截， 走get时，收集获取key，set 发布修改 走watcher的update
// 通过watcher 中初始化走get，对依赖进收集，当数据源改变时，走watch的update, update用来修改值，并且用来修改vm的data，执行回调

