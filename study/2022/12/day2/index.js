const {ReadFile} = require("../readFile");
//  A(石头)  65   X(石头)   88
//  B(布)   66   Y(布)   89
//  C(剪刀)  67   Z(剪刀)   90
//  win  A Y  24  B Z  24  C  X  21
//  same  A X  B Y  C  Z  23
//  lose  A Z  25  B X  22  C Y 22
class FirstGame extends ReadFile {
    constructor(filePath) {
        super(filePath)
    }

    getShapeScore(shape) {
        const match = {Y: 2, X: 1, Z: 3, A: 1, B: 2, C: 3}
        return match[shape]
    }

    getResultScore(shape, yourShape) {
        const yourCode = yourShape.charCodeAt(0);
        const theirCode = shape.charCodeAt(0);
        const codeDif = yourCode - theirCode;
        const scoreMath = {23: 3, 21: 6, 24: 6, 25: 0, 22: 0};
        return scoreMath[codeDif];
    }


    getScoreTotal() {
        return this.readFileAsArray().reduce((r, c) => {
            const [theirShape, yourSharp] = c.split(' ');
            return r + this.getResultScore(theirShape, yourSharp) + this.getShapeScore(yourSharp);
        }, 0)
    }

}

class SecondGame extends FirstGame {
    constructor(props) {
        super(props);
    }

    getResultScore(result) {
        const rule = {Y: 3, X: 0, Z: 6}
        return rule[result]
    }

    getScore(theirShape, result) {
        // Y same   X lose  Z win
        // here is the same condition
        let match = {A: 'A', B: 'B', C: 'C'}
        if (result === 'X') { // lose
            match = {A: 'C', B: 'A', C: 'B'}
        } else if (result === 'Z') { // win
            match = {A: 'B', B: 'C', C: 'A'}
        }
        return this.getShapeScore(match[theirShape])
    }

    getScoreTotal() {
        return this.readFileAsArray().reduce((r, c) => {
            const [theirShape, result] = c.split(' ');
            return r + this.getScore(theirShape, result) + this.getResultScore(result)
        }, 0)
    }
}

console.log('-----day2-homework-start-----')
const filePath = './day2/index.txt';
console.log(new FirstGame(filePath).getScoreTotal())
console.log(new SecondGame(filePath).getScoreTotal())
console.log('-----day2-homework-end-----')