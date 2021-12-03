"use strict"

let title;
let screens;
let screenPrice;
let rollback = 38;
let adaptive;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;


const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const asking = function() {
    title = prompt("Как называется ваш проект?", "Калькулятор");
    screens = prompt("Какие типы экранов нужно разработать?","Простые, Сложные, Интерактивные");

    do {
        screenPrice = prompt("Сколько будет стоить данная работа?", "12000");
    } while (!isNumber(screenPrice));

    adaptive = confirm("Нужен ли адаптив на сайте?");
}


//Сумма всех дополнительных услуг
const getAllServicePrices = function() {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?");
        } else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?");
        }
        screenPrice = prompt("Сколько будет стоить данная работа?");
        while (!isNumber(screenPrice)) {
            screenPrice = prompt("Сколько будет стоить данная работа?");
        } 
        sum += +screenPrice
    }
    return sum;
};



const getRollbackMessage = function(price) {
    if (price === 30000) {
    return 'Даем скидку в 10%';
    } else if (price >= 15000 && price < 30000) {
    return 'Даем скидку в 5%';
    } else if (price >= 0 && price < 15000) {
    return 'Скидка не предусмотрена';
    } else {
    return 'Что-то пошло не так';
    }
};


//Сумма стоимости верстки и стоимости доп услуг
function getFullPrice(screenPrice, allServicePrices) {
    return screenPrice + allServicePrices;
}

//Красивый title
const getTitle = function(name) {
    name = name.trim();
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    return name;
};

//Итоговая стоимость за вычетом процента отката
const getServicePercentPrices = function(fullPrice, rollback) {
    return fullPrice - Math.ceil(rollback);
}

//Типы переменных
const showTypeOf = function(variable) {
    console.log(variable, typeof(variable));
}

asking();
allServicePrices = getAllServicePrices();
fullPrice = +getFullPrice(screenPrice, allServicePrices);
const rollbackPercentage = fullPrice * (rollback / 100);
servicePercentPrice = getServicePercentPrices(fullPrice, rollbackPercentage);

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(`Итоговую стоимость за вычетом процента отката ${getServicePercentPrices(fullPrice, rollbackPercentage)}`); 
console.log(screens.split(", "))
console.log(getRollbackMessage(fullPrice));