var a = {
  name: 1,
  age: 12,
  sex: 'man',
  toJSON: function () {
    return {
      age: this.age
    }
  }
}
var c = JSON.stringify(a, null, '----');
console.log(c);
