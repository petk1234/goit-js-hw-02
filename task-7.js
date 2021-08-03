const logins = ['Andrey', 'Gayy', 'Pidor', 'Sergay'];

const isLoginValid = function(login){
    if(login.length >= 4 && login.length <= 16){
        return true;
    }
    else{
        return false;
    }
}
// allLogins = login;
const isLoginUnique = function(allLogins, login){
    if(allLogins.indexOf(login) === -1){
        return true;
    }
    else return false;
}

const addLogin = function(allLogins, login){
    if(isLoginValid(login) === false){
        return 'Ошибка! Логин должен быть от 4 до 16 символов'
    }
    if(isLoginUnique(allLogins, login) === false){
        return ('Такой логин уже используется!');
    }
    allLogins = allLogins.push(login);
    return 'Логин успешно добавлен';
}

// Основная часть 
do{
    let input = prompt('Пожалуйста, введите логин!');
    if(input === null){
        break;
    }
    console.log(addLogin(logins, input));
    for(let login of logins){
        console.log(login);
    }
}
while(true);