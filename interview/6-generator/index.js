function* gene() {
  for (var i = 0; i < 10; i++) {
    yield i;
  }
}


// function custom(func) {
//   var cur = func();
//   while(cur.next().done === false) {
//     console.log(cur)
//   }
// }
function custom(func) {
  if (func().next().done === false) {
    custom(func());
  }
}

custom(gene);
// TODO
