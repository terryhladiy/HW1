
const firstQuestion = prompt('Введіть свою дату народження');
const secondQuestion = prompt('В якому місті ви живете?');
const thirdQuestion = prompt('Який ваш улюблений вид спорту?');

alert('Ваш рік народження' + ' :' + ' ' + firstQuestion + `
Ви живете` + ' :' + ' ' + secondQuestion + `
Ваш улюблений вид спорта` + ' :' + ' ' + thirdQuestion);

let result;

switch (secondQuestion) {
    case 'Київ':
        result = 'Вы живете в столиці України';
        break;
    case 'Вашингтон':
        result = 'Вы живете в столиці США';
        break;
    case 'Лондон':
        result = 'Вы живете в столиці Франції';
        break;
    default:
        result = 'Шкода, що Ви не захотіли ввести своє місто';
}
alert(result);


let secondResult;

switch (thirdQuestion) {
    case 'Футбол':
        secondResult = 'Круто! Хоечеш стати як Кріштіану Роналду? ';
        break;
    case 'Баскетбол':
        secondResult = 'Круто! хочеш стати як Майкл Джордан?';
        break;
    case 'Бокс':
        secondResult = 'Круто! Хочеш стаати як Майк Тайсон?';
        break;
    default:
        secondResult = 'Шкода, що Ви не захотіли ввести свій улюблений вид спорта';
}

alert(secondResult);

let thirdResult;

switch (firstQuestion) {
    case null:
        thirdResult = 'Шкода, що Ви не захотіли ввести свою дату народження';
        break;
    default:
        thirdResult = 'Ух... Ти уже дорослий))';
}

alert(thirdResult);