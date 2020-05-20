interface Builder {
    productPartA(): void;
    productPartB(): void;
    productPartC(): void;
}


class Product1 {
    public parts: string[] = [];
    public listParts(): void {
        console.log(`Product parts: ${this.parts.join(',')}`)
    }
}
class ConcreteBuilder1 implements Builder {
    constructor() {
        this.reset()
    }
    public reset(): void {
        this.product = new Product1()
    }
    private product: Product1;
    productPartA(): void {
        this.product.parts.push('PartA1')
    }
    productPartB(): void {
        this.product.parts.push('PartB1')
    }
    productPartC(): void {
        this.product.parts.push('PartC1')
    }

    public getProduct(): Product1 {
        const result = this.product;
        this.reset();
        return result;
    }

}

class Director {
    private builder: Builder;

    public setBuilder(builder: Builder): void {
        this.builder = builder
    }

    public buildMinimalViableProduct(): void {
        this.builder.productPartA();
    }

    public buildFullFeatureProduct(): void {
        this.builder.productPartA();
        this.builder.productPartB();
        this.builder.productPartC();
    }
}

function clientCode(director: Director) {
    const builder = new ConcreteBuilder1();
    director.setBuilder(builder);

    console.log('标注基础产品:')
    director.buildMinimalViableProduct();
    builder.getProduct().listParts();

    console.log('标准全部特性产品:');
    director.buildFullFeatureProduct();
    builder.getProduct().listParts();

    console.log('自定义产品:');
    builder.productPartA();
    builder.productPartB();
    builder.getProduct().listParts();


}
const director = new Director();
clientCode(director)
