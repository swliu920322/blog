function Ele(name, age){
    this.name = name;
    this.age = age;
}

Ele.prototype.say = function() {
    function ss() {
        console.log(this)
        return this.name + '---' + this.age
    }
    return ss()
    // return this.name + '---' + this.age
}

var aa = new Ele('haha',11)


console.log(aa.say.call(aa))
