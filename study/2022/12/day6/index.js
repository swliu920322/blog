const {ReadFile} = require("../readFile");


class Day6 extends ReadFile {

    constructor(props) {
        super(props);
    }

    getFirstPackage(bucketSize = 4) {
        let char = this.readFileAsArray()[0];
        let index = 0;
        while (index <= char.length - bucketSize) {
            // from index 0 start, check each is repetition
            // Set can Check for duplicates
            const curFourChar = char.slice(index, index + bucketSize);
            if (new Set(curFourChar).size === bucketSize) {
                break;
            }
            index++;
        }
        return index + bucketSize;
    }
}


console.log('-----day6-homework-start-----');
const instance = new Day6('./day6/index.txt')
console.log(instance.getFirstPackage())
console.log(instance.getFirstPackage(14))
console.log('-----day6-homework-end-----');