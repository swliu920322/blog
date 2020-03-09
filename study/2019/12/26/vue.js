var a = { name: 1};
Object.defineProperty(a, 'name', {
  get: function () {
    console.log(this);
    return this;
  }
})
a.name
