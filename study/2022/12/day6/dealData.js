const {ReadFile} = require("../readFile");

class DealData extends ReadFile {
    constructor(props) {
        super(props);
    }

    read() {
        let index = 0;
        let arr = [];
        let obj = {}
        this.readFileAsArray().forEach((i) => {
            if (i.includes('**')) {
                const [label] = i.match(/(?<=\*\*).*?(?=\*)/g)
                obj.label = label;
            } else if (i.includes('BigDecimal')) {
                const [props] = i.match(/(?<=BigDecimal ).*?(?=;)/)
                obj.props = props
            }
            index++
            if (obj.label && obj.props) {
                arr.push(obj)
                obj = {}
            }
        })
        console.log(arr)
    }
}

new DealData('data.txt').read()