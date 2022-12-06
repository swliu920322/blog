// inline cashing 内联缓存
function findUser(user){
    return `found ${user.firstName} ${user.lastName}`
}
const userData = {
    firstName: 'JohnSon',
    lastName: 'Junior'
}

// => `found JohnSon Junior`
findUser(userData)

// hidden class
function Animal(x,y) {
    this.x = x;
    this.y = y;
}
const animal1 = new Animal(1,2);
const animal2 = new Animal(3,4);
// error
animal1.name = 1;
animal1.age = 1;

animal2.age = 2
animal2.name = 3;
// error
delete animal1.x;