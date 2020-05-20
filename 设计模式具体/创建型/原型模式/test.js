class Test {
  name;
  address;
  fun;

  constructor(props) {
    this.name = props.name;
    this.address = props.address;
    this.fun = props.fun;
  }

  clone() {
    const temp = Object.create(this);
    temp.address = Object.create(this.address)
    temp.fun = Object.create(this.fun)
    return temp
  }

}
var a = new Test({name: 1, address: {age: 1}, fun: () => console.log(111)})
var b = a.clone()
console.log(b === a);
console.log(b.name === a.name);
console.log(b.address === a.address);
console.log(b.fun === a.fun);
console.log(a.name)
console.log(b.name)
console.log(a.address)
console.log(b.address)