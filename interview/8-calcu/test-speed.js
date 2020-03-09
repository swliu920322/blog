var a = {};
const arr = Array.from({length: 1000000}, (i, index) => index);
arr.forEach(i => {
  a[i] = 'a';
});
// console.log(a);

function methodIn() {
  console.time();
  arr.forEach(i => {
    -13121 >> 0
  });
  console.timeEnd();
}
function belong() {
  console.time('belong');
  arr.forEach(i => {
    Math.trunc(-13121)
  });
  console.timeEnd('belong');
}

methodIn();
belong();
