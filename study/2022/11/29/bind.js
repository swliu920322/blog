const archer = {
    name: '',
    health: 30
}

  function  heal(...args) {
        return  args.reduce((r,c) => r*c)
    }


const healArcher = heal
    .bind(null, 2)
    .bind(null, 3)
    .bind(null, 3)
    .bind(null, 3)
console.log(healArcher(4))