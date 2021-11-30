"use strict"

let lang = prompt('Какой язык выбираете?', 'en / ru');
const namePerson = "Артем";

if (lang === 'en') {
    console.log('Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday');
} else if (lang === 'ru'){
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
} else {
    console.log('Перезагрузите страницу');
}

switch (lang) {
    case 'en':
        console.log('Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday');
        break;
    case 'ru':
        console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
        break;
    default:
        console.log('Перезагрузите страницу');
}

let massiv = {'ru': 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье',
            'en': 'Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday'};
// ассоциативный массив

console.log(massiv[lang]);

let name = namePerson === "Артем" ? console.log('Директор') 
    : namePerson === "Александр" ? console.log('Преподаватель') 
    : console.log('Студент');

