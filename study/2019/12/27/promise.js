
var a = new Promise(resolve => {
  console.log(1)
  setTimeout(() => {
    console.log(2)
  }, 100)
})
console.log(3)
setTimeout(() => {
  console.log(4)
}, 100)

var a = new Promise((resolve, reject) => {
  aa();
  resolve(11);
}).then(onfufilled => {
  console.log(onfufilled);
}, onreject => {
  console.log(onreject)
})
