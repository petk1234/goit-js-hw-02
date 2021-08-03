// do{
//     let input = prompt('Введите число');
//     if(input === null){
//         break;
//     }   
//     if(Number.isNaN(input) === false){
//         console.log('Вы вводите буквы, пожалуйста, введите цифры');
//         continue;
//     }
    
// }
// while(true);

const sum = function(numbers){
    let total = 0;
    let input;
    do{
        input = prompt('Введите число');
        if(input === null){
            break;
        
        }   
        if(Number.isNaN(Number(input)) === true){
            alert('Вы вводите буквы, пожалуйста, введите цифры');
            continue;
        }

        let numbers_ = numbers.push(Number(input));
        console.log(numbers);
    }
    while(true);

    if(numbers.length > 0){
        for(let number of numbers){
            total += number;
        }
    }
    return total;
}

const array = [1, 2, 3];
console.log('Общая сумма чисел равна:', sum(array));