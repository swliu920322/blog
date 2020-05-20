interface AbstractFactory {
    createProductA(): AbstractProductA;

    createProductB(): AbstractProductB;
}
// 具体工厂
class ConcreteFactory1 implements AbstractFactory {
    createProductA(): AbstractProductA {
        return new ConcreteProductA1();
    }

    createProductB(): AbstractProductB {
        return new ConcreteProductB1();
    }

}

class ConcreteFactory2 implements AbstractFactory {
    createProductA(): AbstractProductA {
        return new ConcreteProductA2();
    }

    createProductB(): AbstractProductB {
        return new ConcreteProductB2();
    }

}

// 虚拟产品
interface AbstractProductA {
    usefulFunctionA(): string;
}
// 具体产品
class ConcreteProductA1 implements AbstractProductA {
    usefulFunctionA(): string {
        return "结果是产品A1";
    }
}

class ConcreteProductA2 implements AbstractProductA {
    usefulFunctionA(): string {
        return "结果是产品A2";
    }
}

interface AbstractProductB {
    usefulFunctionA(): string;

    anotherUsefulFunctionB(collaborator: AbstractProductA): string;
}

class ConcreteProductB1 implements AbstractProductB {
    usefulFunctionA(): string {
        return "结果是产品B1";
    }

    public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
        const result = collaborator.usefulFunctionA();
        return `结果B1为${result}`
    }
}

class ConcreteProductB2 implements AbstractProductB {
    usefulFunctionA(): string {
        return "结果是产品B2";
    }

    public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
        const result = collaborator.usefulFunctionA();
        return `结果B2为${result}`
    }
}

function clientCode(factory: AbstractFactory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();
    console.log(productB.usefulFunctionA())
    console.log(productB.anotherUsefulFunctionB(productA))
}

console.log('开始')
clientCode(new ConcreteFactory1());
console.log('中间')
clientCode(new ConcreteFactory2())
console.log('结束')
