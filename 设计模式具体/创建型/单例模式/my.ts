function a() {
    var temp;
    return {
        getTemp: () => {
            if (!temp) {
                temp = {a: 1};
            }
            return temp;
        },
        setTemp: val => temp = val
    }
}

const {getTemp} = a()
var aa = getTemp();
var bb = getTemp();
console.log(aa === bb)


class single {
    instance;

    constructor() {
        if (this.instance) {
            this.instance = {a: 11}
        }
    }

}

var cc = new single();

class Singletons {
    constructor() {
    }
    instance;
    getInstance() {
        if (!Singletons.instance) {
            Singletons.instance = {sex:1}
        }
        return Singletons.instance
    }
}

console.log(Singletons.getInstance() === Singletons.getInstance())