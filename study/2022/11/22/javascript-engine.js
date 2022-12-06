function javascriptEngine(code) {
    return code.split(/\s+/);
}

console.log(javascriptEngine('var a = day1'))


Array.prototype.map = function (callbackfn) {
    let res = []
    for (i of this) {
        res.push(callbackfn(i))
    }
    return res;
}
const a = [1, 2, 3]
const b = a.map(i => i + 1)
console.log(b)