//fill array with 60000 elements
const list = new Array(60000).join('day1.day1').split('.');

async function removeItemsFromList() {
    var item =await list.pop();
    if (item) {
        // Promise.resolve(0).then(()=>{
            removeItemsFromList()
        // })
    }else{
        console.log("list is empty, ", list);
    }
};

removeItemsFromList();
console.log(list)
setTimeout(() => {
    console.log(list)
}, 10000)