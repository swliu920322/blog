class Target {
    public request(): string {
        return '目标，默认目标行为'
    }
}

class Adaptee {
    public specificRequest(): string {
        return '适配什么什么的'
    }
}

class Adapter extends Target {
    private adaptee: Adaptee;
    constructor(adaptee: Adaptee) {
        super()
        this.adaptee = adaptee;
    }
    public request(): string {
        const res = this.adaptee.specificRequest().split('').reverse().join('');
        return `Adapter: 转换 ${res}`
    }
}

function clientCode(target: Target) {
    console.log(target.request())
}
console.log('客户端：我能够转化');
const target = new Target();
clientCode(target);
console.log('');
const adaptee = new Adaptee();
console.log('客户端，adaptee是一个接口，看不懂')
console.log(`Adaptee:${adaptee.specificRequest()}`)

console.log('');
const adapter = new Adapter(adaptee);
clientCode(adapter)