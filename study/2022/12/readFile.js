const fs = require('fs');
const path = require('path')
module.exports.ReadFile = class ReadFile {
    #filePath = '';

    constructor(filePath) {
        this.#filePath = filePath;
    }

    readFileAsArray(symbol = '\n') {
        const input = fs.readFileSync(path.resolve(this.#filePath), {encoding: 'utf-8'})
        return input.split(symbol)
    }

}

exports.pipe = (...functions) => {
    if (functions.length === 0) {
        return arg => arg
    }
    if (functions.length === 1) {
        return functions[0]
    }
    return (...args) => functions.reduce((r, c) => c(r), ...args);
}
