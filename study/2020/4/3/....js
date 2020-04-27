var a = [1, 2, 3, 4, 5];

var b1 = param => console.log(param);

var c1 = (...param) => console.log(param);

var c2 = (...param) => console.log(...param);


b1(a);  //
b1(...a); //
c1(a);
c2(a);
c1(...a);
c2(...a);