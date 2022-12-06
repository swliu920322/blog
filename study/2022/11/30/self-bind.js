
Function.prototype.bind = function(thisArg, ...args) {
    return () => this.apply(thisArg, args)
}

var a = {
    name: 1,

}
function speak(arg) {
    console.log('name=' + this.name + 'arg=' + arg)
}
speak.bind(a,1)()