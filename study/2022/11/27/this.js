// const character = {
//     name: 'Simon',
//     getCharacter() {
//         return this.name;
//     }
// };
// const giveMeTheCharacterNOW = () => {
//     console.log(this)
//     return character.getCharacter()
// }
//
// console.log('?', giveMeTheCharacterNOW()); //this should return


const character = {
    name: 'Simon',
    getCharacter() {
        return () => this.name;
    }
};
const giveMeTheCharacterNOW = character.getCharacter();

//How Would you fix this?
console.log('?', giveMeTheCharacterNOW());