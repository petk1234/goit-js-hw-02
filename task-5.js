const checkForSpam = function(message){
    let message_ = message.toLowerCase();
    if(message_.indexOf("spam") !== -1 || message.indexOf('sale') !== -1){
        return true;
    }
    else{
        return false;
    }
}

console.log(checkForSpam('Latest technology news'));
console.log(checkForSpam('JavaScript weekly newsletter'));
console.log(checkForSpam('Get best sale offers now!'));
console.log(checkForSpam('[SPAM] How to earn fast money?'));