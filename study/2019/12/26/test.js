function foo() {
  bar: {
    try {
      return 42;
    } finally {
      break bar;
    }
  }
  console.log('crazy');
  return 'Hello';
}

console.log(foo());

var a =[1,2,3,4,5,6];
dd: for (var i = 0; i < a.length; i++) {
  if (a[i] === 3) {
    break dd;
  }
  console.log(a[i]);
}
var nup = [];
out: for(var i = 0; i< a.length; i++) {
  inside: for(var j = 0; j < a.length; j++) {
    if (a[i] * a[j] === 8) {
      nup.push({ i, j });
      break out;
    }
    console.log('inside', { i, j });
  }
  console.log('out', { i, j });
}
