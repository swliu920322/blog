
class Employee {

    #name = 'test'
    constructor(name) {
        this.#setName(name)
    }
    #setName (name) {
        this.#name = name
    }
    getName() {
        return this.#name
    }

}

var a = new Employee('haha')
console.log(a)
console.log(a.getName())

