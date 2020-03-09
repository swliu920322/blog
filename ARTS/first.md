## Algorithm
给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

```
示例 1:
输入: 123
输出: 321

示例 2:
输入: -123
输出: -321

示例 3:
输入: 120
输出: 21

注意:
假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
```
做法
```
var reverse = function(x) {
   var arr = Math.abs(x).toString().split('').reverse()
   try {
     const total = arr.reduce((pre,cur) => parseInt(pre, 10)*10 + parseInt(cur, 10))
     if (total > 2**31 -1) {
         return 0
     }
     return total * Math.sign(total)
   } catch(e) {
     console.log(e)
   }
};
```
换种思路
```
var reverseTwo = function (x) {
  const sign = Math.sign(x);
  var result = 0;

  while (x !== 0) {
    var last = Math.abs(x) % 10;
    x = Math.floor(Math.abs(x) / 10);
    result = result * 10 + last;
  }
  if (result > 2 ** 31 - 1) {
    return 0
  }
  return result * sign;
};

```

## Review(阅读并点评至少一篇英文技术文章)

* https://medium.com/payscale-tech/introduction-to-react-hooks-29ef97547862
* Introduction to React Hooks
* 本文举了一些简单的hooks告诉读者hooks的精髓之处，虽然有点简单，在项目里面真实的去用，去思考才能获得更多


## Tip(学习至少一个技术技巧)

之前一直没用过generator,如下
```
var a = function* () {
  let i = 1;
  while (i < 10) {
    yield i;
    i++;
  }
}
var b = a();
console.log(b.next());
console.log(b.next());
console.log(b.next());
```
generator可以一次次的返回，那什么时候能用到呢，

平时都是作为数组一起返回的，现在可以一个一个的返回，再循环里面处理，不用枚举了

## Share(分享一篇有观点和思考的技术文章)

  之前在做很多校验的时候，都直接去找合适的正则，时间久了就算不会正则，也觉得心安理得了，
上周再看廖雪峰的js课程中好好过了一遍正则的基础知识，感觉里面博大精深，
很多时候正则的作用很大很大，比如字符串替换，字符串分组，字符串提取都是非常有用的，
正则是一个很硬核的能力，需要好好学习

