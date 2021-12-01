"use strict"

let title = prompt("Как называется ваш проект?", "");
const screens = prompt("Какие типы экранов нужно разработать?","Простые, Сложные, Интерактивные"),
screenPrice = +prompt("Сколько будет стоить данная работа?", "12000"),
rollback = 38,
adaptive = confirm("Нужен ли адаптив на сайте?"),
service1 = prompt("Какой дополнительный тип услуги нужен?"),
servicePrice1 = +prompt("Сколько это будет стоить?"),
service2 = prompt("Какой дополнительный тип услуги нужен?"),
servicePrice2 = +prompt("Сколько это будет стоить?");


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

//Сумма всех дополнительных услуг
const getAllServicePrices = function(price1, price2) {
    return price1 + price2;
}

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

const allServicePrices = getAllServicePrices(servicePrice1 , servicePrice2);
const fullPrice = getFullPrice(screenPrice, allServicePrices);
const rollbackPercentage = fullPrice * (rollback / 100);
const servicePercentPrice = getServicePercentPrices(fullPrice, rollbackPercentage);

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(`Итоговую стоимость за вычетом процента отката ${getServicePercentPrices(fullPrice, rollbackPercentage)}`); 
console.log(screens.split(", "))
console.log(getRollbackMessage(fullPrice));
