const items = ['Poly', 'Chelsey', 'Suka'];
const logItems = function(array){
    for(let i = 0; i < array.length; i += 1){
        console.log(`${i+1} - ${array[i]}`);
    }
}
logItems(items);