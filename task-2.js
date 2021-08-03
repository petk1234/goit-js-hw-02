const calculateEngravingPrice = function(message, priceWord){
    const words = message.split(' ');
    let total = 0;
    for(let word of words){
        total += priceWord;
    }
    console.log(total);
}
calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus',10);
calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40);